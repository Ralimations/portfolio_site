import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ral Angelo Lluisma | Portfolio",
  description:
    "A Bauhaus-inspired portfolio backbone for front-end, data, automation, and coding support work.",
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
      <body>{children}</body>
    </html>
  );
}
