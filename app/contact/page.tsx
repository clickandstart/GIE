import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, Pin } from "@/components/Icons";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact GIE Gürsel Import Export: commercial office, registered office in Istanbul, product enquiries and banking partners.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Tell us what you need{" "}
            <span className="serif-accent text-teal-light">to source.</span>
          </>
        }
        lead="A product, a specification and a destination are enough to start. We answer with the producer, the procedure and a landed price."
      />

      <section className="bg-paper py-20 md:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-teal">Direct contact</p>

            <div className="mt-8 space-y-8">
              <div>
                <p className="font-display text-[0.62rem] uppercase tracking-[0.18em] text-ink/40">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 flex items-center gap-3 font-display text-lg font-medium tracking-tight transition-colors hover:text-teal"
                >
                  <Mail className="h-4 w-4 text-teal" />
                  {site.email}
                </a>
              </div>

              <div>
                <p className="font-display text-[0.62rem] uppercase tracking-[0.18em] text-ink/40">
                  Telephone
                </p>
                <ul className="mt-3 space-y-3">
                  {site.phones.map((phone) => (
                    <li key={phone.href} className="flex items-baseline gap-3">
                      <Phone className="h-3.5 w-3.5 shrink-0 translate-y-0.5 text-teal" />
                      <span>
                        <a href={`tel:${phone.href}`} className="text-[0.95rem] hover:text-teal">
                          {phone.value}
                        </a>
                        <span className="block text-[0.65rem] uppercase tracking-[0.14em] text-ink/40">
                          {phone.label}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-display text-[0.62rem] uppercase tracking-[0.18em] text-ink/40">
                  Registered office
                </p>
                <address className="mt-3 flex gap-3 text-[0.95rem] not-italic leading-relaxed text-ink/80">
                  <Pin className="mt-1 h-3.5 w-3.5 shrink-0 text-teal" />
                  <span>
                    {site.address.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </address>
              </div>
            </div>

            <div className="mt-10 border-t border-line pt-8">
              <p className="font-display text-[0.62rem] uppercase tracking-[0.18em] text-ink/40">
                Banking partners
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-[0.82rem] text-ink/60">
                {site.banks.map((bank) => (
                  <li key={bank}>{bank}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7 lg:col-start-6" delay={100}>
            <div className="border border-line bg-white/50 p-6 md:p-10">
              <h2 className="display-md">Request a quotation</h2>
              <p className="mt-3 max-w-[48ch] text-[0.9rem] leading-relaxed text-ink/60">
                The more precise the specification, the faster the answer. Volumes, packaging,
                incoterms and payment terms all help.
              </p>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-16 text-paper md:py-20">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="shell relative grid gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <p className="eyebrow text-teal-light">Product inquiries</p>
            <h2 className="display-md mt-5 max-w-[26ch]">
              Commercial office and product enquiries are handled by the same team.
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <a
              href={`tel:${site.phones[0].href}`}
              className="font-display text-2xl font-medium tracking-tight transition-colors hover:text-teal-light"
            >
              {site.phones[0].value}
            </a>
            <p className="mt-2 text-[0.68rem] uppercase tracking-[0.16em] text-paper/50">
              Commercial office · Gulf
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
