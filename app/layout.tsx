import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://yourlawncare.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Your Lawn & Tree | Local Lawn Care & Tree Service",
    template: "%s | Your Lawn & Tree",
  },
  description:
    "Your local lawn care and tree service experts. Mowing, edging, fertilizing, tree trimming, tree removal, junk removal & more. Same-day service available. Call for a free quote.",
  keywords: [
    "lawn care",
    "lawn mowing",
    "tree trimming",
    "tree removal",
    "landscaping",
    "edging",
    "fertilizing lawn",
    "junk removal",
    "debris removal",
    "hedging",
    "permanent lighting",
    "lawn service",
    "affordable lawn care",
    "same day lawn service",
  ],
  authors: [{ name: "Your Lawn & Tree" }],
  creator: "Your Lawn & Tree",
  publisher: "Your Lawn & Tree",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Your Lawn & Tree",
    title: "Your Lawn & Tree | Local Lawn Care & Tree Service",
    description:
      "Your local lawn care and tree service experts. Mowing, edging, fertilizing, tree trimming, tree removal, junk removal & more. Same-day service available.",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Your Lawn & Tree — Local Lawn Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Lawn & Tree | Local Lawn Care & Tree Service",
    description:
      "Your local lawn care and tree service experts. Same-day service available. Call for a free quote.",
    images: ["/hero-bg.jpg"],
  },
  category: "Lawn Care & Landscaping",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE_URL,
  name: "Your Lawn & Tree",
  description:
    "Professional lawn care and tree services. Mowing, edging, fertilizing, tree trimming, tree removal, junk removal, debris disposal, hedging, and permanent lighting.",
  url: SITE_URL,
  telephone: "+10000000000",
  email: "info@yourlawncare.com",
  image: `${SITE_URL}/logo.webp`,
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Check, Credit Card",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "18:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Lawn Care & Tree Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lawn Mowing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Edging" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fertilizing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landscaping" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tree Trimming" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tree Removal" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Junk & Debris Removal" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Permanent Lighting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hedging" } },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
