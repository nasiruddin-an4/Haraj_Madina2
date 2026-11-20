import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { HighestPriceArticle, SeoArticle, WhatWeBuyArticle } from "@/components/sections/Articles";
import { Areas } from "@/components/sections/Areas";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <HighestPriceArticle />
      <WhatWeBuyArticle />
      <Areas />
      <SeoArticle />
    </>
  );
}
