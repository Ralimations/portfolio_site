import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ral Angelo Lluisma | Technical Portfolio",
  description:
    "Ral Angelo Lluisma is a Computer Applications graduate and technical generalist working across software, web, mobile, AI/ML, automation, embedded systems, and technical documentation.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Ral Angelo Lluisma | Technical Portfolio",
    description:
      "Project-first portfolio for software, web, mobile, AI/ML, automation, embedded / IoT, QA, and technical systems work.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ral Angelo Lluisma | Technical Portfolio",
    description:
      "Project-first portfolio for software, web, mobile, AI/ML, automation, embedded / IoT, QA, and technical systems work.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
