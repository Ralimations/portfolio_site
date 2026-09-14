import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ral Angelo Lluisma | Technical Portfolio",
  description:
    "Ral Angelo Lluisma is a Computer Applications graduate and technical generalist working across software, web, mobile, AI/ML, automation, embedded systems, and technical documentation, with front-end internship experience at MELD CX.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Ral Angelo Lluisma | Technical Portfolio",
    description:
      "Explore Ral Angelo Lluisma’s work in front-end development, creator tools, local AI, automation, IoT, and hardware.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ral Angelo Lluisma | Technical Portfolio",
    description:
      "Explore Ral Angelo Lluisma’s work in front-end development, creator tools, local AI, automation, IoT, and hardware.",
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
