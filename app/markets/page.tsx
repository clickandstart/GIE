import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { foodProducts, markets } from "@/content/site";

export const metadata: Metadata = {
  title: "Markets",
  description:
    "Precious and industrial metals, energy, wood and food raw materials traded by GIE: sugar, oils, grains, rice, coffee, proteins and ferrous and non-ferrous metals.",
};

export default function MarketsPage() {
  return (
    <>
      <PageHero
        eyebrow="Markets"
        title={
          <>
            The materials the world runs on,{" "}
            <span className="serif-accent text-teal-light">sourced at origin.</span>
          </>
        }
        lead="GIE supplies large volumes of metals, energy products, wood and food raw materials, working directly with mine producers, refineries and agricultural exporters."
      />

      <section className="bg-paper py-20 md:py-28">
        <div className="shell">
          <Reveal className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="eyebrow text-teal">Commodity lines</p>
              <h2 className="display-lg mt-6 max-w-[20ch]">What we trade, and where it comes from.</h2>
            </div>
            <p className="text-[0.95rem] leading-relaxed text-ink/65 md:col-span-4 md:col-start-9">
              Product availability varies with harvest, refinery allocation and freight. Ask for the
              current position on the line you need.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {markets.map((market, index) => (
              <Reveal
                key={market.id}
                delay={index * 60}
                className={`bg-paper p-7 md:p-8 ${index === 0 ? "lg:col-span-1" : ""}`}
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-lg font-medium tracking-tight">{market.title}</h3>
                  <span className="font-display text-[0.6rem] tracking-[0.18em] text-ink/35">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-3 text-[0.82rem] leading-relaxed text-ink/55">{market.note}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {market.items.map((item) => (
                    <li
                      key={item}
                      className="border border-line px-2.5 py-1.5 text-[0.78rem] leading-none text-ink/75"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}

            <Reveal delay={300} className="relative overflow-hidden bg-ink p-7 text-paper md:p-8">
              <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
              <div className="relative">
                <p className="font-display text-[0.6rem] uppercase tracking-[0.2em] text-teal-light">
                  Registered
                </p>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-paper/80">
                  GIE is registered with several chambers of commerce, starting with the Chinese one,
                  with the certificates and permits required for the import and export of raw
                  materials and foods.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-line bg-sand/40 py-20 md:py-28">
        <div className="shell">
          <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow text-teal">Food division</p>
              <h2 className="display-lg mt-6 max-w-[22ch]">
                Selected at origin, specified to the last parameter.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-[0.95rem] leading-relaxed text-ink/65">
                Oils, cereals, sugar, coffee, pulses and proteins — traded in bulk, bagged or
                containerised, with the documentation each destination requires.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="relative aspect-square overflow-hidden bg-ink">
                <Image
                  src="/images/food-grid.webp"
                  alt="Selection of food raw materials: soy, corn, wheat, rice, coffee and sugar"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-5 font-display text-[0.62rem] uppercase leading-relaxed tracking-[0.18em] text-ink/45">
                Sunflower · corn oil · soybean · rapeseed · ICUMSA 45 · ICUMSA 150 · VHP 600–1200 ·
                grains and flours · rice · coffee · various beans · bovine and pork cuts
              </p>
            </Reveal>

            <div className="lg:col-span-6 lg:col-start-7">
              <dl className="divide-y divide-line border-y border-line">
                {foodProducts.map((product, index) => (
                  <Reveal key={product.name} delay={index * 40} className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
                    <dt className="font-display text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-ink">
                      {product.name}
                    </dt>
                    <dd className="text-[0.85rem] leading-relaxed text-ink/60">{product.text}</dd>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Availability"
        title="Ask for the current position on your line."
        body="Harvest, allocation and freight change weekly. Tell us the product and the volume, and we will confirm what is available and at what price."
      />
    </>
  );
}
