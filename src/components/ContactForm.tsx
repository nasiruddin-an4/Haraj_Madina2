"use client";

import { useState, type FormEvent } from "react";

import { dict } from "@/lib/data";
import { WhatsAppIcon } from "./icons";

const { labels, serviceTypes, submitBtn } = dict.contactPage;

const field =
  "mt-2 w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-navy outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";

/** Builds a WhatsApp message from the form and opens it — nothing is stored on a server. */
export function ContactForm() {
  const [form, setForm] = useState({ name: "", serviceType: serviceTypes[0], location: "", details: "" });

  const update = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = [
      `*${labels.name}:* ${form.name}`,
      `*${labels.serviceType}:* ${form.serviceType}`,
      `*${labels.location}:* ${form.location}`,
      `*${labels.details}:* ${form.details}`,
    ].join("\n");
    const phone = dict.business.phone.replace(/\D/g, "");
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className="font-semibold text-navy">
        {labels.name}
        <input required value={form.name} onChange={update("name")} className={field} autoComplete="name" />
      </label>
      <label className="font-semibold text-navy">
        {labels.serviceType}
        <select value={form.serviceType} onChange={update("serviceType")} className={field}>
          {serviceTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="font-semibold text-navy sm:col-span-2">
        {labels.location}
        <input required value={form.location} onChange={update("location")} className={field} />
      </label>
      <label className="font-semibold text-navy sm:col-span-2">
        {labels.details}
        <textarea rows={5} value={form.details} onChange={update("details")} className={field} />
      </label>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-4 text-lg font-bold text-white shadow-lg transition hover:brightness-110 sm:col-span-2"
      >
        <WhatsAppIcon className="size-6" />
        {submitBtn}
      </button>
    </form>
  );
}
