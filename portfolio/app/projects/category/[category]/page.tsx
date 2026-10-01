import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projectCategories } from "@/data/categories";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { Navigation } from "@/components/navigation/Navigation";
import { Environment } from "@/components/motion/Environment";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function generateStaticParams() {
  return projectCategories.map(category => ({ category: category.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: id } = await params;
  const category = projectCategories.find(item => item.id === id);
  return {
    title: `${category?.title ?? "Category not found"} — ${profile.siteName}`,
    description: category?.description,
    alternates: { canonical: `/projects/category/${id}` },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: id } = await params;
  const category = projectCategories.find(item => item.id === id);
  if (!category) notFound();
  const members = projects.filter(project => project.categoryIds.includes(category.id)).sort((a, b) => Number(Boolean(b.demo)) - Number(Boolean(a.demo)));
  return <><Environment /><Navigation /><main id="main" tabIndex={-1} className="category-page">
    <Link href="/#categories" className="text-link back-link">← All categories</Link>
    <header className="case-header"><p className="eyebrow">PROJECT CATEGORY / {members.length} {members.length === 1 ? "PROJECT" : "PROJECTS"}</p><h1>{category.title}</h1><p className="case-summary">{category.description}</p></header>
    <nav className="category-nav" aria-label="Project categories">{projectCategories.map(item => <Link key={item.id} href={`/projects/category/${item.id}`} aria-current={item.id === category.id ? "page" : undefined}>{item.label}</Link>)}</nav>
    <div className="catalog-grid">{members.map(project => <ProjectCard key={project.id} project={project} />)}</div>
  </main></>;
}
