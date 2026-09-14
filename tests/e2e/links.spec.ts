import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

const ROUTES = [
  "/",
  "/platform/",
  "/solutions/mortgage/",
  "/solutions/banking/",
  "/solutions/insurance/",
  "/contact/",
];

type LinkInfo = { href: string; text: string; region: string };

async function collectLinks(page: Page): Promise<LinkInfo[]> {
  return page.evaluate(() =>
    Array.from(document.querySelectorAll<HTMLAnchorElement>("header a, main a, footer a")).map(
      (anchor) => ({
        href: anchor.getAttribute("href") ?? "",
        text: (anchor.textContent || anchor.getAttribute("aria-label") || "").trim(),
        region: anchor.closest("header") ? "header" : anchor.closest("footer") ? "footer" : "main",
      }),
    ),
  );
}

test.describe("every internal link resolves to a real page and section", () => {
  for (const route of ROUTES) {
    test(`links on ${route}`, async ({ page, request, baseURL }, testInfo) => {
      test.skip(testInfo.project.name !== "desktop", "Link graph is viewport independent");
      await page.goto(route);
      const links = await collectLinks(page);
      expect(links.length).toBeGreaterThan(0);

      const problems: string[] = [];
      const idsByPath = new Map<string, Set<string>>();

      for (const link of links) {
        if (link.href === "#" || link.href === "") {
          problems.push(`${link.region} "${link.text}" has a placeholder href`);
          continue;
        }
        if (/^(mailto:|tel:)/.test(link.href)) continue;
        if (/^https?:\/\//.test(link.href)) {
          expect(link.href.startsWith("https://"), `${link.text} should use https`).toBe(true);
          continue;
        }

        const target = new URL(link.href, new URL(route, baseURL));
        const path = target.pathname;
        if (!path.endsWith("/")) {
          problems.push(`${link.region} "${link.text}" -> ${link.href} is missing a trailing slash`);
        }

        if (!idsByPath.has(path)) {
          const response = await request.get(path);
          if (!response.ok()) {
            problems.push(`${link.region} "${link.text}" -> ${path} returned ${response.status()}`);
            idsByPath.set(path, new Set());
            continue;
          }
          const html = await response.text();
          idsByPath.set(path, new Set(Array.from(html.matchAll(/\sid="([^"]+)"/g), (m) => m[1])));
        }

        const hash = decodeURIComponent(target.hash.slice(1));
        if (hash && !idsByPath.get(path)?.has(hash)) {
          problems.push(`${link.region} "${link.text}" -> ${link.href} has no #${hash} on ${path}`);
        }
      }

      expect(problems).toEqual([]);
    });
  }
});

test("header section links jump to home-page sections from a subpage", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "Desktop inline navigation");
  await page.goto("/solutions/banking/");
  await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "FAQ" }).click();
  await expect(page).toHaveURL(/\/#faq$/);
  await expect(page.locator("#faq")).toBeInViewport();
});

test("mobile menu section links work from a subpage", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === "desktop", "Mobile sheet navigation");
  await page.goto("/platform/");
  await page.getByRole("button", { name: "Open navigation" }).click();
  const dialog = page.getByRole("dialog", { name: "Site navigation" });
  await dialog.getByRole("link", { name: "How It Works" }).click();
  await expect(page).toHaveURL(/\/#how-it-works$/);
  await expect(page.locator("#how-it-works")).toBeInViewport();
});

test("Industries menu stays open when clicked after hover and closes on Escape", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "Desktop dropdown");
  await page.goto("/");
  const trigger = page.getByRole("navigation", { name: "Primary" }).getByRole("button", { name: "Industries" });
  await trigger.hover();
  await trigger.click();
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  await page.getByRole("link", { name: /Banking AI/ }).first().focus();
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await expect(trigger).toBeFocused();
});

test.describe("content is visible without JavaScript", () => {
  test.use({ javaScriptEnabled: false });

  for (const route of ROUTES) {
    test(`no hidden content on ${route}`, async ({ page }) => {
      await page.goto(route);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      await expect(page.locator("header.site-header")).toBeVisible();
      await expect(page.locator("footer.site-footer")).toBeVisible();

      const hiddenCount = await page.evaluate(
        () =>
          Array.from(document.querySelectorAll<HTMLElement>("main *, header *, footer *")).filter(
            (el) => el.style.opacity === "0",
          ).length,
      );
      expect(hiddenCount).toBe(0);
    });
  }
});

test("reduced motion renders without hydration errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error" && /hydrat/i.test(message.text())) errors.push(message.text());
  });
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const route of ROUTES) {
    await page.goto(route);
    await page.waitForLoadState("networkidle");
  }
  expect(errors).toEqual([]);
});

test.describe("every page passes automated accessibility checks", () => {
  for (const route of ROUTES) {
    test(`axe on ${route}`, async ({ page }) => {
      await page.emulateMedia({ reducedMotion: "reduce" });
      await page.goto(route);
      const results = await new AxeBuilder({ page }).analyze();
      expect(
        results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(" ")).join(", ")}`),
      ).toEqual([]);
    });
  }
});
