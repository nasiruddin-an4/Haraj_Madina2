import Image from "next/image";
import Link from "next/link";

import logo from "../../public/images/logo.webp";
import { dict, navItems, telHref, ui } from "@/lib/data";
import { PhoneIcon } from "./icons";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-mist/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4">
        <Link href="/" className="shrink-0" aria-label={dict.business.name}>
          <Image
            src={logo}
            alt={dict.business.name}
            width={64}
            height={64}
            sizes="64px"
            preload
            className="size-16 rounded-full"
          />
        </Link>

        <nav aria-label={ui.mainNav} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-4 py-2 text-lg font-bold text-navy transition-colors hover:bg-gold hover:text-navy"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telHref}
            className="inline-flex items-center gap-2 rounded-md bg-navy px-4 py-2.5 font-semibold text-white shadow transition-colors hover:bg-gold hover:text-navy"
          >
            <PhoneIcon className="size-4" />
            <span>{dict.nav.contact}</span>
          </a>
          <MobileNav items={navItems} />
        </div>
      </div>
    </header>
  );
}
