import Image from "next/image";
import Link from "next/link";

import { dict, type Purchase, type Service } from "@/lib/data";
import { ArrowIcon, CalendarIcon, MapPinIcon, serviceIcons, TagIcon } from "./icons";
import { imgSrc } from "./ui";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = serviceIcons[service.slug];
  return (
    <Link
      href={`/${service.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-navy/5 transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-3/2 overflow-hidden">
        <Image
          src={imgSrc(service.imageUrl)}
          alt={service.summaryTitle}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {Icon && (
          <span className="absolute inset-s-4 bottom-4 grid size-12 place-items-center rounded-xl bg-gold text-navy shadow-lg">
            <Icon className="size-6" />
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-navy">{service.summaryTitle}</h3>
        <p className="mt-2 flex-1 leading-relaxed text-navy/70">{service.summaryDesc}</p>
        <span className="mt-5 inline-flex items-center gap-2 font-bold text-brand">
          {dict.common.details}
          <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function PurchaseCard({ purchase }: { purchase: Purchase }) {
  return (
    <Link
      href={`/purchases/${purchase.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-navy/5 transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={imgSrc(purchase.image)}
          alt={purchase.title}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute inset-s-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-navy/85 px-3 py-1 text-sm font-semibold text-white">
          <TagIcon className="size-4" />
          {purchase.productType}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-navy/60">
          <span className="inline-flex items-center gap-1.5">
            <MapPinIcon className="size-4" />
            {purchase.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarIcon className="size-4" />
            {purchase.date}
          </span>
        </div>
        <h3 className="mt-3 text-xl font-bold text-navy">{purchase.title}</h3>
        <p className="mt-2 line-clamp-3 flex-1 leading-relaxed text-navy/70">{purchase.description}</p>
        <span className="mt-5 inline-flex items-center gap-2 font-bold text-brand">
          {dict.common.details}
          <ArrowIcon className="size-4" />
        </span>
      </div>
    </Link>
  );
}
