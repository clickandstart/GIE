export type InsightBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "note"; text: string };

export type Insight = {
  slug: string;
  kicker: string;
  title: string;
  excerpt: string;
  readingTime: string;
  cover: string;
  blocks: InsightBlock[];
};

export const insights: Insight[] = [
  {
    slug: "sugar-read-by-specification",
    kicker: "Food raw materials",
    title: "Sugar, read by specification",
    excerpt:
      "ICUMSA 45, ICUMSA 150, VHP. Three names that decide the price of a cargo — and the three parameters worth checking before you sign.",
    readingTime: "4 min read",
    cover: "/images/food-grid.webp",
    blocks: [
      {
        type: "p",
        text: "Sugar is traded by grade, and the grade is not a marketing label: it is a set of measurable parameters. Buyers who understand them negotiate better; buyers who do not pay for reassurance they may not need.",
      },
      { type: "h2", text: "The number is a colour" },
      {
        type: "p",
        text: "The ICUMSA figure expresses colour, measured in ICUMSA units. A lower number means a whiter, more refined sugar; a higher number means a darker product with more residual molasses. This is why ICUMSA 45 — the refined white grade used in beverages, bakery and confectionery — sits at the top of the price scale, while ICUMSA 150 is a less refined white sugar used where colour is not critical.",
      },
      {
        type: "p",
        text: "VHP stands for very high polarization: a raw sugar, typically above 99% polarization, sold to refineries rather than to consumers. A VHP specification quoted with an ICUMSA range of 600 to 1200 is normal — raw sugar is expected to carry colour; the refinery removes it.",
      },
      { type: "h2", text: "What belongs in an enquiry" },
      {
        type: "list",
        items: [
          "Grade and ICUMSA value, with the tolerance you will accept.",
          "Polarisation, moisture, ash and SO₂ limits for the application.",
          "Packaging: 50 kg bags, big bags, or bulk in containers.",
          "Quantity per shipment and per month, with the delivery window.",
          "Destination port and the Incoterm you intend to contract on.",
          "Payment instrument and the documents your bank will require.",
        ],
      },
      { type: "h2", text: "The documentation is the product" },
      {
        type: "p",
        text: "For food-grade sugar, a certificate of analysis is not optional: it is the evidence behind the grade. It travels with the certificate of origin, the packing list, the health or phytosanitary certificate where required, and the bill of lading. A cargo that arrives without them is a cargo that waits — and storage, demurrage and interest are paid by someone.",
      },
      {
        type: "note",
        text: "A practical rule: agree the specification in writing before agreeing the price. Every grade can be met, and every grade can be missed, but only the written version is enforceable.",
      },
    ],
  },
  {
    slug: "ferrous-scrap-what-to-verify",
    kicker: "Industrial metals",
    title: "Ferrous scrap: what to verify before you commit",
    excerpt:
      "Grade, radiation, loading and price basis. The four checks that separate a workable scrap cargo from an expensive lesson.",
    readingTime: "5 min read",
    cover: "/images/materials.webp",
    blocks: [
      {
        type: "p",
        text: "Scrap is the most variable material in the metals book. Two cargoes can carry the same grade name and behave completely differently at the mill. The difference is rarely the steel — it is the preparation, the inspection and the paperwork.",
      },
      { type: "h2", text: "Start from the grade, not the price" },
      {
        type: "p",
        text: "Grade A scrap, heavy melting scrap and used or new rail are different products with different chemistry and different mill demand. Rail R50 and R65, for example, is a defined section with predictable length and hardness; it is not interchangeable with mixed heavy scrap. A supplier who quotes a price without a grade sheet has not quoted a product.",
      },
      { type: "h2", text: "The four checks" },
      {
        type: "list",
        items: [
          "Grade definition: dimensional limits, density, presence of non-ferrous material and prohibited items.",
          "Radiation: a certificate from a licensed surveyor, taken at loading, not at origin three weeks earlier.",
          "Loading supervision: independent inspection at the yard, with photographs and a loading report.",
          "Price basis: FOB, CFR or CIF, and the freight assumption behind it — a CFR price is only comparable if the vessel size and port are.",
        ],
      },
      { type: "h2", text: "Why the mill cares about preparation" },
      {
        type: "p",
        text: "A mill buys melting yield, not tonnage. Oversized pieces, excessive fines or contamination slow the charge and increase consumption. That is why the best-priced cargo is not always the cheapest per tonne: a poorly prepared one can cost more per tonne of usable metal.",
      },
      {
        type: "note",
        text: "Ask for the loading report and the surveyor's name before the vessel sails. After sailing, the only lever left is the letter of credit.",
      },
    ],
  },
  {
    slug: "documents-that-move-a-cargo",
    kicker: "Trade operations",
    title: "The documents that actually move a cargo",
    excerpt:
      "A bill of lading is not paperwork. It is title, contract and receipt in one page — and everything else is built around it.",
    readingTime: "5 min read",
    cover: "/images/logistics.webp",
    blocks: [
      {
        type: "p",
        text: "In commodity trade, the goods move on one schedule and the documents move on another. Most disputes are not about quality. They are about a document that did not match, or arrived after the vessel did.",
      },
      { type: "h2", text: "The core set" },
      {
        type: "list",
        items: [
          "Bill of lading: the carrier's receipt, the contract of carriage and, when issued to order, the document of title.",
          "Commercial invoice and packing list, consistent with the letter of credit to the character.",
          "Certificate of origin, often required for preferential duty or for sanitary clearance.",
          "Certificate of analysis for the specification, issued by the producer or an independent laboratory.",
          "Phytosanitary and fumigation certificates for agricultural cargoes.",
          "Insurance certificate, where the Incoterm places the risk with the seller.",
        ],
      },
      { type: "h2", text: "Incoterms decide who holds the risk" },
      {
        type: "p",
        text: "FOB places the cargo on board at the load port, and the buyer arranges the freight. CFR and CIF move the freight obligation to the seller, with CIF adding insurance. The three letters change who books the vessel, who pays for delays and who argues with the carrier — so they belong in the first conversation, not the last.",
      },
      { type: "h2", text: "The letter of credit is a document test" },
      {
        type: "p",
        text: "Banks pay against documents, not against goods. A discrepancy of one word — a port name, a tolerance, a signature — can hold a payment for weeks while the cargo sits at destination. The discipline is simple: draft the credit from the contract, and check every document against the credit before presentation, not after.",
      },
      {
        type: "note",
        text: "Our rule on every shipment: one owner for the document set, from drafting to presentation. When responsibility is shared, it is usually lost.",
      },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
