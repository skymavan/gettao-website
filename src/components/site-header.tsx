"use client";

import { Menu } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { IndustriesNavItem } from "@/components/industries-dropdown";
import { Logo } from "@/components/logo";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigation, siteConfig } from "@/content/site";
import { internalHref } from "@/lib/base-path";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

/** Section ids the nav links point at on the home page (e.g. "/#faq" -> "faq"). */
const SECTION_IDS = navigation
  .map((item) => sectionIdOf(item.href))
  .filter((id): id is string => id !== null);

function sectionIdOf(href: string): string | null {
  const hashIndex = href.indexOf("#");
  return hashIndex === -1 ? null : href.slice(hashIndex + 1);
}

function normalizePath(path: string): string {
  return path.endsWith("/") ? path : `${path}/`;
}

function pathOf(href: string): string {
  const hashIndex = href.indexOf("#");
  return normalizePath(hashIndex === -1 ? href : href.slice(0, hashIndex) || "/");
}

/** True when a resolved href targets the page the visitor is already on. */
function isCurrentPage(resolvedHref: string): boolean {
  return pathOf(resolvedHref) === normalizePath(window.location.pathname);
}

function scrollBehavior(): ScrollBehavior {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

export function SiteHeader() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const animateUnderline = !usePrefersReducedMotion();

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const homeHref = internalHref("/");

  return (
    <header className="site-header">
      <div className="site-shell header-shell flex h-[4.5rem] items-center justify-between gap-4 rounded-full px-4 sm:px-6">
        <a
          href={homeHref}
          className="flex items-center gap-2 rounded-lg"
          aria-label="Gettao Home"
          onClick={(event) => {
            if (isCurrentPage(homeHref)) {
              event.preventDefault();
              window.history.replaceState(null, "", homeHref);
              window.scrollTo({ top: 0, behavior: scrollBehavior() });
            }
          }}
        >
          <Logo priority />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navigation.map((item) => {
            if (item.children === "industries") {
              return <IndustriesNavItem key={item.href} />;
            }
            const itemSection = sectionIdOf(item.href);
            const isActive = itemSection !== null && activeId === itemSection;
            return (
              <a
                key={item.href}
                className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                href={internalHref(item.href)}
                aria-current={isActive ? "location" : undefined}
              >
                {item.label}
                {isActive &&
                  (animateUnderline ? (
                    <motion.span
                      layoutId="nav-underline"
                      className="nav-underline"
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    />
                  ) : (
                    <span className="nav-underline" />
                  ))}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="accent" size="lg" className="hidden h-11 px-5 sm:inline-flex">
            <a href="#contact">Book a Demo</a>
          </Button>

          <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="size-11 rounded-full lg:hidden"
                aria-label="Open navigation"
              >
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent
              aria-label="Site navigation"
              className="w-[min(24rem,88vw)] border-border bg-background p-0"
            >
              <SheetHeader className="border-b border-border p-6 text-left">
                <SheetTitle className="sr-only">Site navigation</SheetTitle>
                <a href={homeHref} onClick={() => setMobileNavOpen(false)} className="block">
                  <Logo />
                </a>
                <SheetDescription>{siteConfig.tagline}</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col px-4 py-6" aria-label="Mobile primary">
                {navigation.map((item) => {
                  if (item.children === "industries") {
                    return (
                      <div key={item.href} className="mobile-nav-group">
                        <IndustriesNavItem />
                      </div>
                    );
                  }
                  const href = internalHref(item.href);
                  const targetId = sectionIdOf(item.href);
                  return (
                    <a
                      key={item.href}
                      className="rounded-lg px-3 py-4 text-2xl font-semibold tracking-[-0.025em] hover:bg-muted"
                      href={href}
                      onClick={(event) => {
                        setMobileNavOpen(false);
                        // Only take over same-page section jumps; the sheet's scroll lock
                        // would otherwise swallow the browser's native anchor scroll.
                        if (!targetId || !isCurrentPage(href)) return;
                        const target = document.getElementById(targetId);
                        if (!target) return;
                        event.preventDefault();
                        window.history.pushState(null, "", href);
                        window.setTimeout(() => {
                          target.scrollIntoView({ block: "start", behavior: scrollBehavior() });
                        }, 0);
                      }}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>
              <div className="mt-auto p-4">
                <Button asChild variant="accent" size="lg" className="h-12 w-full">
                  <a href="#contact" onClick={() => setMobileNavOpen(false)}>
                    Book a Demo
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
