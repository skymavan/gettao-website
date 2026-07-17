"use client";

import { ChevronDown, Building, Landmark, Shield } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { useCallback, useRef, useState } from "react";

import { industryNavItems } from "@/content/site";

const ICONS: Record<string, typeof Landmark> = {
  landmark: Landmark,
  building: Building,
  shield: Shield,
};

const dropdownParent: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
};

const dropdownItemParent: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.02 },
  },
};

const dropdownItem: Variants = {
  hidden: { opacity: 0, y: -6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
};

function DropdownPanel({ onItemClick }: { onItemClick: () => void }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="absolute left-1/2 top-full z-50 mt-3 w-80 -translate-x-1/2"
      variants={reduce ? undefined : dropdownParent}
      initial="hidden"
      animate="visible"
    >
      <div className="rounded-xl border border-border bg-background p-2 shadow-xl shadow-black/5">
        <motion.div variants={reduce ? undefined : dropdownItemParent}>
          {industryNavItems.map((item) => {
            const Icon = ICONS[item.icon] ?? Landmark;
            return (
              <motion.a
                key={item.id}
                href={item.href}
                variants={reduce ? undefined : dropdownItem}
                className="group flex items-center gap-3 rounded-lg px-4 py-3 transition-colors hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                onClick={onItemClick}
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/50 text-muted-foreground transition-colors group-hover:border-accent/30 group-hover:bg-accent/10 group-hover:text-accent">
                  <Icon className="size-4" />
                </span>
                <span className="text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                  {item.label}
                </span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}

export function IndustriesNavItem() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduce = useReducedMotion();

  const clearTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    clearTimer();
    setOpen(true);
  }, [clearTimer]);

  const handleMouseLeave = useCallback(() => {
    clearTimer();
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  }, [clearTimer]);

  return (
    <>
      {/* Desktop */}
      <div
        className="relative hidden lg:block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          type="button"
          className="nav-link group flex items-center gap-1"
          aria-expanded={open}
          aria-haspopup="true"
          onFocus={() => setOpen(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) {
              setOpen(false);
            }
          }}
          onClick={() => setOpen(!open)}
        >
          Industries
          <ChevronDown
            className={`size-3.5 text-muted-foreground transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
        {open && (
          <div
            onMouseEnter={clearTimer}
            onMouseLeave={handleMouseLeave}
          >
            <DropdownPanel onItemClick={() => setOpen(false)} />
          </div>
        )}
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-lg px-3 py-4 text-2xl font-semibold tracking-[-0.025em] hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          Industries
          <ChevronDown
            className={`size-5 text-muted-foreground transition-transform duration-200 ${
              mobileOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        <motion.div
          className="overflow-hidden"
          initial={false}
          animate={mobileOpen ? "open" : "closed"}
          variants={
            reduce
              ? undefined
              : {
                  open: { height: "auto", opacity: 1 },
                  closed: { height: 0, opacity: 0 },
                }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="space-y-1 px-3 pb-3 pt-1">
            {industryNavItems.map((item) => {
              const Icon = ICONS[item.icon] ?? Landmark;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/50 text-muted-foreground">
                    <Icon className="size-4" />
                  </span>
                  <span className="text-sm font-semibold">{item.label}</span>
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </>
  );
}
