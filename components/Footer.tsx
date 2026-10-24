import Link from "next/link";
import { Logo } from "./Logo";
import { Mail, Phone, Pin } from "./Icons";
import { nav, site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-deep text-paper/70">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo className="text-paper" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed">
              GIE Holding. An international group in commodities, food raw materials, construction
              and logistics — connecting certified producers with industrial buyers since 1938.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <p className="font-display text-[0.7rem] uppercase tracking-[0.2em] text-paper/45">
              Company
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/" className="transition-colors hover:text-paper">
                  Home
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-display text-[0.7rem] uppercase tracking-[0.2em] text-paper/45">
              Registered office
            </p>
            <address className="mt-5 flex gap-3 text-sm not-italic leading-relaxed">
              <Pin className="mt-0.5 h-4 w-4 shrink-0 text-teal-light" />
              <span>
                {site.address.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </address>
            <div className="mt-5 space-y-3 text-sm">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 transition-colors hover:text-paper"
              >
                <Mail className="h-4 w-4 shrink-0 text-teal-light" />
                {site.email}
              </a>
              {site.phones.slice(0, 2).map((phone) => (
                <a
                  key={phone.href}
                  href={`tel:${phone.href}`}
                  className="flex items-center gap-3 transition-colors hover:text-paper"
                >
                  <Phone className="h-4 w-4 shrink-0 text-teal-light" />
                  {phone.value}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs tracking-wide text-paper/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="font-display uppercase tracking-[0.18em]">
            We connect the world of commodities
          </p>
        </div>
      </div>
    </footer>
  );
}
