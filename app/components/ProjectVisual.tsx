import type { ProjectMedia } from "@/app/lib/project-assets";

/* eslint-disable @next/next/no-img-element */

type ProjectVisualProps = {
  media: ProjectMedia;
  title: string;
  categoryLabel: string;
  priority?: boolean;
};

export function ProjectVisual({ media, title, categoryLabel, priority = false }: ProjectVisualProps) {
  if (media.cover) {
    return (
      <img
        src={media.cover.src}
        alt={media.cover.alt}
        loading={priority ? "eager" : "lazy"}
        className="h-full w-full object-cover grayscale transition duration-200 group-hover:grayscale-0"
      />
    );
  }

  return (
    <div
      className="relative flex h-full min-h-[220px] overflow-hidden bg-[var(--muted)]"
      role="img"
      aria-label={`${title} placeholder visual`}
    >
      <div className="absolute -left-12 top-8 h-40 w-40 rounded-full bg-[rgba(0,82,255,0.12)] blur-2xl" />
      <div className="absolute right-8 top-8 h-28 w-28 rounded-[2rem] gradient-surface opacity-90 shadow-[var(--shadow-accent)]" />
      <div className="absolute bottom-9 left-9 h-32 w-32 rounded-full border border-dashed border-[rgba(0,82,255,0.35)] animate-rotate-slow" />
      <div className="absolute bottom-5 right-5 rounded-2xl border border-[var(--border)] bg-white/90 px-4 py-3 shadow-lg backdrop-blur">
        <p className="font-code text-xs uppercase tracking-[0.15em] text-[var(--accent)]">{categoryLabel}</p>
        <p className="mt-1 text-xl font-semibold tracking-[-0.02em]">{title}</p>
      </div>
    </div>
  );
}
