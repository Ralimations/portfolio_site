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
        className="relative min-h-[320px] overflow-hidden border-4 border-black bg-[#F0F0F0] shadow-[8px_8px_0_0_#121212]"
        role="img"
        aria-label={`${title} project media placeholder`}
      >
        <div className="absolute left-8 top-8 h-28 w-28 rounded-full border-4 border-black bg-[#D02020]" />
        <div className="absolute right-10 top-12 h-32 w-32 rotate-45 border-4 border-black bg-[#F0C020]" />
        <div className="absolute bottom-10 left-12 h-0 w-0 border-x-[66px] border-b-[116px] border-x-transparent border-b-[#1040C0]" />
        <p className="absolute bottom-6 right-6 border-4 border-black bg-white px-5 py-4 text-xl font-black uppercase shadow-[6px_6px_0_0_#121212]">
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
      <div className="relative overflow-hidden border-4 border-black bg-white shadow-[8px_8px_0_0_#121212]">
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
              className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-black bg-[#F0C020] text-2xl font-black shadow-[4px_4px_0_0_#121212] transition active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              aria-label="Previous project image"
            >
              &lt;
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-black bg-[#F0C020] text-2xl font-black shadow-[4px_4px_0_0_#121212] transition active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              aria-label="Next project image"
            >
              &gt;
            </button>
          </div>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-black uppercase tracking-[0.18em]">{currentImage.name}</p>
        <p className="border-4 border-black bg-[#F0C020] px-3 py-2 text-sm font-black uppercase">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
}
