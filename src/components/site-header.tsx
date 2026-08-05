"use client";

import { Menu } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
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
import { navigation } from "@/content/site";
import { internalHref } from "@/lib/base-path";

const SECTION_IDS = navigation
  .filter((item) => item.href.startsWith("#"))
  .map((item) => item.href.slice(1));

export function SiteHeader() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;
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

  const headerInitial = reduce ? false : { opacity: 0, y: "-110%" };
  const headerAnimate = reduce ? undefined : { opacity: 1, y: 0 };

  return (
    <motion.header
      className="site-header"
      initial={headerInitial}
      animate={headerAnimate}
      transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
    >
      <div className="site-shell header-shell flex h-[4.5rem] items-center justify-between gap-4 rounded-full px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          aria-label="Gettao Home"
          onClick={() => {
            if (window.location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <Logo priority />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navigation.map((item) => {
            if (item.children === "industries") {
              return <IndustriesNavItem key={item.href} />;
            }
            const itemSection = item.href.startsWith("#") ? item.href.slice(1) : null;
            const isActive = itemSection !== null && activeId === itemSection;
            return (
              <a
                key={item.href}
                className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                href={internalHref(item.href)}
              >
                {item.label}
                {isActive && !reduce && (
                  <motion.span
                    layoutId="nav-underline"
                    className="nav-underline"
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="lg"
            className="hidden h-11 rounded-full px-5 sm:inline-flex"
          >
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
                <Link
                  href="/"
                  onClick={() => setMobileNavOpen(false)}
                  className="block"
                >
                  <Logo />
                </Link>
                <SheetDescription>
                  Enterprise AI for Financial Services
                </SheetDescription>
              </SheetHeader>
              <nav
                className="flex flex-col px-4 py-6"
                aria-label="Mobile primary"
              >
                {navigation.map((item) => {
                  if (item.children === "industries") {
                    return (
                      <div key={item.href} className="mobile-nav-group">
                        <IndustriesNavItem />
                      </div>
                    );
                  }
                  return (
                    <a
                      key={item.href}
                      className="rounded-lg px-3 py-4 text-2xl font-semibold tracking-[-0.025em] hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                      href={internalHref(item.href)}
                      onClick={(event) => {
                        if (!item.href.startsWith("#")) return;
                        event.preventDefault();
                        setMobileNavOpen(false);
                        const targetId = item.href.slice(1);
                        window.history.pushState(null, "", item.href);
                        window.setTimeout(() => {
                          document.getElementById(targetId)?.scrollIntoView({
                            block: "start",
                            behavior: "smooth",
                          });
                        }, 0);
                      }}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>
              <div className="mt-auto p-4">
                <Button asChild size="lg" className="h-12 w-full">
                  <a href="#contact">Book a Demo</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
