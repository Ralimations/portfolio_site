"use client";

import { useRef, useState } from "react";
import { ProjectImage } from "@/app/components/ProjectImage";
import type { ProjectImage as ProjectImageData } from "@/app/lib/project-assets";

type ProjectCarouselProps = {
  images: ProjectImageData[];
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
    return <div className="inset-panel grid min-h-[320px] content-center gap-3 rounded-[2rem] p-8 text-center"><p className="text-xl font-semibold">Project gallery</p><p className="text-[var(--muted-foreground)]">Images for {title} are not available yet.</p></div>;
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
        <ProjectImage
          key={currentImage.src}
          src={currentImage.src}
          alt={currentImage.alt}
          className="aspect-[16/10] w-full object-cover"
          priority
        />

      </div>
      <div className="flex items-center justify-between gap-3" aria-label="Gallery controls">
        <button type="button" onClick={goToPrevious} disabled={!hasMultipleImages} className="neo-control" aria-label="Previous project image">← <span className="hidden sm:inline">Previous</span></button>
        <p role="status" className="text-sm text-[var(--muted-foreground)]">Image {currentIndex + 1} of {images.length}</p>
        <button type="button" onClick={goToNext} disabled={!hasMultipleImages} className="neo-control" aria-label="Next project image"><span className="hidden sm:inline">Next</span> →</button>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-code text-xs uppercase tracking-[0.15em] text-[var(--muted-foreground)]">{currentImage.name}</p>
        <p className="font-code rounded-full border border-[var(--border)] bg-[var(--muted)] px-3 py-2 text-xs uppercase tracking-[0.12em] text-[var(--accent)]">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
}
