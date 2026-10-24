import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { Check, ArrowRight } from "@/components/Icons";
import { divisions } from "@/content/site";

export const metadata: Metadata = {
  title: "Divisions",
  description:
    "Commodities and metals, food raw materials, construction and logistics: the four operating divisions of GIE Gürsel Import Export.",
};

export default function DivisionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Divisions"
        title={
          <>
            Four divisions, one{" "}
            <span className="serif-accent text-teal-light">single point of contact.</span>
          </>
        }
        lead="Each division has its own producers, procedures and specialists. The client keeps one relationship, one contract and one flow of information."
        aside={
          <nav aria-label="Divisions" className="flex flex-wrap gap-2">
            {divisions.map((division) => (
              <Link
                key={division.slug}
                href={`#${division.slug}`}
                className="border border-white/20 px-4 py-2 font-display text-[0.68rem] uppercase tracking-[0.14em] text-paper/75 transition-colors hover:border-white/50 hover:text-paper"
              >
                {division.no} — {division.title}
              </Link>
            ))}
          </nav>
        }
      />

      {divisions.map((division, index) => {
        const even = index % 2 === 0;
        return (
          <section
            key={division.slug}
            id={division.slug}
            className={`scroll-mt-24 border-b border-line py-20 md:py-28 ${
              even ? "bg-paper" : "bg-sand/40"
            }`}
          >
            <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal className={`lg:col-span-6 ${even ? "" : "lg:order-2"}`}>
                <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                  <Image
                    src={division.image}
                    alt={division.alt}
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute left-0 top-0 bg-ink/85 px-3 py-2 font-display text-[0.62rem] tracking-[0.2em] text-paper/80">
                    {division.no}
                  </span>
                </div>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {division.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[0.85rem] leading-snug text-ink/75">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal
                className={`lg:col-span-5 lg:col-start-8 ${even ? "" : "lg:order-1 lg:col-start-1"}`}
                delay={100}
              >
                <p className="eyebrow text-teal">{division.tagline}</p>
                <h2 className="display-lg mt-6">{division.title}</h2>
                <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-ink/70">
                  {division.detail.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                </div>
                <Link href="/contact" className="link-arrow mt-9 inline-flex text-ink">
                  Discuss a requirement
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Reveal>
            </div>
          </section>
        );
      })}

      <CtaBand
        eyebrow="Sourcing"
        title="Not sure which division your requirement belongs to?"
        body="Send the specification and the destination. We will route it to the right desk and answer with a producer, a procedure and a price."
      />
    </>
  );
}
