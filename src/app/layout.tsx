import type { Metadata, Viewport } from "next";
import { Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { ScrollAnimations, enableAnimationsScript } from "@/components/ScrollAnimations";
import { SITE_URL, dict, ui } from "@/lib/data";

const kufi = Noto_Kufi_Arabic({
  variable: "--font-kufi",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: dict.business.name,
    template: `%s | ${dict.business.name}`,
  },
  description: dict.home.hero.subtitle,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    siteName: dict.business.name,
    title: dict.business.name,
    description: dict.home.hero.subtitle,
  },
};

export const viewport: Viewport = {
  themeColor: "#060047",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: dict.business.name,
  url: SITE_URL,
  image: `${SITE_URL}/images/logo.webp`,
  telephone: dict.business.phone,
  email: dict.contactPage.contactInfo.emailAddress,
  description: dict.home.hero.subtitle,
  areaServed: { "@type": "City", name: dict.business.serviceArea },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: browser extensions (e.g. QuillBot's data-qb-installed)
    // inject attributes on <html>/<body> before React hydrates. Only affects these two tags.
    <html lang="ar" dir="rtl" className={kufi.variable} suppressHydrationWarning>
      <body className="flex min-h-dvh flex-col font-sans" suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: enableAnimationsScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:right-2 focus:z-50 focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:text-navy"
        >
          {ui.skip}
        </a>
        <Header />
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingContact />
        <ScrollAnimations />
      </body>
    </html>
  );
}
