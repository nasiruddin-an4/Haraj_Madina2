import Image from "next/image";

import heroBg from "../../../public/images/hero.webp";
import { dict, telHref, whatsappHref } from "@/lib/data";
import { PhoneIcon, WhatsAppIcon } from "../icons";

export function Hero() {
  const { hero } = dict.home;

  return (
    <section className="relative isolate flex min-h-125 items-center overflow-hidden bg-navy">
      <Image
        src={heroBg}
        alt=""
        fill
        preload
        sizes="100vw"
        placeholder="blur"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-navy/80" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-4 py-20">
        <div className="max-w-4xl">
          <h1
            data-animate="zoom-in"
            data-delay="200"
            className="text-2xl leading-snug font-bold text-white sm:text-4xl lg:text-[51px] lg:leading-20"
          >
            {hero.h1}
          </h1>
          <p
            data-animate="slide-in-up"
            data-delay="400"
            className="mt-6 text-sm leading-loose text-white/90 sm:text-lg lg:text-2xl lg:leading-[1.8]"
          >
            {hero.subtitle}
          </p>

          <div data-animate="zoom-in" className="mt-10 flex flex-wrap gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-whatsapp px-6 py-3.5 text-lg font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:brightness-110"
            >
              <WhatsAppIcon className="size-5" />
              {dict.common.whatsapp}
            </a>
            <a
              href={telHref}
              className="inline-flex items-center gap-2 rounded-md bg-linear-to-b from-brand to-brand-alt px-6 py-3.5 text-lg font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:brightness-110"
            >
              <PhoneIcon className="size-5" />
              <span dir="ltr">{dict.business.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
