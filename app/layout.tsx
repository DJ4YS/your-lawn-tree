import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://sombrero-lawn-tree.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sombrero Lawn & Tree | San Antonio Lawn Care & Tree Service",
    template: "%s | Sombrero Lawn & Tree",
  },
  description:
    "San Antonio's trusted lawn care and tree service. Mowing, edging, fertilizing, tree trimming, tree removal, junk removal & more. Same-day service available. Call 210-878-5845 for a free quote.",
  keywords: [
    "lawn care San Antonio",
    "lawn mowing San Antonio TX",
    "tree trimming San Antonio",
    "tree removal San Antonio",
    "landscaping San Antonio",
    "edging San Antonio",
    "fertilizing lawn San Antonio",
    "junk removal San Antonio",
    "debris removal San Antonio",
    "hedging San Antonio",
    "permanent lighting San Antonio",
    "lawn service San Antonio",
    "Sombrero Lawn and Tree",
    "affordable lawn care TX",
    "same day lawn service San Antonio",
  ],
  authors: [{ name: "Sombrero Lawn & Tree" }],
  creator: "Sombrero Lawn & Tree",
  publisher: "Sombrero Lawn & Tree",
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
    siteName: "Sombrero Lawn & Tree",
    title: "Sombrero Lawn & Tree | San Antonio Lawn Care & Tree Service",
    description:
      "San Antonio's trusted lawn care and tree service. Mowing, edging, fertilizing, tree trimming, tree removal, junk removal & more. Same-day service available. Call 210-878-5845.",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Sombrero Lawn & Tree — San Antonio Lawn Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sombrero Lawn & Tree | San Antonio Lawn Care & Tree Service",
    description:
      "San Antonio's trusted lawn care and tree service. Same-day service available. Call 210-878-5845 for a free quote.",
    images: ["/hero-bg.jpg"],
  },
  category: "Lawn Care & Landscaping",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE_URL,
  name: "Sombrero Lawn & Tree",
  description:
    "Professional lawn care and tree services in San Antonio, TX. Mowing, edging, fertilizing, tree trimming, tree removal, junk removal, debris disposal, hedging, and permanent lighting.",
  url: SITE_URL,
  telephone: "+12108785845",
  email: "sombrerolawnandtree@gmail.com",
  image: `${SITE_URL}/logo.webp`,
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Check, Credit Card",
  areaServed: {
    "@type": "City",
    name: "San Antonio",
    sameAs: "https://en.wikipedia.org/wiki/San_Antonio",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Antonio",
    addressRegion: "TX",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.4241,
    longitude: -98.4936,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "18:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "40",
    bestRating: "5",
    worstRating: "1",
  },
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
  sameAs: [
    "https://www.facebook.com/sombrerolawn",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="San Antonio" />
        <meta name="geo.position" content="29.4241;-98.4936" />
        <meta name="ICBM" content="29.4241, -98.4936" />
      </head>
      <body>{children}</body>
    </html>
  );
}
