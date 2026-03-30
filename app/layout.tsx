import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sombrero Lawn & Tree | San Antonio Lawn Care",
  description:
    "Professional lawn care and tree services in San Antonio, TX. Mowing, edging, fertilizing, and landscaping. Call us at 210-878-5845 for a free quote.",
  keywords:
    "lawn care San Antonio, mowing San Antonio, landscaping San Antonio, tree service TX, Sombrero Lawn & Tree",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
