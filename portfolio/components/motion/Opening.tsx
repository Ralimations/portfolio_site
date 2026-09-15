"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
import { LetsTalk } from "@/components/navigation/LetsTalk";

const QUERY = "I need a solution to a problem!";
type Phase = "idle" | "typing" | "submit" | "leaving";

export function Opening() {
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");
  const [query, setQuery] = useState("");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const started = useRef(false);
  const input = useRef<HTMLInputElement>(null);
  const opening = useRef<HTMLElement>(null);
  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  const enter = useCallback(() => {
    clearTimers();
    setPhase("leaving");
    try { sessionStorage.setItem("ral-intro-seen", "yes"); } catch { /* Storage is optional. */ }
    const content = document.getElementById("portfolio-content");
    if (content) { content.inert = false; content.classList.add("arriving"); }
    document.documentElement.classList.remove("intro-open");
    document.getElementById("main")?.focus({ preventScroll: true });
    timers.current.push(setTimeout(() => { setVisible(false); content?.classList.remove("arriving"); }, 750));
  }, [clearTimers]);

  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    let seen = false;
    try { seen = sessionStorage.getItem("ral-intro-seen") === "yes"; } catch { /* No storage required. */ }
    if (seen || location.hash || reduce.matches) return;
    const frame = requestAnimationFrame(() => {
      setVisible(true);
      const content = document.getElementById("portfolio-content");
      if (content) content.inert = true;
      document.documentElement.classList.add("intro-open");
    });
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !document.querySelector('[data-slot="popover-content"][data-state="open"]')) enter();
    };
    const preference = () => { if (reduce.matches) enter(); };
    document.addEventListener("keydown", escape);
    reduce.addEventListener("change", preference);
    return () => {
      cancelAnimationFrame(frame); clearTimers();
      document.removeEventListener("keydown", escape); reduce.removeEventListener("change", preference);
      document.documentElement.classList.remove("intro-open");
      const content = document.getElementById("portfolio-content");
      if (content) content.inert = false;
    };
  }, [clearTimers, enter]);

  useEffect(() => {
    if (visible && phase === "idle") opening.current?.focus({ preventScroll: true });
  }, [visible, phase]);

  function start() {
    if (started.current) return;
    started.current = true;
    setPhase("typing");
    let delay = 220;
    for (let i = 1; i <= QUERY.length; i++) {
      delay += QUERY[i - 1] === " " ? 48 : 21 + (i % 3) * 8;
      timers.current.push(setTimeout(() => setQuery(QUERY.slice(0, i)), delay));
    }
    timers.current.push(setTimeout(() => setPhase("submit"), delay + 90));
    timers.current.push(setTimeout(enter, delay + 650));
  }

  if (!visible) return null;
  return <section ref={opening} tabIndex={-1} inert={phase === "leaving"} aria-hidden={phase === "leaving"} className={`opening ${phase}`} aria-label="Find a solution, portfolio introduction">
    <div className="opening-top"><span className="wordmark" aria-label={profile.siteName}>solutionsby<span>ral</span></span><LetsTalk /></div>
    <div className="opening-search">
      <p className="eyebrow">A GOOD PROJECT STARTS WITH A QUESTION.</p>
      <form onSubmit={e => { e.preventDefault(); enter(); }} className="search-form">
        <label htmlFor="solution-query" className="sr-only">What do you need to solve?</label>
        <svg className="search-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></svg>
        <input ref={input} id="solution-query" autoComplete="off" placeholder="Find a solution…" value={query} onFocus={start} onChange={e => { clearTimers(); setQuery(e.target.value); setPhase("submit"); }} />
        <button className="search-submit" type="submit" aria-label="Open portfolio">↗</button>
        <svg className="demo-pointer" width="26" height="32" viewBox="0 0 26 32" aria-hidden="true"><path d="M2 2v24l7-7 5 11 5-2-5-11h10Z" fill="var(--accent)" stroke="var(--bg)" strokeWidth="2" /></svg>
      </form>
      <p className="sr-only" role="status">{phase === "submit" ? "Opening Ral Angelo Lluisma’s portfolio." : ""}</p>
    </div>
    <div className="opening-bottom"><span>SOFTWARE × HARDWARE × PEOPLE</span><button type="button" onClick={enter}>Skip to portfolio <span>→</span></button></div>
  </section>;
}
