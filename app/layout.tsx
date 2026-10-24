import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";

const archivo = localFont({
  src: "./fonts/archivo-var.woff2",
  weight: "400 700",
  variable: "--font-archivo",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/inter-var.woff2",
  weight: "300 600",
  variable: "--font-inter",
  display: "swap",
});

const instrument = localFont({
  src: [
    { path: "./fonts/instrument-serif.woff2", weight: "400", style: "normal" },
    { path: "./fonts/instrument-serif-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "GIE Holding — Commodities, industry and new ventures",
    template: "%s | GIE Holding",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "GIE Holding",
    "Gürsel Import Export",
    "commodities trading",
    "raw materials",
    "sugar ICUMSA 45",
    "copper cathodes",
    "ferrous scrap",
    "food raw materials",
    "Istanbul holding company",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    siteName: site.name,
    title: "GIE Holding",
    description: site.description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "GIE Holding" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GIE Holding",
    description: site.description,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a1c23",
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: site.legalName,
  alternateName: "GIE",
  url: site.url,
  email: site.email,
  foundingDate: "1938",
  description: site.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tomtom Mahallesi, İstiklal Caddesi, Beyoğlu No. 187 K2",
    addressLocality: "Istanbul",
    addressCountry: "TR",
  },
  contactPoint: site.phones.map((phone) => ({
    "@type": "ContactPoint",
    telephone: phone.value,
    contactType: "sales",
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable} ${instrument.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
      </body>
    </html>
  );
}
