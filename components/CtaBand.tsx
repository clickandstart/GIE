import Link from "next/link";
import { ArrowRight, Mail } from "./Icons";
import { site } from "@/content/site";

type CtaBandProps = {
  eyebrow?: string;
  title?: string;
  body?: string;
};

export function CtaBand({
  eyebrow = "Start a conversation",
  title = "Tell us what you need to source.",
  body = "Send the product, specification and volume. We will come back with the producer, the procedure and a landed price.",
}: CtaBandProps) {
  return (
    <section className="bg-paper">
      <div className="shell py-20 md:py-28">
        <div className="relative overflow-hidden bg-ink px-6 py-14 text-paper md:px-16 md:py-20">
          <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
          <div className="relative grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="eyebrow text-teal-light">{eyebrow}</p>
              <h2 className="display-lg mt-5">{title}</h2>
              <p className="lede mt-6 max-w-xl text-paper/70">{body}</p>
            </div>
            <div className="flex flex-col gap-4 md:col-span-5 md:items-end">
              <Link href="/contact" className="btn btn-primary w-full md:w-auto">
                Request a quotation
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2.5 text-sm text-paper/70 transition-colors hover:text-paper"
              >
                <Mail className="h-4 w-4" />
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
