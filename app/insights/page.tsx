import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { ArrowRight } from "@/components/Icons";
import { insights } from "@/content/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Market notes from GIE on commodity specifications, metals inspection and the documentation that moves a cargo.",
};

export default function InsightsPage() {
  const [featured, ...rest] = insights;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Notes from the trade,{" "}
            <span className="serif-accent text-teal-light">without the noise.</span>
          </>
        }
        lead="Specifications, inspection and documentation: what actually decides whether a cargo is profitable. Written by the desks that handle it."
      />

      <section className="bg-paper py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <Link href={`/insights/${featured.slug}`} className="group grid gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                  <Image
                    src={featured.cover}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover opacity-80 transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 flex flex-col justify-between p-7 md:p-9">
                    <span className="font-display text-[0.6rem] uppercase tracking-[0.2em] text-paper/70">
                      {featured.kicker}
                    </span>
                    <span className="inline-flex items-center gap-2 font-display text-[0.62rem] uppercase tracking-[0.18em] text-paper">
                      Read the note
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center lg:col-span-5">
                <span className="eyebrow text-teal">Latest note</span>
                <h2 className="display-md mt-5">{featured.title}</h2>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/65">{featured.excerpt}</p>
                <p className="mt-6 font-display text-[0.6rem] uppercase tracking-[0.18em] text-ink/40">
                  {featured.kicker} · {featured.readingTime}
                </p>
              </div>
            </Link>
          </Reveal>

          <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-2">
            {rest.map((insight, index) => (
              <Reveal key={insight.slug} delay={index * 80} className="bg-paper">
                <Link href={`/insights/${insight.slug}`} className="group flex h-full flex-col p-7 md:p-9">
                  <span className="font-display text-[0.58rem] uppercase tracking-[0.18em] text-teal">
                    {insight.kicker}
                  </span>
                  <h3 className="display-md mt-5 text-[1.5rem]">{insight.title}</h3>
                  <p className="mt-4 flex-1 text-[0.9rem] leading-relaxed text-ink/60">
                    {insight.excerpt}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 font-display text-[0.62rem] uppercase tracking-[0.16em] text-ink/55">
                    {insight.readingTime}
                    <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <p className="max-w-2xl text-[0.82rem] leading-relaxed text-ink/45">
              These notes describe practice and specifications; they are not commercial offers or
              price indications. For current availability, write to the desk.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Questions"
        title="If a specification is not clear, ask before you buy."
        body="Our desks will tell you what a grade means, what to inspect and which documents the destination will require."
      />
    </>
  );
}
