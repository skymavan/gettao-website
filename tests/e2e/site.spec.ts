import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("core narrative, anchors, FAQ, and layout remain usable", async ({ page }) => {
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Digital workers for financial operations.",
    }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Book a Demo" }).first()).toHaveAttribute(
    "href",
    /#contact$/,
  );
  await page.getByRole("link", { name: "See how it works" }).click();
  await expect(page).toHaveURL(/#how-it-works$/);

  await page
    .getByRole("button", { name: "What industries does Gettao serve?" })
    .click();
  await expect(
    page.getByText("We specialize in AI solutions for mortgage lenders"),
  ).toBeVisible();

  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
  expect(overflow).toBeLessThanOrEqual(1);
});

test("uses the Gettao identity with light theme and logo images", async ({ page }) => {
  await expect(page.locator('meta[name="color-scheme"]')).toHaveAttribute("content", "light");
  const headerLogo = page.locator(".site-header img");
  await expect(headerLogo).toBeVisible();
  await expect(headerLogo).toHaveAttribute("src", /logo\.png/);
  const footerLogo = page.locator(".footer-brand img");
  await expect(footerLogo).toBeVisible();
  await expect(footerLogo).toHaveAttribute("src", /logo\.png/);
});

const footerLogoRoutes = [
  "/",
  "/solutions/mortgage/",
  "/solutions/banking/",
  "/solutions/insurance/",
  "/platform/",
];

for (const route of footerLogoRoutes) {
  test(`footer logo renders on ${route}`, async ({ page }) => {
    await page.goto(route);
    const footerLogo = page.locator(".footer-brand img");
    await expect(footerLogo).toBeVisible();
    await expect(footerLogo).toHaveAttribute("src", /logo\.png/);
    await expect(footerLogo).toHaveAttribute("width", "1536");
    await expect(footerLogo).toHaveAttribute("height", "1024");
  });
}

const footerSolutionLinks = [
  { name: "Mortgage", route: "/solutions/mortgage" },
  { name: "Banking", route: "/solutions/banking" },
  { name: "Insurance", route: "/solutions/insurance" },
];

for (const { name, route } of footerSolutionLinks) {
  test(`footer Solutions link navigates to ${name}`, async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    await footer.getByRole("link", { name, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`${route}/?$`));
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
}

test("mobile navigation exposes every section", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === "desktop", "Desktop uses inline navigation");
  await page.getByRole("button", { name: "Open navigation" }).click();
  const dialog = page.getByRole("dialog", { name: "Site navigation" });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("link", { name: "How It Works" })).toBeVisible();
  await dialog.getByRole("link", { name: "How It Works" }).click();
  await expect(page).toHaveURL(/#how-it-works$/);
});

test("form explains and opens an email draft flow", async ({ page }) => {
  const form = page.getByRole("form", { name: "Book a demo" });
  await form.getByLabel("Name").fill("Asha Rao");
  await form.getByLabel("Work email").fill("asha@example.com");
  await form.getByLabel("Company (optional)").fill("Northstar Labs");
  await form.getByLabel("Team size").selectOption("11-50");
  await form.getByLabel("Industry").selectOption("mortgage");
  await form
    .getByLabel("Tell us about your needs")
    .fill("Automate document intake and validation for mortgage processing.");
  await expect(
    form.getByText("Opens a prefilled email in your email app for you to review and send."),
  ).toBeVisible();
  await expect(form.getByRole("button", { name: "Book a Demo" })).toBeEnabled();
});

test("reduced motion keeps the local static hero and removes continuous animation", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  await expect(page.locator(".hero-image")).toBeVisible();
  await expect(page.locator("video")).toHaveCount(0);
  await expect(page.locator(".page-progress")).toHaveCount(0);
});

test("motion-capable visitors receive responsive local hero artwork", async ({ page }) => {
  await expect(page.locator('.hero-visual source[type="image/avif"]').first()).toHaveAttribute(
    "srcset",
    /gettao-hero-office-v3-desktop\.avif/,
  );
  await expect(page.locator(".hero-image")).toHaveAttribute(
    "src",
    /gettao-hero-office-v3-desktop\.webp$/,
  );
  await expect(page.locator("video")).toHaveCount(0);
});

test("stacked hero copy stays clear of the artwork on mobile", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === "desktop", "Desktop uses the split layout");

  const copyBox = await page.locator(".hero-copy").boundingBox();
  const visualBox = await page.locator(".hero-visual").boundingBox();
  expect(copyBox).not.toBeNull();
  expect(visualBox).not.toBeNull();
  if (!copyBox || !visualBox) return;

  expect(copyBox.y + copyBox.height).toBeLessThanOrEqual(visualBox.y + 10);
});

test("has no automatically detectable accessibility violations", async ({ page }) => {
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test("matches the approved light composition", async ({ page }) => {
  test.skip(Boolean(process.env.CI), "Local visual baselines are platform-specific");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  await expect(page.locator(".hero-image")).toBeVisible();
  await page.locator("nextjs-portal").evaluateAll((portals) => {
    portals.forEach((portal) => portal.remove());
  });
  await expect(page).toHaveScreenshot("homepage-gettao-light.png", {
    fullPage: true,
    animations: "disabled",
  });
});
