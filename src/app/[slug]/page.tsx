import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { ServiceCard } from "@/components/cards";
import { CheckIcon } from "@/components/icons";
import { CtaBand, Faq } from "@/components/sections/Shared";
import { CallButton, PageHero, SectionHeading, WhatsAppButton, imgSrc } from "@/components/ui";
import { dict, getService, services } from "@/lib/data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.body,
    alternates: { canonical: `/${service.slug}` },
    openGraph: { title: service.title, description: service.body, images: [imgSrc(service.imageUrl)] },
  };
}

export default async function ServicePage({ params }: PageProps<"/[slug]">) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero eyebrow={service.summaryTitle} title={service.title} subtitle={service.subtitle} />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 lg:grid-cols-2">
          <div>
            <SectionHeading title={dict.common.aboutService} />
            <p className="mt-5 text-lg leading-loose text-navy/80">{service.body}</p>
            <ul className="mt-8 space-y-3">
              {dict.sharedServiceBullets.map((b) => (
                <li key={b} className="flex gap-3 text-navy/80">
                  <CheckIcon className="mt-0.5 size-6 shrink-0 text-whatsapp" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <CallButton />
              <WhatsAppButton />
            </div>
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={imgSrc(service.imageUrl)}
              alt={service.summaryTitle}
              fill
              preload
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-mist/60 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title={dict.common.whatWeBuy} center />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.items.map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-xl bg-white p-5 font-semibold text-navy shadow-sm">
                <CheckIcon className="size-6 shrink-0 text-brand" />
                {item}
              </li>
            ))}
          </ul>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {service.gallery.map((src) => (
              <li key={src} className="relative aspect-3/2 overflow-hidden rounded-2xl shadow-md">
                <Image src={src} alt={service.summaryTitle} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {"seoContent" in service && service.seoContent && (
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-4xl space-y-5 px-4 text-lg leading-loose text-navy/80">
            {service.seoContent.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>
      )}

      <section className="bg-mist/60 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title={dict.common.otherServices} center />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <li key={s.slug}>
                <ServiceCard service={s} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
      <Faq />
    </>
  );
}
