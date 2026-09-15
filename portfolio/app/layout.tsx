import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:5173");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ral Angelo Lluisma — Software, Hardware & Useful Systems",
  description: "Computer Applications graduate building practical systems with embedded technology, computer vision, AI, and software. Explore Ral’s projects and engineering decisions.",
  openGraph: {
    type: "website",
    title: "Ral Angelo Lluisma — Useful Systems",
    description: "Software. Hardware. Useful systems. Explore projects in computer vision, workflow automation, and local AI.",
    images: [{ url: "/social-preview.png", width: 1200, height: 630, alt: "Ral Angelo Lluisma — Software. Hardware. Useful systems." }],
  },
  twitter: { card: "summary_large_image", images: ["/social-preview.png"] },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
