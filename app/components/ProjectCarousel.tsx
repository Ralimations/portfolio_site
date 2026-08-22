"use client";

/* eslint-disable @next/next/no-img-element */

import { useRef, useState } from "react";
import type { ProjectImage } from "@/app/lib/project-assets";

type ProjectCarouselProps = {
  images: ProjectImage[];
  title: string;
};

export function ProjectCarousel({ images, title }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const hasMultipleImages = images.length > 1;
  const currentImage = images[currentIndex];

  function goToPrevious() {
    setCurrentIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  }

  function goToNext() {
    setCurrentIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  }

  if (!currentImage) {
    return (
      <div
        className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--muted)] shadow-[var(--shadow-card)]"
        role="img"
        aria-label={`${title} project media placeholder`}
      >
        <div className="absolute left-8 top-8 h-32 w-32 rounded-full bg-[rgba(0,82,255,0.12)] blur-2xl" />
        <div className="absolute right-10 top-12 h-32 w-32 rounded-[2rem] gradient-surface shadow-[var(--shadow-accent)]" />
        <div className="absolute bottom-10 left-12 h-40 w-40 rounded-full border border-dashed border-[rgba(0,82,255,0.35)] animate-rotate-slow" />
        <p className="absolute bottom-6 right-6 rounded-2xl border border-[var(--border)] bg-white px-5 py-4 text-xl font-semibold shadow-lg">
          Media pending
        </p>
      </div>
    );
  }

  return (
    <div
      className="space-y-4"
      role="group"
      aria-label={`${title} media carousel`}
      onTouchStart={(event) => {
        touchStartX.current = event.changedTouches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        if (!hasMultipleImages || touchStartX.current === null) {
          return;
        }

        const delta = (event.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current;

        if (Math.abs(delta) > 40) {
          if (delta > 0) {
            goToPrevious();
          } else {
            goToNext();
          }
        }

        touchStartX.current = null;
      }}
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white shadow-[var(--shadow-card)]">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="aspect-[16/10] w-full object-cover"
          loading="eager"
        />

        {hasMultipleImages ? (
          <div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 justify-between">
            <button
              type="button"
              onClick={goToPrevious}
              className="grid h-12 w-12 place-items-center rounded-full bg-white/90 text-xl font-semibold text-[var(--accent)] shadow-lg backdrop-blur transition hover:-translate-y-0.5 active:scale-[0.98]"
              aria-label="Previous project image"
            >
              &lt;
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="grid h-12 w-12 place-items-center rounded-full bg-white/90 text-xl font-semibold text-[var(--accent)] shadow-lg backdrop-blur transition hover:-translate-y-0.5 active:scale-[0.98]"
              aria-label="Next project image"
            >
              &gt;
            </button>
          </div>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-code text-xs uppercase tracking-[0.15em] text-[var(--muted-foreground)]">{currentImage.name}</p>
        <p className="font-code rounded-full border border-[rgba(0,82,255,0.18)] bg-[rgba(0,82,255,0.06)] px-3 py-2 text-xs uppercase tracking-[0.12em] text-[var(--accent)]">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
}
