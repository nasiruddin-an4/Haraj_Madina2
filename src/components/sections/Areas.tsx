import Link from "next/link";

import { dict } from "@/lib/data";
import { MapPinIcon } from "../icons";

/** Old "مناطق" tile layout — content from home.recentPurchasesSection + recentPurchases */
export function Areas() {
  const s = dict.home.recentPurchasesSection;
  return (
    <section className="bg-navy px-4 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h2 data-animate="zoom-in" className="text-3xl font-semibold text-mist lg:text-[50px] lg:leading-tight">
            {s.h2}
          </h2>
          <p data-animate="zoom-in" className="mt-4 leading-loose text-mist/90">
            {s.subtitle}
          </p>
        </div>

        <ul data-animate="zoom-in" className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-3 lg:gap-4">
          {dict.recentPurchases.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/purchases/${p.slug}`}
                className="group flex min-h-17 flex-col items-center justify-center gap-1 rounded-[10px] bg-mist px-3 py-3 text-center transition-colors hover:bg-brand"
              >
                <span className="font-semibold text-black transition-colors group-hover:text-white lg:text-xl">
                  {p.title}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-navy/70 transition-colors group-hover:text-white/90">
                  <MapPinIcon className="size-4 shrink-0 text-brand transition-colors group-hover:text-white" />
                  {p.location}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
