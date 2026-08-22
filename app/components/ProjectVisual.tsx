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
      className="relative flex h-full min-h-[220px] overflow-hidden bg-[#F0F0F0]"
      role="img"
      aria-label={`${title} placeholder visual`}
    >
      <div className="absolute left-5 top-5 h-20 w-20 rounded-full border-4 border-black bg-[#D02020]" />
      <div className="absolute right-7 top-10 h-24 w-24 rotate-45 border-4 border-black bg-[#F0C020]" />
      <div className="absolute bottom-8 left-10 h-0 w-0 border-x-[46px] border-b-[82px] border-x-transparent border-b-[#1040C0]" />
      <div className="absolute bottom-5 right-5 border-4 border-black bg-white px-4 py-3 shadow-[6px_6px_0_0_#121212]">
        <p className="text-xs font-black uppercase tracking-[0.2em]">{categoryLabel}</p>
        <p className="mt-1 text-xl font-black uppercase leading-none">{title}</p>
      </div>
    </div>
  );
}
