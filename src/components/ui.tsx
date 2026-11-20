import type { ReactNode } from "react";

import { dict, telHref, whatsappHref } from "@/lib/data";
import { PhoneIcon, WhatsAppIcon } from "./icons";

/** Local image paths in data.json can contain spaces — encode them for next/image. */
export const imgSrc = (src: string) => (src.startsWith("http") ? src : encodeURI(src));

const PHONE = /(\+?[0-9٠-٩][0-9٠-٩ ]{6,}[0-9٠-٩])/g;

/**
 * Renders data text, forcing phone numbers to display left-to-right. Without this, RTL
 * layout reverses the digit groups of "+٩٦٦ ٥٧ ٧٣٥ ٤٤٢٨" (shows as ٤٤٢٨ ٧٣٥ ٥٧ ٩٦٦+).
 * A plain <bdi dir="ltr"> isn't enough for Arabic-Indic digits — <bdo> is required.
 */
export function Rich({ text }: { text: string }) {
  return text.split(PHONE).map((part, i) =>
    i % 2 ? (
      <bdi key={i}>
        <bdo dir="ltr" className="whitespace-nowrap">
          {part}
        </bdo>
      </bdi>
    ) : (
      part
    ),
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  if (!children) return null;
  return (
    <span
      className={`inline-block rounded-full px-4 py-1.5 text-sm font-bold ${
        light ? "bg-gold/15 text-gold" : "bg-brand/10 text-brand"
      }`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  center = false,
  light = false,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  center?: boolean;
  light?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <Tag
        className={`mt-4 text-3xl leading-snug font-bold sm:text-4xl ${light ? "text-white" : "text-navy"}`}
      >
        <Rich text={title} />
      </Tag>
      {text && (
        <p className={`mt-4 text-lg leading-loose ${light ? "text-white/85" : "text-navy/75"}`}>
          <Rich text={text} />
        </p>
      )}
    </div>
  );
}

const btn =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-bold shadow-lg transition hover:-translate-y-0.5 hover:brightness-110";

export function CallButton({ label = dict.home.hero.primaryCta, className = "" }: { label?: string; className?: string }) {
  return (
    <a href={telHref} className={`${btn} bg-gold text-navy ${className}`}>
      <PhoneIcon className="size-5" />
      {label}
    </a>
  );
}

export function WhatsAppButton({
  label = dict.common.whatsapp,
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`${btn} bg-whatsapp text-white ${className}`}
    >
      <WhatsAppIcon className="size-5" />
      {label}
    </a>
  );
}

/** Title band at the top of inner pages. */
export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy px-4 py-16 lg:py-20">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_0%,rgba(24,108,218,0.45),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} text={subtitle} light />
      </div>
    </section>
  );
}
