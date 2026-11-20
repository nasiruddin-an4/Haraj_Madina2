import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { PurchaseCard } from "@/components/cards";
import { CalendarIcon, MapPinIcon, TagIcon } from "@/components/icons";
import { CtaBand } from "@/components/sections/Shared";
import { CallButton, PageHero, SectionHeading, WhatsAppButton, imgSrc } from "@/components/ui";
import { dict, getPurchase, ogImage } from "@/lib/data";

export function generateStaticParams() {
  return dict.recentPurchases.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/purchases/[slug]">): Promise<Metadata> {
  const purchase = getPurchase((await params).slug);
  if (!purchase) return {};
  return {
    title: purchase.title,
    description: purchase.description,
    alternates: { canonical: `/purchases/${purchase.slug}` },
    openGraph: { title: purchase.title, description: purchase.description, images: [ogImage] },
  };
}

export default async function PurchasePage({ params }: PageProps<"/purchases/[slug]">) {
  const purchase = getPurchase((await params).slug);
  if (!purchase) notFound();

  const others = dict.recentPurchases.filter((p) => p.slug !== purchase.slug);
  const meta = [
    { icon: MapPinIcon, value: purchase.location },
    { icon: TagIcon, value: purchase.productType },
    { icon: CalendarIcon, value: purchase.date },
  ];

  return (
    <>
      <PageHero eyebrow={dict.home.recentPurchasesSection.h2} title={purchase.title} />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 lg:grid-cols-2">
          <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={imgSrc(purchase.image)}
              alt={purchase.title}
              fill
              preload
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <ul className="flex flex-wrap gap-3">
              {meta.map(({ icon: Icon, value }) => (
                <li key={value} className="inline-flex items-center gap-2 rounded-full bg-mist px-4 py-2 font-semibold text-navy">
                  <Icon className="size-5 text-brand" />
                  {value}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-lg leading-loose text-navy/80">{purchase.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CallButton />
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="bg-mist/60 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <SectionHeading
              eyebrow={dict.home.recentPurchasesSection.eyebrow}
              title={dict.home.recentPurchasesSection.h2}
              center
            />
            <ul className="mt-12 grid gap-6 sm:grid-cols-2">
              {others.map((p) => (
                <li key={p.slug}>
                  <PurchaseCard purchase={p} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
