import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  aside?: ReactNode;
};

export function PageHero({ eyebrow, title, lead, aside }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink pt-32 text-paper md:pt-40">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 top-0 h-[28rem] w-[28rem] rounded-full bg-teal/25 blur-[120px]"
        aria-hidden="true"
      />
      <div className="shell relative pb-16 md:pb-24">
        <p className="eyebrow rise text-teal-light">{eyebrow}</p>
        <div className="mt-6 grid gap-10 md:grid-cols-12 md:items-end">
          <h1 className="display-lg rise text-balance md:col-span-8" style={{ ["--rise-delay" as string]: "90ms" }}>
            {title}
          </h1>
          {lead && (
            <p
              className="lede max-w-md text-paper/70 md:col-span-4"
              style={{ ["--rise-delay" as string]: "180ms" }}
            >
              {lead}
            </p>
          )}
        </div>
        {aside && <div className="mt-14">{aside}</div>}
      </div>
    </section>
  );
}
