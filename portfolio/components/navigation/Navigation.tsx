"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { LetsTalk } from "./LetsTalk";

export function ContactLinks({ compact = false }: { compact?: boolean }) {
  return <div className={compact ? "contact-links compact" : "contact-links"}>
    <a href={`mailto:${profile.email}`}>Email <span>↗</span></a>
    <a href={profile.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
    <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
    <a href={profile.resume} target="_blank" rel="noreferrer">Résumé <span>↗</span></a>
  </div>;
}

export function Navigation() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: "-15% 0px -55% 0px" });
    document.querySelectorAll("main section[id]").forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <Link className="wordmark" href="/#main" aria-label={`${profile.siteName}, home`}>solutionsby<span>ral</span></Link>
      <nav aria-label="Main navigation">{["projects", "stack", "about", "contact"].map(id => <Link key={id} href={`/#${id}`} aria-current={active === id ? "location" : undefined}>{id}</Link>)}</nav>
      <LetsTalk className="header-email" />
    </header>
    <aside className="contact-rail" aria-label="Contact and profiles"><ContactLinks compact /></aside>
  </>;
}
