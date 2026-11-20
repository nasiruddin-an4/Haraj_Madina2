import { dict, ui } from "@/lib/data";
import { CloseIcon } from "../icons";
import { SectionHeading, WhatsAppButton } from "../ui";

export function CtaBand() {
  const s = dict.home.ctaBand;
  return (
    <section className="relative isolate overflow-hidden bg-brand px-4 py-16 text-center lg:py-20">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_120%,rgba(255,190,0,0.35),transparent_55%)]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl leading-snug font-bold text-white sm:text-4xl">{s.h2}</h2>
        <p className="mt-4 text-lg text-white/85">{s.text}</p>
        <WhatsAppButton label={s.cta} className="mt-8 text-lg" />
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading title={ui.faq} center />
        <div className="mt-10 space-y-4">
          {dict.faq.map((item) => (
            <details key={item.q} className="group rounded-2xl bg-mist/60 p-6 open:bg-mist">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-navy [&::-webkit-details-marker]:hidden">
                {item.q}
                <CloseIcon className="size-5 shrink-0 rotate-45 text-brand transition-transform group-open:rotate-0" />
              </summary>
              <p className="mt-4 leading-loose text-navy/75">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
