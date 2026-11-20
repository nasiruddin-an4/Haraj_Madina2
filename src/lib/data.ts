import data from "@/content/data.json";

/** All site content comes from the Arabic section of data.json. */
export const dict = data.ar;

export type Dict = typeof dict;
export type Service = Dict["services"][keyof Dict["services"]];
export type Purchase = Dict["recentPurchases"][number];

export const services: Service[] = Object.values(dict.services);

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const getPurchase = (slug: string) => dict.recentPurchases.find((p) => p.slug === slug);

/** The site's public domain — not part of data.json. */
export const SITE_URL = "https://usedfurniture.com";

export const telHref = `tel:${dict.business.phone}`;
export const whatsappHref = dict.business.whatsappLink;
export const mailHref = `mailto:${dict.contactPage.contactInfo.emailAddress}`;

/** Splits strings that contain `<br/>` (e.g. common.guaranteedBuying) into lines. */
export const splitBr = (text: string) => text.split(/<br\s*\/?>/i).map((s) => s.trim());

/** Splits multi-paragraph strings on blank lines. */
export const paragraphs = (text: string) => text.split(/\n{2,}/).filter(Boolean);

/**
 * Main navigation (4 items), labels from dict.nav. The other services
 * (kitchens, restaurant equipment, scrap) are linked from the service cards and footer.
 */
export const navItems = [
  { label: dict.nav.home, href: "/" },
  { label: dict.nav.usedFurniture, href: "/used-furniture" },
  { label: dict.nav.appliances, href: "/used-appliances" },
  { label: dict.nav.contact, href: "/contact" },
];

/** Small interface labels that data.json doesn't contain. */
export const ui = {
  skip: "تخطي إلى المحتوى",
  mainNav: "القائمة الرئيسية",
  openMenu: "فتح القائمة",
  closeMenu: "إغلاق القائمة",
  faq: "الأسئلة الشائعة",
  notFound: "الصفحة غير موجودة",
  backHome: "العودة إلى الرئيسية",
};
