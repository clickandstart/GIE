import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, Mail } from "@/components/Icons";
import { getInsight, insights } from "@/content/insights";
import { site } from "@/content/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) return {};

  return {
    title: insight.title,
    description: insight.excerpt,
    openGraph: {
      type: "article",
      title: insight.title,
      description: insight.excerpt,
      images: [{ url: insight.cover, alt: insight.title }],
    },
  };
}

export default async function InsightPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) notFound();

  const related = insights.filter((item) => item.slug !== insight.slug);

  return (
    <>
      <article>
        <header className="relative overflow-hidden bg-ink pb-16 pt-32 text-paper md:pb-20 md:pt-40">
          <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
          <div className="shell relative">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 font-display text-[0.6rem] uppercase tracking-[0.18em] text-paper/50 transition-colors hover:text-paper"
            >
              <ArrowRight className="h-3 w-3 rotate-180" />
              All insights
            </Link>
            <p className="eyebrow mt-8 text-teal-light">{insight.kicker}</p>
            <h1 className="display-lg mt-5 max-w-[24ch]">{insight.title}</h1>
            <p className="mt-6 max-w-2xl text-[1rem] leading-relaxed text-paper/65">{insight.excerpt}</p>
            <p className="mt-8 font-display text-[0.6rem] uppercase tracking-[0.18em] text-paper/40">
              {insight.readingTime} · GIE Holding
            </p>
          </div>
        </header>

        <div className="bg-paper">
          <div className="shell grid gap-14 py-16 lg:grid-cols-12 lg:gap-16 lg:py-20">
            <div className="lg:col-span-8">
              <div className="relative aspect-[16/9] overflow-hidden bg-ink">
                <Image
                  src={insight.cover}
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="article-prose mt-10">
                {insight.blocks.map((block, index) => {
                  if (block.type === "h2") {
                    return <h2 key={index}>{block.text}</h2>;
                  }
                  if (block.type === "list") {
                    return (
                      <ul key={index}>
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    );
                  }
                  if (block.type === "note") {
                    return (
                      <p key={index} className="note">
                        {block.text}
                      </p>
                    );
                  }
                  return <p key={index}>{block.text}</p>;
                })}
              </div>
            </div>

            <aside className="lg:col-span-4 lg:col-start-9">
              <div className="lg:sticky lg:top-32">
                <Reveal className="border border-line bg-white/50 p-7">
                  <p className="font-display text-[0.6rem] uppercase tracking-[0.18em] text-ink/40">
                    Talk to the desk
                  </p>
                  <p className="mt-4 text-[0.9rem] leading-relaxed text-ink/70">
                    If this note raises a question about a specific cargo, specification or
                    destination, ask directly.
                  </p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-5 inline-flex items-center gap-2 text-[0.8rem] font-medium text-teal hover:text-ink"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    {site.email}
                  </a>
                  <Link href="/contact" className="mt-6 flex items-center justify-between border-t border-line pt-5 text-[0.68rem] font-medium uppercase tracking-[0.14em]">
                    Request a quotation
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Reveal>

                <div className="mt-10">
                  <p className="font-display text-[0.6rem] uppercase tracking-[0.18em] text-ink/40">
                    More notes
                  </p>
                  <ul className="mt-4 divide-y divide-line border-y border-line">
                    {related.map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/insights/${item.slug}`}
                          className="group flex items-start justify-between gap-4 py-4"
                        >
                          <span>
                            <span className="block text-[0.6rem] uppercase tracking-[0.14em] text-teal">
                              {item.kicker}
                            </span>
                            <span className="mt-1.5 block text-[0.88rem] font-medium leading-snug">
                              {item.title}
                            </span>
                          </span>
                          <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-ink/40 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <CtaBand
        eyebrow="Sourcing"
        title="Specifications first, price second."
        body="Send the product and the destination; we will confirm what the grade means for your market and what it takes to deliver it."
      />
    </>
  );
}
