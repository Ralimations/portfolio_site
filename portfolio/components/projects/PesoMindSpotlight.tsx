"use client";

import Image from "next/image";
import { useState } from "react";
import { projects } from "@/data/projects";

const screenshots = [
  { name: "Home", src: "/projects/pesomind/screenshots/home.png" },
  { name: "Accounts", src: "/projects/pesomind/screenshots/accounts.png" },
  { name: "Activity", src: "/projects/pesomind/screenshots/activity.png" },
  { name: "Planning", src: "/projects/pesomind/screenshots/planning.png" },
  { name: "Insights", src: "/projects/pesomind/screenshots/insights.png" },
] as const;

export function PesoMindSpotlight() {
  const project = projects.find(item => item.id === "pesomind");
  const [activeIndex, setActiveIndex] = useState(0);

  if (!project?.downloadUrl || !project.downloadFileName || !project.downloadNote) return null;

  const screenshot = screenshots[activeIndex];
  const move = (direction: number) => {
    setActiveIndex(index => (index + direction + screenshots.length) % screenshots.length);
  };

  return <section className="peso-spotlight" aria-labelledby="peso-spotlight-title">
    <div className="peso-spotlight-inner">
      <div className="peso-spotlight-copy">
        <p className="eyebrow">MOBILE APP / {project.status}</p>
        <h2 id="peso-spotlight-title" className="sr-only">PesoMind</h2>
        <div className="peso-brand-panel">
          <Image src="/projects/pesomind/pesomind-horizontal.png" alt="PesoMind — Peace of mind for your money" width={2172} height={724} sizes="(max-width: 760px) 90vw, 620px" />
        </div>
        <p className="peso-spotlight-summary">{project.solution}</p>
        {project.features?.length ? <ul className="peso-feature-list" aria-label="PesoMind features">
          {project.features.map(feature => <li key={feature.title}>{feature.title}</li>)}
        </ul> : null}
        <a className="peso-download-button" href={project.downloadUrl} download={project.downloadFileName}>
          <span>Download APK</span><span aria-hidden="true">↓</span>
        </a>
        <p className="peso-download-note">{project.downloadNote}</p>
      </div>

      <div className="peso-carousel-panel" role="region" aria-roledescription="carousel" aria-label="PesoMind app screenshots">
        <div className="peso-carousel-header"><p className="eyebrow">APP SCREENSHOTS</p><span>{String(activeIndex + 1).padStart(2, "0")} / {String(screenshots.length).padStart(2, "0")}</span></div>
        <div className="peso-carousel-stage">
          <button className="peso-carousel-arrow peso-carousel-arrow--previous" type="button" aria-label="Previous screenshot" onClick={() => move(-1)}>
            <span aria-hidden="true">←</span>
          </button>
          <figure className="peso-carousel-figure" aria-live="polite">
            <div className="peso-screenshot-image">
              <Image src={screenshot.src} alt={`PesoMind ${screenshot.name} screen`} fill sizes="(max-width: 760px) 66vw, 300px" />
            </div>
            <figcaption>{screenshot.name}</figcaption>
          </figure>
          <button className="peso-carousel-arrow peso-carousel-arrow--next" type="button" aria-label="Next screenshot" onClick={() => move(1)}>
            <span aria-hidden="true">→</span>
          </button>
        </div>
        <div className="peso-carousel-dots" role="group" aria-label="Choose a screenshot">
          {screenshots.map((item, index) => <button
            key={item.name}
            type="button"
            aria-label={`Show ${item.name} screenshot`}
            aria-pressed={index === activeIndex}
            className={index === activeIndex ? "is-active" : ""}
            onClick={() => setActiveIndex(index)}
          />)}
        </div>
      </div>
    </div>
  </section>;
}
