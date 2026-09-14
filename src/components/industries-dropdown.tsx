"use client";

import { ChevronDown, Building, Landmark, Shield } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { useCallback, useEffect, useId, useRef, useState } from "react";

import { industryNavItems } from "@/content/site";
import { internalHref } from "@/lib/base-path";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

const ICONS: Record<string, typeof Landmark> = {
  landmark: Landmark,
  building: Building,
  shield: Shield,
};

const dropdownPanel: Variants = {
  hidden: { opacity: 0, y: -6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] } },
};

export function IndustriesNavItem() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const animate = !usePrefersReducedMotion();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  // A mouse click right after hover-open should keep the panel open, not toggle it shut.
  const hoverOpenedRef = useRef(false);
  const panelId = useId();
  const mobilePanelId = useId();

  useEffect(
    () => () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    },
    [],
  );

  const clearTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    clearTimer();
    setOpen((wasOpen) => {
      if (!wasOpen) hoverOpenedRef.current = true;
      return true;
    });
  }, [clearTimer]);

  const handleMouseLeave = useCallback(() => {
    clearTimer();
    timeoutRef.current = setTimeout(() => {
      hoverOpenedRef.current = false;
      setOpen(false);
    }, 150);
  }, [clearTimer]);

  return (
    <>
      {/* Desktop */}
      <div
        className="relative hidden lg:block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setOpen(false);
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape" && open) {
            event.stopPropagation();
            setOpen(false);
            triggerRef.current?.focus();
          }
        }}
      >
        <button
          ref={triggerRef}
          type="button"
          className="nav-link group flex items-center gap-1"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => {
            if (hoverOpenedRef.current) {
              hoverOpenedRef.current = false;
              setOpen(true);
              return;
            }
            setOpen((value) => !value);
          }}
        >
          Industries
          <ChevronDown
            aria-hidden="true"
            className={`size-3.5 text-muted-foreground transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
        {open && (
          <motion.div
            id={panelId}
            className="absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3"
            variants={dropdownPanel}
            initial={animate ? "hidden" : false}
            animate="visible"
          >
            <ul className="rounded-xl border border-border bg-background p-2 shadow-xl shadow-black/5">
              {industryNavItems.map((item) => {
                const Icon = ICONS[item.icon] ?? Landmark;
                return (
                  <li key={item.id}>
                    <a
                      href={internalHref(item.href)}
                      className="dropdown-link group flex items-center gap-3 rounded-lg px-4 py-3 transition-colors hover:bg-muted"
                      onClick={() => setOpen(false)}
                    >
                      <span
                        aria-hidden="true"
                        className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/50 text-muted-foreground transition-colors group-hover:text-primary"
                      >
                        <Icon className="size-4" />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-sm font-semibold text-foreground">
                          {item.label}
                        </span>
                        <span className="text-xs leading-snug text-muted-foreground">
                          {item.description}
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-lg px-3 py-4 text-2xl font-semibold tracking-[-0.025em] hover:bg-muted"
          aria-expanded={mobileOpen}
          aria-controls={mobilePanelId}
          onClick={() => setMobileOpen((value) => !value)}
        >
          Industries
          <ChevronDown
            aria-hidden="true"
            className={`size-5 text-muted-foreground transition-transform duration-200 ${
              mobileOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          id={mobilePanelId}
          className="mobile-submenu"
          data-open={mobileOpen ? "true" : "false"}
          inert={!mobileOpen}
        >
          <ul className="mobile-submenu-inner space-y-1 px-3 pb-3 pt-1">
            {industryNavItems.map((item) => {
              const Icon = ICONS[item.icon] ?? Landmark;
              return (
                <li key={item.id}>
                  <a
                    href={internalHref(item.href)}
                    className="flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium hover:bg-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/50 text-muted-foreground"
                    >
                      <Icon className="size-4" />
                    </span>
                    <span className="text-sm font-semibold">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
