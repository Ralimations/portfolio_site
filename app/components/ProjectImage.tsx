"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

type Props = { src: string; alt: string; className?: string; priority?: boolean };

export function ProjectImage({ src, alt, className, priority = false }: Props) {
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  if (failed) {
    return (
      <div className="media-error" role="status">
        <strong>Image unavailable</strong>
        <p>{alt}. This image could not be loaded.</p>
        <button type="button" className="neo-control" onClick={() => { setAttempt(attempt + 1); setFailed(false); }}>Retry image</button>
      </div>
    );
  }
  return <img key={attempt} src={src} alt={alt} className={className} loading={priority ? "eager" : "lazy"} onError={() => setFailed(true)} />;
}
