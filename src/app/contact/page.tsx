import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { PageHero, SectionHeading } from "@/components/ui";
import { dict, mailHref, telHref, whatsappHref } from "@/lib/data";

const c = dict.contactPage;

export const metadata: Metadata = {
  title: c.h1,
  description: c.subtitle,
  alternates: { canonical: "/contact" },
};

// The map location isn't part of data.json — it's the Haraj Madina pin from the original site.
const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1814.591761177005!2d39.59704801684467!3d24.548319383641527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbd0058b7b80b%3A0x93f263edd77b2726!2zSGFyYWogTWFkaW5hINit2LHYp9is!5e0!3m2!1sen!2sbd!4v1788887177389!5m2!1sen!2sbd";

export default function ContactPage() {
  const info = [
    { icon: MapPinIcon, label: c.contactInfo.address, value: dict.business.serviceArea },
    { icon: PhoneIcon, label: c.contactInfo.phone, value: dict.business.phoneDisplay, href: telHref, ltr: true },
    { icon: WhatsAppIcon, label: dict.common.whatsapp, value: dict.business.phoneDisplay, href: whatsappHref, ltr: true },
    { icon: MailIcon, label: c.contactInfo.email, value: c.contactInfo.emailAddress, href: mailHref, ltr: true },
  ];

  return (
    <>
      <PageHero title={c.h1} subtitle={c.subtitle} />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl bg-mist/60 p-6 sm:p-10">
            <SectionHeading title={c.formSectionH2} text={c.formSectionText} />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="rounded-3xl bg-navy p-6 text-white sm:p-10">
            <h2 className="text-2xl font-bold">{c.contactInfo.title}</h2>
            <ul className="mt-8 space-y-6">
              {info.map(({ icon: Icon, label, value, href, ltr }) => {
                const content = (
                  <>
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white/10 text-gold">
                      <Icon className="size-6" />
                    </span>
                    <span>
                      <span className="block text-sm text-white/60">{label}</span>
                      <span className="block font-semibold break-all" dir={ltr ? "ltr" : undefined}>
                        {value}
                      </span>
                    </span>
                  </>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="flex items-center gap-4 transition-colors hover:text-gold"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-mist/60 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow={c.mapEyebrow} title={c.mapH2} center />
          <div className="mt-10 overflow-hidden rounded-3xl shadow-xl">
            <iframe
              src={MAP_EMBED}
              title={c.mapH2}
              className="h-112 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
