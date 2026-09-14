import type { ProjectMedia } from "@/app/lib/project-assets";
import { ProjectImage } from "@/app/components/ProjectImage";

type ProjectVisualProps = {
  media: ProjectMedia;
  title: string;
  categoryLabel: string;
  priority?: boolean;
};

export function ProjectVisual({ media, title, categoryLabel, priority = false }: ProjectVisualProps) {
  if (media.cover) {
    return <ProjectImage src={media.cover.src} alt={media.cover.alt} priority={priority} className="h-full w-full object-cover" />;
  }
  return (
    <div className="project-preview" aria-label={`${title}: preview images not yet available`}>
      <div className="flex items-start justify-between gap-4">
        <span className="preview-code" aria-hidden="true">&lt;/&gt;</span>
        <span className="preview-caption">{categoryLabel}</span>
      </div>
      <div><p className="text-xl font-semibold leading-snug">{title}</p><p className="mt-3 text-xs text-[var(--muted-foreground)]">Project notes & implementation</p></div>
    </div>
  );
}
