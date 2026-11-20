import { dict } from "@/lib/data";
import { CashIcon, ShieldIcon, TagIcon, TruckIcon } from "../icons";

const icons = [ShieldIcon, TruckIcon, CashIcon, TagIcon];

/** Old "لماذا نحن" layout — content from whyUs */
export function WhyUs() {
  const s = dict.whyUs;
  return (
    <section
      className="relative isolate bg-navy bg-cover bg-center px-4 py-16 lg:bg-fixed lg:py-24"
      style={{ backgroundImage: "url(/images/why-us.jpg)" }}
    >
      <div className="absolute inset-0 -z-10 bg-navy/80" aria-hidden="true" />

      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h2 data-animate="zoom-in" data-delay="400" className="text-4xl font-bold text-white lg:text-[50px] lg:leading-tight">
            {s.title}
          </h2>
          <p data-animate="zoom-in" className="mt-4 leading-loose text-white/90">
            {s.text}
          </p>
        </div>

        <ul data-animate="zoom-in" className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {s.steps.map((step, i) => {
            const Icon = icons[i % icons.length];
            return (
              <li
                key={step.title}
                className="rounded-2xl border border-brand-alt p-6 text-white backdrop-blur-sm transition hover:-translate-y-1 hover:border-gold"
                style={{ backgroundColor: `rgb(6 0 71 / ${0.54 + i * 0.04})` }}
              >
                <span className="grid size-14 place-items-center rounded-full bg-brand-alt/30 text-gold">
                  <Icon className="size-7" />
                </span>
                <h3 className="mt-5 text-xl font-semibold lg:text-[23px]">{step.title}</h3>
                <p className="mt-3 text-sm leading-loose text-white/85">{step.desc}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
