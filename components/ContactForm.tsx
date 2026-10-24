"use client";

import { useState } from "react";
import { ArrowRight } from "./Icons";
import { site } from "@/content/site";

const fieldClass =
  "w-full border-b border-line bg-transparent py-3 text-[0.95rem] text-ink placeholder:text-ink/35 focus:border-teal focus:outline-none";

const labelClass =
  "block font-display text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink/55";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    const subject = `Quotation request — ${get("product") || "raw materials"}`;
    const body = [
      `Name: ${get("name")}`,
      `Company: ${get("company")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      "",
      `Product: ${get("product")}`,
      `Volume: ${get("volume")}`,
      `Destination: ${get("destination")}`,
      "",
      "Message:",
      get("message"),
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Name
          </label>
          <input id="name" name="name" required autoComplete="name" className={fieldClass} placeholder="Full name" />
        </div>
        <div>
          <label className={labelClass} htmlFor="company">
            Company
          </label>
          <input id="company" name="company" autoComplete="organization" className={fieldClass} placeholder="Company name" />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="name@company.com" />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} placeholder="+00 000 000 0000" />
        </div>
        <div>
          <label className={labelClass} htmlFor="product">
            Product
          </label>
          <input id="product" name="product" required className={fieldClass} placeholder="e.g. ICUMSA 45 sugar" />
        </div>
        <div>
          <label className={labelClass} htmlFor="volume">
            Volume
          </label>
          <input id="volume" name="volume" className={fieldClass} placeholder="e.g. 12,500 MT / month" />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="destination">
          Destination
        </label>
        <input id="destination" name="destination" className={fieldClass} placeholder="Port or country of delivery" />
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Message
        </label>
        <textarea id="message" name="message" rows={4} className={`${fieldClass} resize-none`} placeholder="Specification, packaging, payment terms, timing…" />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn btn-primary">
          Prepare the email
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
        <p className="max-w-xs text-xs leading-relaxed text-ink/50">
          {sent
            ? "Your email client is opening with the request ready to send. If nothing happens, write to us directly."
            : "Submitting opens your email client with the request already written. Nothing is stored on this site."}
        </p>
      </div>
    </form>
  );
}
