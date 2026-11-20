"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { ui } from "@/lib/data";
import { CloseIcon, MenuIcon } from "./icons";

type NavItem = { label: string; href: string };

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? ui.closeMenu : ui.openMenu}
        className="grid size-11 place-items-center rounded-md bg-navy text-white transition-colors hover:bg-gold hover:text-navy"
      >
        {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
      </button>

      <nav
        id="mobile-nav"
        aria-label={ui.mainNav}
        hidden={!open}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-navy/10 bg-mist shadow-lg"
      >
        <ul className="mx-auto flex max-w-7xl flex-col px-4 py-2">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-3 text-lg font-bold text-navy hover:bg-gold"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
