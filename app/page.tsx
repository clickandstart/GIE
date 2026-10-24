import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { HeroVisual } from "@/components/HeroVisual";
import {
  divisions,
  expertise,
  groupUnits,
  hero,
  intro,
  markets,
  regions,
} from "@/content/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="shell relative grid min-h-[100svh] gap-0 pt-24 md:pt-28 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-between pb-12 pt-4 md:pt-6 lg:pb-14 lg:pr-8">
            <div>
              <p className="eyebrow rise text-teal-light">{hero.eyebrow}</p>
              <h1 className="display-xl rise mt-7 max-w-[15ch]">
                {hero.title[0]}{" "}
                <span className="serif-accent text-teal-light">{hero.title[1]}</span>
              </h1>
              <p
                className="lede rise mt-8 max-w-[46ch] text-paper/70"
                style={{ ["--rise-delay" as string]: "140ms" }}
              >
                {hero.body}
              </p>
              <div
                className="rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
                style={{ ["--rise-delay" as string]: "220ms" }}
              >
                <Link href={hero.primaryCta.href} className="btn btn-primary">
                  {hero.primaryCta.label}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link href={hero.secondaryCta.href} className="btn btn-ghost text-paper">
                  {hero.secondaryCta.label}
                </Link>
              </div>
            </div>

            <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/12 pt-8 sm:grid-cols-4 lg:mt-20">
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-[0.65rem] uppercase tracking-[0.16em] text-paper/45">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 font-display text-2xl font-medium tracking-tight text-paper md:text-[1.75rem]">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="-mx-6 min-h-[24rem] md:-mx-10 lg:mx-0 lg:min-h-full">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="overflow-hidden border-y border-white/10 bg-ink-deep py-4">
        <div className="marquee-track flex w-max items-center whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex items-center gap-10 pr-10"
              aria-hidden={copy === 1 ? true : undefined}
            >
              {hero.ticker.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="font-display text-[0.68rem] uppercase tracking-[0.22em] text-paper/45"
                >
                  {item}
                  <span className="ml-10 inline-block h-1 w-1 rounded-full bg-teal/70 align-middle" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Intro */}
      <section className="bg-paper py-20 md:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow text-teal">{intro.eyebrow}</p>
            <h2 className="display-lg mt-6">{intro.title}</h2>
            <div className="mt-8 space-y-5 text-[0.975rem] leading-relaxed text-ink/70">
              {intro.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <dl className="mt-10 grid gap-5 border-t border-line pt-8 sm:grid-cols-3">
              {intro.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-display text-[0.62rem] uppercase tracking-[0.16em] text-ink/45">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 text-[0.82rem] leading-snug text-ink/80">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal className="lg:col-span-6" delay={120}>
            <figure className="relative">
              <div className="relative aspect-[5/4] overflow-hidden bg-ink">
                <Image
                  src="/images/network.webp"
                  alt="Connected human network over a world map"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <blockquote className="relative -mt-10 ml-4 mr-4 bg-ink px-7 py-8 text-paper md:ml-10 md:px-10">
                <p className="serif-accent text-[1.35rem] leading-snug md:text-[1.6rem]">
                  “{intro.quote}”
                </p>
                <figcaption className="mt-6 font-display text-[0.62rem] uppercase tracking-[0.2em] text-teal-light">
                  GIE — Gürsel Import Export
                </figcaption>
              </blockquote>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Divisions */}
      <section className="border-y border-line bg-sand/40 py-20 md:py-28">
        <div className="shell">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-teal">Divisions</p>
              <h2 className="display-lg mt-6 max-w-[22ch]">
                Four divisions covering the major supply needs worldwide.
              </h2>
            </div>
            <Link href="/divisions" className="link-arrow shrink-0 text-ink">
              All divisions
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2">
            {divisions.map((division, index) => (
              <Reveal key={division.slug} delay={index * 80}>
                <Link href={`/divisions#${division.slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                    <Image
                      src={division.image}
                      alt={division.alt}
                      fill
                      sizes="(min-width: 768px) 45vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />
                    <span className="absolute left-0 top-0 bg-ink/80 px-3 py-2 font-display text-[0.62rem] tracking-[0.2em] text-paper/80">
                      {division.no}
                    </span>
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-6">
                    <div>
                      <h3 className="display-md">{division.title}</h3>
                      <p className="mt-3 max-w-[42ch] text-[0.9rem] leading-relaxed text-ink/65">
                        {division.summary}
                      </p>
                    </div>
                    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-ink/15 text-ink transition-colors duration-300 group-hover:border-teal group-hover:bg-teal group-hover:text-white">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Group */}
      <section className="bg-paper py-20 md:py-28">
        <div className="shell">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-teal">GIE Holding</p>
              <h2 className="display-lg mt-6 max-w-[24ch]">
                Four divisions today. Two ventures taking shape.
              </h2>
            </div>
            <Link href="/group" className="link-arrow shrink-0 text-ink">
              Group structure
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {groupUnits.map((unit, index) => (
              <Reveal key={unit.id} delay={index * 60} className="flex flex-col justify-between bg-paper p-6">
                <div>
                  <span
                    className={`font-display text-[0.55rem] uppercase tracking-[0.16em] ${
                      unit.status === "Operating" ? "text-teal" : "text-copper"
                    }`}
                  >
                    {unit.status}
                  </span>
                  <h3 className="mt-4 font-display text-[0.98rem] font-medium leading-tight tracking-tight">
                    {unit.name}
                  </h3>
                  <p className="mt-2 text-[0.72rem] uppercase leading-relaxed tracking-[0.08em] text-ink/45">
                    {unit.field}
                  </p>
                </div>
                {unit.href && (
                  <Link
                    href={unit.href}
                    className="mt-5 inline-flex items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-ink/60 transition-colors hover:text-teal"
                  >
                    View
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="relative overflow-hidden bg-ink py-20 text-paper md:py-28">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="shell relative">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-teal-light">Markets</p>
              <h2 className="display-lg mt-6 max-w-[24ch]">
                Raw materials that move industry and feed markets.
              </h2>
            </div>
            <Link href="/markets" className="link-arrow shrink-0 text-paper">
              Full market list
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {markets.slice(0, 3).map((market, index) => (
              <Reveal key={market.id} delay={index * 90} className="border-t border-white/15 pt-7">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-lg font-medium tracking-tight">{market.title}</h3>
                  <span className="font-display text-[0.62rem] tracking-[0.18em] text-paper/35">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-3 text-[0.85rem] leading-relaxed text-paper/55">{market.note}</p>
                <ul className="mt-5 space-y-2 text-[0.9rem] text-paper/80">
                  {market.items.slice(0, 6).map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-px w-3 shrink-0 bg-teal-light" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <div className="relative aspect-[21/9] overflow-hidden md:aspect-[24/7]">
              <Image
                src="/images/materials.webp"
                alt="Timber, gold bars, steel pipes, fuel and containers"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" aria-hidden="true" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-paper py-20 md:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow text-teal">Our expertise</p>
              <h2 className="display-lg mt-6 max-w-[18ch]">
                From the first enquiry to the delivered cargo.
              </h2>
              <p className="mt-6 max-w-[40ch] text-[0.95rem] leading-relaxed text-ink/65">
                We work closely with our customers to identify the best products for their needs in
                quality, price, delivery times and every other characteristic that matters.
              </p>
              <div className="relative mt-10 aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/expertise.webp"
                  alt="Two professionals shaking hands over a contract"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="divide-y divide-line border-t border-line">
              {expertise.map((item, index) => (
                <Reveal as="li" key={item.title} delay={index * 60} className="py-7 md:py-8">
                  <div className="flex gap-6">
                    <span className="font-display text-[0.65rem] tracking-[0.18em] text-teal">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-medium tracking-tight">{item.title}</h3>
                      <p className="mt-2 max-w-[46ch] text-[0.9rem] leading-relaxed text-ink/65">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Reach */}
      <section className="bg-sand/50 py-20 md:py-28">
        <div className="shell">
          <Reveal className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="eyebrow text-teal">Global reach</p>
              <h2 className="display-lg mt-6 max-w-[20ch]">
                By your side for <span className="serif-accent">every need.</span>
              </h2>
            </div>
            <p className="text-[0.95rem] leading-relaxed text-ink/65 md:col-span-4 md:col-start-9">
              Through our global network we operate and serve the European Union, the United
              States, the Middle East, South Africa, China, Korea and Australia.
            </p>
          </Reveal>

          <Reveal className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {regions.map((region) => (
              <div key={region.name} className="bg-paper p-6">
                <h3 className="font-display text-sm font-medium tracking-tight">{region.name}</h3>
                <p className="mt-2 text-[0.8rem] uppercase tracking-[0.1em] text-ink/45">
                  {region.note}
                </p>
              </div>
            ))}
            <div className="flex flex-col justify-between bg-paper p-6">
              <p className="serif-accent text-xl leading-tight text-teal">
                One partner, from origin to port.
              </p>
              <Link href="/contact" className="mt-4 inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.14em]">
                Contact
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </Reveal>

          <Reveal className="mt-10">
            <div className="relative overflow-hidden">
              <Image
                src="/images/istanbul.webp"
                alt="Istanbul skyline with the Bosphorus bridges"
                width={1800}
                height={622}
                sizes="100vw"
                className="h-auto w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-ink/85 px-5 py-3">
                <p className="font-display text-[0.62rem] uppercase tracking-[0.2em] text-paper/85">
                  Registered office — Istanbul, Türkiye
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
