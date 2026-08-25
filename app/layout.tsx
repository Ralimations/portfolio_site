import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ral Angelo Lluisma | AI Implementation & Automation Portfolio",
  description:
    "Ral Angelo Lluisma is a Computer Applications graduate building practical AI-assisted applications, automation workflows, dashboards, integrations, embedded systems, and software tools.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Ral Angelo Lluisma | AI Implementation & Automation Portfolio",
    description:
      "Project-first portfolio for AI implementation, automation, software systems, embedded / IoT work, and practical technical workflows.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ral Angelo Lluisma | AI Implementation & Automation Portfolio",
    description:
      "Project-first portfolio for AI implementation, automation, software systems, embedded / IoT work, and practical technical workflows.",
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
