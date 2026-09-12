"use client";

import { useLanguage } from "@/lib/i18n";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { projectRoutes } from "@/data/nav";

export default function ProjectsView() {
  const { t } = useLanguage();
  const p = t.projects;

  return (
    <section className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <SectionHeader kicker={p.kicker} title={p.title} intro={p.intro} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {p.items.map((project) => {
          const route = projectRoutes.find((r) => r.id === project.id);
          return (
            <ProjectCard
              key={project.id}
              title={project.title}
              oneLiner={project.oneLiner}
              status={project.status}
              tech={project.tech}
              href={route?.path ?? "/projects"}
              statusLabel={p.statusLabel}
              cta={p.readCase}
            />
          );
        })}
      </div>
    </section>
  );
}
