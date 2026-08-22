import Link from "next/link";

type SectionLabelProps = {
  children: React.ReactNode;
  inverted?: boolean;
};

export function SectionLabel({ children, inverted = false }: SectionLabelProps) {
  return (
    <div
      className={[
        "inline-flex items-center gap-3 rounded-full border px-5 py-2",
        inverted
          ? "border-white/15 bg-white/10 text-white"
          : "border-[rgba(0,82,255,0.25)] bg-[rgba(0,82,255,0.06)] text-[var(--accent)]",
      ].join(" ")}
    >
      <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse-dot" />
      <span className="font-code text-xs uppercase tracking-[0.15em]">{children}</span>
    </div>
  );
}

type ActionLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
};

export function ActionLink({ href, children, variant = "primary", external = false }: ActionLinkProps) {
  const className = {
    primary:
      "gradient-surface text-white shadow-[var(--shadow-accent)] hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[var(--shadow-accent-lg)]",
    secondary:
      "border border-[var(--border)] bg-white text-[var(--foreground)] shadow-sm hover:-translate-y-0.5 hover:border-[rgba(0,82,255,0.35)] hover:bg-[var(--muted)] hover:shadow-lg",
    ghost: "text-[var(--muted-foreground)] hover:text-[var(--foreground)]",
  }[variant];

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className={[
          "group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.98]",
          className,
        ].join(" ")}
      >
        {children}
        <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
          -&gt;
        </span>
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={[
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.98]",
        className,
      ].join(" ")}
    >
      {children}
      <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
        -&gt;
      </span>
    </Link>
  );
}

export function AccentMark() {
  return (
    <span className="grid h-10 w-10 place-items-center rounded-2xl gradient-surface shadow-[var(--shadow-accent)]" aria-hidden="true">
      <span className="h-3 w-3 rounded-full bg-white" />
    </span>
  );
}
