import Image from "next/image";
import Link from "next/link";

import { dict, services } from "@/lib/data";
import { imgSrc } from "../ui";

/** Old "ما نشتريه" layout — content from home.servicesSection + services */
export function Services() {
  const s = dict.home.servicesSection;
  return (
    <section id="services" className="bg-navy px-4 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 data-animate="zoom-in" data-delay="400" className="text-3xl font-bold text-white lg:text-[40px] lg:leading-tight">
            {s.h2}
          </h2>
          <p data-animate="slide-in-up" data-delay="600" className="mt-4 leading-loose text-white/90">
            {s.subtitle}
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.slug} data-animate="slide-in-up" data-delay="800">
              <Link
                href={`/${service.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl bg-white p-3 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative aspect-3/2 overflow-hidden rounded-md">
                  <Image
                    src={imgSrc(service.imageUrl)}
                    alt={service.summaryTitle}
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col px-2 pt-5 pb-3 text-center">
                  <h3 className="text-xl font-semibold text-navy lg:text-[23px]">{service.summaryTitle}</h3>
                  <p className="mt-3 text-sm leading-loose font-light text-navy/80 lg:text-base">{service.body}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
