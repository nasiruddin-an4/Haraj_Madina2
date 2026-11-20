import type { ReactNode } from "react";

import { dict, paragraphs } from "@/lib/data";
import { Rich } from "../ui";

function ArticleSection({
  title,
  children,
  className = "bg-white",
  textDelay,
}: {
  title: string;
  children: ReactNode;
  className?: string;
  textDelay?: "600";
}) {
  return (
    <section className={`px-4 py-16 lg:py-20 ${className}`}>
      <div className="mx-auto max-w-4xl">
        <h2
          data-animate="zoom-in"
          data-delay="400"
          className="text-3xl leading-tight font-bold text-navy lg:text-[45px] lg:leading-tight"
        >
          <Rich text={title} />
        </h2>
        <div data-animate="zoom-in" data-delay={textDelay} className="article mt-8">
          {children}
        </div>
      </div>
    </section>
  );
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  );
}

/** First article block — content from home.highestPriceSection */
export function HighestPriceArticle() {
  const s = dict.home.highestPriceSection;
  return (
    <ArticleSection title={s.h2} textDelay="600">
      <h3 className="mt-0">{s.h3}</h3>
      {s.paragraphs.map((p) => (
        <p key={p}>{p}</p>
      ))}
      <h2>{s.whyTitle}</h2>
      {s.features.map((f) => (
        <div key={f.title}>
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </ArticleSection>
  );
}

/** Second article block — content from home.whatWeBuySection + home.infoColumns */
export function WhatWeBuyArticle() {
  const s = dict.home.whatWeBuySection;
  return (
    <ArticleSection className="bg-mist" title={s.h2}>
      <p>{s.text}</p>
      <NumberedList items={s.items} />

      {dict.home.infoColumns.sections.map((col) => (
        <div key={col.title}>
          <h2>
            <Rich text={col.title} />
          </h2>
          {paragraphs(col.text).map((p) => (
            <p key={p}>
              <Rich text={p} />
            </p>
          ))}
          {"list" in col && col.list && (
            <>
              <h3>{col.listTitle}</h3>
              <NumberedList items={col.list} />
            </>
          )}
        </div>
      ))}
    </ArticleSection>
  );
}

/** Closing article block — content from seoArticles */
export function SeoArticle() {
  const [first, ...rest] = dict.seoArticles;
  if (!first) return null;
  return (
    <ArticleSection title={first.h3}>
      {first.paragraphs.map((p) => (
        <p key={p}>
          <Rich text={p} />
        </p>
      ))}
      {rest.map((a) => (
        <div key={a.h3}>
          <h2>
            <Rich text={a.h3} />
          </h2>
          {a.paragraphs.map((p) => (
            <p key={p}>
              <Rich text={p} />
            </p>
          ))}
        </div>
      ))}
    </ArticleSection>
  );
}
