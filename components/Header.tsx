"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { ArrowRight } from "./Icons";
import { nav } from "@/content/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          solid
            ? "border-b border-line bg-paper/95 text-ink backdrop-blur-md"
            : "border-b border-white/10 text-white"
        }`}
      >
        <div className="shell flex h-20 items-center justify-between md:h-[5.5rem]">
          <Logo />

          <nav aria-label="Main" className="hidden shrink-0 items-center gap-5 lg:flex xl:gap-9">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-[0.72rem] font-medium uppercase tracking-[0.12em] transition-opacity hover:opacity-100 ${
                    active ? "opacity-100" : "opacity-70"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/contact"
              className={`btn shrink-0 px-5 ${solid ? "btn-ink" : "border border-white/35 text-white hover:bg-white/10"}`}
            >
              <span className="lg:inline xl:hidden">Enquire</span>
              <span className="hidden xl:inline">Request a quote</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex items-center gap-3 lg:hidden"
          >
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em]">
              {open ? "Close" : "Menu"}
            </span>
            <span className="relative block h-3 w-6" aria-hidden="true">
              <span
                className={`absolute left-0 block h-px w-6 bg-current transition-transform duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0.5"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-6 bg-current transition-transform duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-2.5"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 z-40 overflow-y-auto bg-paper px-6 pb-10 pt-28 text-ink lg:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col divide-y divide-line border-y border-line">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-baseline justify-between py-6"
            >
              <span className="display-md">{item.label}</span>
              <span className="font-display text-xs tracking-[0.2em] text-ink/40">
                0{i + 1}
              </span>
            </Link>
          ))}
        </nav>
        <div className="mt-10 space-y-6">
          <Link href="/contact" className="btn btn-ink w-full">
            Request a quotation
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <p className="text-sm leading-relaxed text-ink/60">
            Istanbul · Türkiye
            <br />
            fuat@fuatgursel.com
          </p>
        </div>
      </div>
    </>
  );
}
