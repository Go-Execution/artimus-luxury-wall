import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DRIP ATX — Luxury Painting & Architectural Finishes",
  description:
    "Venetian plaster, limewash, specialty finishes and elevated painting for distinctive Austin interiors.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
