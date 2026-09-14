import Link from "next/link";
import { profile } from "@/app/data/profile";

type SectionLabelProps = {
  children: React.ReactNode;
  inverted?: boolean;
};

export function SectionLabel({ children, inverted = false }: SectionLabelProps) {
  return <div className="section-label" data-inverted={inverted || undefined}>{children}</div>;
}

type ActionLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
};

export function ActionLink({ href, children, variant = "primary", external = false }: ActionLinkProps) {
  const className = `action-link ${variant}`;
  const content = <>{children}<span aria-hidden="true">{external ? "↗" : "→"}</span></>;
  return external ? (
    <a href={href} target="_blank" rel="noreferrer noopener" className={className}>{content}</a>
  ) : (
    <Link href={href} className={className}>{content}</Link>
  );
}

export function AccentMark() {
  return <span className="brand-mark" aria-hidden="true">rl.</span>;
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-[var(--muted-foreground)] sm:flex-row sm:items-center sm:justify-between">
        <p>Ral Angelo Lluisma portfolio</p>
        <div className="flex flex-wrap gap-4 font-medium">
          {profile.email ? (
            <a className="transition hover:text-[var(--foreground)]" href={`mailto:${profile.email}`}>
              Email
            </a>
          ) : null}
          <a className="transition hover:text-[var(--foreground)]" href={profile.githubUrl} target="_blank" rel="noreferrer noopener">
            GitHub
          </a>
          <a className="transition hover:text-[var(--foreground)]" href={profile.linkedInUrl} target="_blank" rel="noreferrer noopener">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
