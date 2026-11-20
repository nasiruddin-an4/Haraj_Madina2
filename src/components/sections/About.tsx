import { dict } from "@/lib/data";
import { Rich } from "../ui";

/** Old "من نحن" layout — content from home.aboutStore */
export function About() {
  const s = dict.home.aboutStore;
  return (
    <section id="about" className="bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <h2 data-animate="zoom-in" data-delay="400" className="text-4xl font-bold text-navy lg:text-[50px] lg:leading-tight">
          {s.eyebrow}
        </h2>
        <div data-animate="fade-in-left" className="article">
          <p>
            <strong>
              <Rich text={s.h2} />
            </strong>
          </p>
          <p className="mb-0">
            <Rich text={s.text} />
          </p>
        </div>
      </div>
    </section>
  );
}
