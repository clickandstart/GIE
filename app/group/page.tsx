import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { ArrowRight } from "@/components/Icons";
import { groupIntro, groupPrinciples, groupUnits } from "@/content/site";

export const metadata: Metadata = {
  title: "The group",
  description:
    "GIE Holding: the structure behind GIE — four operating divisions in commodities, construction and logistics, and new ventures in commerce and automotive in development.",
};

export default function GroupPage() {
  const operating = groupUnits.filter((unit) => unit.status === "Operating");
  const developing = groupUnits.filter((unit) => unit.status === "In development");

  return (
    <>
      <PageHero
        eyebrow="GIE Holding"
        title={
          <>
            One house,{" "}
            <span className="serif-accent text-teal-light">several ways to trade.</span>
          </>
        }
        lead={groupIntro.body[0]}
        aside={
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/15 pt-8 sm:grid-cols-4">
            {groupIntro.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-[0.6rem] uppercase tracking-[0.16em] text-paper/45">
                  {stat.label}
                </dt>
                <dd className="mt-2 font-display text-2xl font-medium tracking-tight">{stat.value}</dd>
              </div>
            ))}
          </dl>
        }
      />

      <section className="bg-paper py-20 md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-teal">Structure</p>
            <h2 className="display-md mt-6">A holding that operates, not only owns.</h2>
            <p className="mt-6 max-w-[40ch] text-[0.95rem] leading-relaxed text-ink/65">
              {groupIntro.body[1]}
            </p>
            <div className="mt-10 border-l border-teal/40 pl-5">
              <p className="text-[0.8rem] leading-relaxed text-ink/50">{groupIntro.note}</p>
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="font-display text-[0.62rem] uppercase tracking-[0.2em] text-ink/40">
                Operating divisions
              </p>
            </Reveal>
            <div className="mt-6 divide-y divide-line border-y border-line">
              {operating.map((unit, index) => (
                <Reveal key={unit.id} delay={index * 60} className="grid gap-4 py-6 sm:grid-cols-[7rem_1fr]">
                  <span className="font-display text-[0.6rem] uppercase tracking-[0.16em] text-teal">
                    Operating
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium tracking-tight">{unit.name}</h3>
                    <p className="mt-1 text-[0.75rem] uppercase tracking-[0.08em] text-ink/40">
                      {unit.field}
                    </p>
                    <p className="mt-3 text-[0.88rem] leading-relaxed text-ink/65">{unit.text}</p>
                    {unit.href && (
                      <Link
                        href={unit.href}
                        className="mt-4 inline-flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-ink/60 transition-colors hover:text-teal"
                      >
                        Division detail
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ventures in development */}
      <section className="relative overflow-hidden bg-ink py-20 text-paper md:py-28">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="shell relative">
          <Reveal className="grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="eyebrow text-teal-light">New sectors</p>
              <h2 className="display-lg mt-6 max-w-[22ch]">
                Ventures in development, not announcements.
              </h2>
            </div>
            <p className="text-[0.9rem] leading-relaxed text-paper/60 md:col-span-4 md:col-start-9">
              We publish these initiatives when the structure exists, not when the idea does. Both
              programmes are being defined and will be presented in their own time.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {developing.map((unit, index) => (
              <Reveal key={unit.id} delay={index * 100}>
                <article className="flex h-full flex-col border border-white/12">
                  {unit.image && (
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={unit.image}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 45vw, 100vw"
                        className="object-cover opacity-70"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-7 md:p-8">
                    <span className="inline-flex w-fit items-center gap-2 border border-copper/50 px-2.5 py-1 font-display text-[0.55rem] uppercase tracking-[0.18em] text-copper">
                      In development
                    </span>
                    <h3 className="display-md mt-5 text-paper">{unit.name}</h3>
                    <p className="mt-2 text-[0.72rem] uppercase tracking-[0.1em] text-paper/40">
                      {unit.field}
                    </p>
                    <p className="mt-4 text-[0.9rem] leading-relaxed text-paper/65">{unit.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <p className="max-w-3xl text-[0.78rem] leading-relaxed text-paper/40">
              {groupIntro.note}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand/40 py-20 md:py-28">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-teal">How we operate</p>
            <h2 className="display-lg mt-6">The group is the guarantee.</h2>
          </Reveal>
          <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-3">
            {groupPrinciples.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 70} className="bg-paper p-7 md:p-8">
                <span className="font-display text-[0.6rem] tracking-[0.2em] text-teal">
                  0{index + 1}
                </span>
                <h3 className="mt-5 font-display text-lg font-medium tracking-tight">
                  {principle.title}
                </h3>
                <p className="mt-3 text-[0.88rem] leading-relaxed text-ink/65">{principle.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Group enquiries"
        title="A single address for every division."
        body="Commercial proposals, partnerships and press enquiries are handled by the holding. Write to us and we will route the request to the right team."
      />
    </>
  );
}
