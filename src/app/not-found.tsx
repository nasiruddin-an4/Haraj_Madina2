import Link from "next/link";

import { ui } from "@/lib/data";

export default function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center px-4 py-24 text-center">
      <div>
        <p className="text-7xl font-bold text-brand">٤٠٤</p>
        <h1 className="mt-4 text-3xl font-bold text-navy">{ui.notFound}</h1>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-lg bg-navy px-6 py-3 font-bold text-white transition-colors hover:bg-gold hover:text-navy"
        >
          {ui.backHome}
        </Link>
      </div>
    </section>
  );
}
