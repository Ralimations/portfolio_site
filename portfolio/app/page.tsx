import { profile, skillGroups } from "@/data/profile";
import { ContactLinks, Navigation } from "@/components/navigation/Navigation";
import { Projects } from "@/components/projects/Projects";
import { Opening } from "@/components/motion/Opening";
import { Environment } from "@/components/motion/Environment";

export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return <><Environment /><Opening /><div id="portfolio-content"><Navigation />
    <main id="main" tabIndex={-1}>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-top"><p className="eyebrow">RAL ANGELO LLUISMA</p><p className="eyebrow hero-location">ILIGAN CITY, PHILIPPINES</p></div>
        <p className="hero-role">Embedded & IoT <span>/</span> AI & computer vision <span>/</span> Software</p>
        <h1 id="hero-title">Software.<br />Hardware.<br /><span className="accent">Useful systems.</span></h1>
        <div className="hero-bottom"><p>I connect software, hardware, and AI<br className="desktop-break" /> to solve problems beyond the screen.</p><div className="hero-actions"><a className="text-link primary" href="#projects">View projects <span>↓</span></a><a className="text-link" href={profile.resume} target="_blank" rel="noreferrer">Résumé <span>↗</span></a></div></div>
        <div className="hero-footer"><span>COMPUTER APPLICATIONS GRADUATE · 2026</span><div><a href={profile.github} target="_blank" rel="noreferrer">GITHUB ↗</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LINKEDIN ↗</a></div><span className="scroll-caption">EXPLORE THE WORK ↓</span></div>
      </section>
      <Projects />
      <section id="stack" className="section stack"><p className="eyebrow"><span>02 /</span> TOOLS WITH A PURPOSE</p><div className="section-title-row"><h2>Across the stack.<br /><span className="muted">Close to the problem.</span></h2><p>From a sensor’s signal to the interface<br />someone actually uses.</p></div>
        <div className="skill-groups">{skillGroups.map((group, i) => <div key={group.title}><span className="skill-number">0{i + 1}</span><h3>{group.title}</h3><ul>{group.items.map(skill => <li key={skill}>{skill}</li>)}</ul></div>)}</div>
      </section>
      <section id="about" className="section about"><p className="eyebrow"><span>03 /</span> THE PERSON BEHIND THE WORK</p><div className="about-grid"><h2>Curious across<br />disciplines.<br /><span className="muted">Practical by nature.</span></h2><div className="about-copy">
        <p>I’m Ral, a Computer Applications graduate from MSU–IIT, with a focus on IoT, embedded systems, firmware, and data communication.</p>
        <p>My work connects physical systems with software: from posture feedback with computer vision to tools for a creator’s publishing workflow.</p>
        <p>During my front-end internship at MELD CX, I worked on interfaces and supported local AI and computer-vision experiments. Outside software, I create music and animation as Ralskies. That background shapes how I think about timing, clarity, and the person using what I build.</p>
        <div className="about-fact"><span>EDUCATION</span><p>{profile.education}</p></div><div className="about-fact"><span>THESIS</span><p>AutoMatTsek — a modular IoT-based on-shelf stock monitoring and pricing display system.</p></div><a className="text-link" href={profile.resume} target="_blank" rel="noreferrer">The full story, in my CV <span>↗</span></a>
      </div></div></section>
      <section id="contact" className="section contact"><p className="eyebrow"><span>04 /</span> LET’S BUILD SOMETHING USEFUL</p><h2>Have a problem<br />worth <a href={`mailto:${profile.email}`}>solving<span>↗</span></a>?</h2><div className="contact-bottom"><a className="email-address" href={`mailto:${profile.email}`}>{profile.email}</a><p>Early-career developer.<br />Ready for the next useful challenge.</p></div><ContactLinks /></section>
    </main><footer className="site-footer"><span>© {new Date().getFullYear()} Ral Angelo Lluisma</span><span>SOFTWARE × HARDWARE × PEOPLE</span><a href="#main">Back to top ↑</a></footer>
  </div></>;
}
