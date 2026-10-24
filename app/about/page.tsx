import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { timeline, values } from "@/content/site";

export const metadata: Metadata = {
  title: "The company",
  description:
    "From a family theatre business in 1938 Istanbul to an international trading house in commodities, food raw materials, construction and logistics.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The company"
        title={
          <>
            From 1938 to today, with capacity, ethics and a{" "}
            <span className="serif-accent text-teal-light">constant look to the future.</span>
          </>
        }
        lead="Three generations of trade, transport and engineering — and a single idea of how business should be done."
      />

      <section className="bg-paper py-20 md:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-teal">Our story</p>
            <h2 className="display-md mt-6">A family enterprise that never stopped moving.</h2>
            <div className="relative mt-10 aspect-[4/5] overflow-hidden bg-ink">
              <Image
                src="/images/meeting.webp"
                alt="GIE team in discussion around a meeting table"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6 lg:col-start-7" delay={100}>
            <div className="space-y-6 text-[0.975rem] leading-[1.75] text-ink/75">
              <p className="text-[1.15rem] leading-relaxed text-ink">
                The GURSEL company was founded in 1938 by the father of engineer Osman Fuat GURSEL.
                Its first activity was the management of several theatres in the centre of Istanbul,
                where operettas, theatre and cinema were staged until the 1960s.
              </p>
              <p>
                After concluding his engineering degree in 1970, Osman Fuat GURSEL began his activity
                in the tourism sector, developing it both nationally and internationally. With
                extensive knowledge of the international and domestic transport sector, he started
                organising tourist tours throughout Turkish territory — and travellers from various
                parts of Europe and the world came to rely on the representative of the Gursel
                agency.
              </p>
              <p>
                In the years that followed, the tourist agency took the name of GURSEL, then GURSEL
                IMPORT AND EXPORT, and finally GIE GURSEL IMPORT EXPORT. The company today deals in
                a range of commodities both nationally and internationally, with commercial
                contacts all over the world.
              </p>
              <p>
                That trajectory explains the way we work. A theatre requires precision and timing; a
                tour requires logistics and care; a trading house requires credibility in every
                market it touches. GIE was built from all three.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-3">
              {[
                { value: "1938", label: "Founded in Istanbul" },
                { value: "1970", label: "Engineering & tourism" },
                { value: "2020", label: "Food raw materials desk" },
              ].map((item) => (
                <div key={item.label}>
                  <dt className="font-display text-2xl font-medium tracking-tight">{item.value}</dt>
                  <dd className="mt-1 text-[0.72rem] uppercase tracking-[0.12em] text-ink/45">
                    {item.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-sand/40 py-20 md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-teal">Milestones</p>
            <h2 className="display-md mt-6 max-w-[16ch]">
              Nearly a century of trade, in five moments.
            </h2>
            <p className="mt-6 max-w-[34ch] text-[0.9rem] leading-relaxed text-ink/60">
              The company has followed different markets over the years, adapting methods and
              structures to each one while keeping its values intact.
            </p>
          </Reveal>

          <div className="lg:col-span-7 lg:col-start-6">
            <ol className="relative border-l border-line">
              {timeline.map((item, index) => (
                <Reveal as="li" key={item.title} delay={index * 50} className="relative pb-10 pl-8 last:pb-0">
                  <span
                    className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border border-teal bg-paper"
                    aria-hidden="true"
                  />
                  <p className="font-display text-[0.65rem] uppercase tracking-[0.2em] text-teal">
                    {item.year}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-medium tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[52ch] text-[0.9rem] leading-relaxed text-ink/65">
                    {item.text}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-teal">Mission & vision</p>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <Reveal className="border border-line bg-white/40 p-8 md:p-10">
              <p className="font-display text-[0.65rem] uppercase tracking-[0.2em] text-ink/40">
                01 — Mission
              </p>
              <h2 className="display-md mt-6 max-w-[20ch]">
                Analyse, advise, protect, deliver.
              </h2>
              <p className="mt-6 text-[0.95rem] leading-relaxed text-ink/70">
                In an increasingly small and competitive world without borders, the purchase and
                sale of products around the world allows our customers and suppliers to develop
                their internationalisation. GIE helps, advises and protects them along a path that
                is sometimes unknown, accompanying the process towards success.
              </p>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/70">
                Our mission is to assist customers by analysing the best option based on the
                information received, and by implementing — through our international network — the
                most viable and profitable solution.
              </p>
            </Reveal>

            <Reveal className="relative overflow-hidden bg-ink p-8 text-paper md:p-10" delay={100}>
              <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
              <div className="relative">
                <p className="font-display text-[0.65rem] uppercase tracking-[0.2em] text-teal-light">
                  02 — Vision
                </p>
                <h2 className="display-md mt-6 max-w-[20ch]">
                  Closer to every flow of business.
                </h2>
                <p className="mt-6 text-[0.95rem] leading-relaxed text-paper/70">
                  Our vision for the future includes the creation of several offices on different
                  continents, to be closer to our business flow — and to the producers and buyers who
                  depend on it.
                </p>
                <blockquote className="serif-accent mt-10 border-t border-white/15 pt-8 text-[1.35rem] leading-snug text-paper/90">
                  “A modern company, attentive to innovation, capable of following market trends
                  while keeping its values and work philosophy intact.”
                </blockquote>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-sand/40 py-20 md:py-28">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-teal">Values</p>
            <h2 className="display-lg mt-6">The terms on which we trade.</h2>
          </Reveal>
          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 70} className="bg-paper p-7 md:p-8">
                <span className="font-display text-[0.62rem] tracking-[0.2em] text-teal">
                  0{index + 1}
                </span>
                <h3 className="mt-5 font-display text-lg font-medium tracking-tight">{value.title}</h3>
                <p className="mt-3 text-[0.875rem] leading-relaxed text-ink/65">{value.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Work with GIE"
        title="A partner who has been doing this since 1938."
        body="Tell us about the product and the market. We will tell you, plainly, what is possible and on what terms."
      />
    </>
  );
}
