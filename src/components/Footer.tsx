import Image from "next/image";
import Link from "next/link";

import logo from "../../public/images/logo.webp";
import { dict, mailHref, telHref } from "@/lib/data";
import { ChevronIcon, MailIcon, MapPinIcon, PhoneIcon } from "./icons";

export function Footer() {
  const { footer, business, contactPage } = dict;

  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.5fr]">
        <div>
          <Link href="/" aria-label={business.name} className="inline-block">
            <Image src={logo} alt={business.name} width={112} height={112} sizes="112px" className="size-28 rounded-full" />
          </Link>
          <p className="mt-5 max-w-md text-sm leading-loose text-white/85">{footer.about}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">{footer.quickLinksTitle}</h2>
          <ul className="mt-5 space-y-3">
            {footer.quickLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-white/85 transition-colors hover:text-gold"
                >
                  <ChevronIcon className="size-4" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">{footer.contactHeading}</h2>
          <ul className="mt-5 space-y-4 text-white/85">
            <li>
              <a href={telHref} className="inline-flex items-center gap-3 transition-colors hover:text-gold">
                <PhoneIcon className="size-5 text-sky" />
                <span dir="ltr">{business.phoneDisplay}</span>
              </a>
            </li>
            <li className="inline-flex items-center gap-3">
              <MapPinIcon className="size-5 text-sky" />
              <span>{business.serviceArea}</span>
            </li>
            <li>
              <a href={mailHref} className="inline-flex items-center gap-3 break-all transition-colors hover:text-gold">
                <MailIcon className="size-5 shrink-0 text-sky" />
                <span dir="ltr">{contactPage.contactInfo.emailAddress}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-black py-4 text-center text-sm text-white/90">{footer.copyright}</div>
    </footer>
  );
}
