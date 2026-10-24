import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { nav } from "@/content/site";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="shell relative flex min-h-[80svh] flex-col justify-center py-32">
        <p className="eyebrow text-teal-light">Error 404</p>
        <h1 className="display-xl mt-6 max-w-[16ch]">
          This page is <span className="serif-accent text-teal-light">not in the manifest.</span>
        </h1>
        <p className="lede mt-6 max-w-lg text-paper/65">
          The address you followed does not exist. Everything else is a click away.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary">
            Back to home
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="btn btn-ghost text-paper">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
