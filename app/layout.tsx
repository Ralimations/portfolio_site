import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ral Angelo Lluisma | Portfolio",
  description:
    "A Bauhaus-inspired developer portfolio for embedded systems, IoT, AI experiments, web work, mobile flows, and software tools.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Ral Angelo Lluisma | Portfolio",
    description:
      "Project-first portfolio for embedded systems, IoT, AI experiments, web work, mobile flows, and software tools.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ral Angelo Lluisma | Portfolio",
    description:
      "Project-first portfolio for embedded systems, IoT, AI experiments, web work, mobile flows, and software tools.",
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
