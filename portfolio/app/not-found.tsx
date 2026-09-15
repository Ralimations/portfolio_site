import Link from "next/link";
export default function NotFound() {
  return <main className="not-found"><p className="eyebrow">404 / NO MATCH</p><h1>This page<br />isn’t here.</h1><Link className="text-link" href="/#projects">Explore the projects →</Link></main>;
}
