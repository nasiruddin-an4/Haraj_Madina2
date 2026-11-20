"use client";

import { useState } from "react";

import { dict, mailHref, telHref, whatsappHref } from "@/lib/data";
import { ChatIcon, CloseIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "./icons";

const actions = [
  { label: dict.common.whatsapp, href: whatsappHref, icon: WhatsAppIcon, className: "bg-[#25d366]", external: true },
  { label: dict.common.call, href: telHref, icon: PhoneIcon, className: "bg-brand", external: false },
  { label: dict.contactPage.contactInfo.email, href: mailHref, icon: MailIcon, className: "bg-[#ea4335]", external: false },
];

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col-reverse items-center gap-3">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="floating-contact"
        aria-label={dict.nav.contact}
        className="relative grid size-14 place-items-center rounded-full bg-navy text-white shadow-lg transition-transform hover:scale-105"
      >
        {!open && <span className="absolute inset-0 animate-ping rounded-full bg-navy/40" aria-hidden="true" />}
        {open ? <CloseIcon className="size-6" /> : <ChatIcon className="size-6" />}
      </button>

      <ul id="floating-contact" hidden={!open} className="flex flex-col-reverse gap-3">
        {actions.map(({ label, href, icon: Icon, className, external }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              title={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`grid size-12 place-items-center rounded-full text-white shadow-md transition-transform hover:scale-110 ${className}`}
            >
              <Icon className="size-6" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
