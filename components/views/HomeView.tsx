"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import TechnicalSignal from "@/components/TechnicalSignal";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import { projectRoutes } from "@/data/nav";

export default function HomeView() {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-content px-6 pt-16 pb-24 sm:pt-24 sm:pb-32">
        <p className="signal-label mb-6 text-signal animate-fade-up">{h.kicker}</p>
        <h1
          className="font-display text-5xl sm:text-7xl font-semibold tracking-tight text-ink animate-fade-up"
          style={{ animationDelay: "0.05s" }}
        >
          {h.title}
        </h1>
        <p
          className="mt-4 font-display text-xl sm:text-2xl text-signal animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          {h.tagline}
        </p>
        <p
          className="mt-6 max-w-xl text-base sm:text-lg text-mute leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          {h.lead}
        </p>

        <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <Button href="/about" variant="primary">
            {h.ctaPrimary}
          </Button>
          <Button href="/projects" variant="secondary">
            {h.ctaSecondary}
          </Button>
        </div>

        <div className="mt-6 animate-fade-up" style={{ animationDelay: "0.25s" }}>
          <Link href="/konfortech" className="inline-flex items-center gap-2 text-sm text-ember hover:underline">
            {h.ctaKonfortech} →
          </Link>
        </div>

        <div className="mt-20">
          <TechnicalSignal title={h.signalTitle} steps={h.signalSteps} />
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-t border-line bg-panel/40">
        <div className="mx-auto max-w-content px-6 py-24">
          <SectionHeader title={h.pillarsTitle} />
          <div className="grid gap-8 sm:grid-cols-3">
            {h.pillars.map((pillar) => (
              <div key={pillar.label} className="border-t-2 border-signal-dim pt-5">
                <h3 className="font-display text-lg text-ink">{pillar.label}</h3>
                <p className="mt-3 text-sm text-mute leading-relaxed">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="mx-auto max-w-content px-6 py-24">
        <div className="grid gap-10 sm:grid-cols-2 items-center">
          <div>
            <p className="signal-label mb-3 text-signal">{t.nav.about}</p>
            <h2 className="font-display text-3xl text-ink">{h.aboutTitle}</h2>
          </div>
          <div>
            <p className="text-mute leading-relaxed">{h.aboutText}</p>
            <div className="mt-6">
              <Button href="/about" variant="secondary">
                {h.aboutCta}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="border-t border-line bg-panel/40">
        <div className="mx-auto max-w-content px-6 py-24">
          <SectionHeader kicker={h.projectsTitle} title={t.projects.title} intro={h.projectsText} />
          <div className="grid gap-6 sm:grid-cols-3">
            {t.projects.items.map((project) => {
              const route = projectRoutes.find((r) => r.id === project.id);
              return (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  oneLiner={project.oneLiner}
                  status={project.status}
                  tech={project.tech}
                  href={route?.path ?? "/projects"}
                  statusLabel={t.projects.statusLabel}
                  cta={t.projects.readCase}
                />
              );
            })}
          </div>
          <div className="mt-10">
            <Button href="/projects" variant="secondary">
              {h.projectsCta}
            </Button>
          </div>
        </div>
      </section>

      {/* KONFORTECH PREVIEW */}
      <section className="mx-auto max-w-content px-6 py-24">
        <div className="bg-navy p-10 sm:p-14 relative overflow-hidden">
          <span className="signal-label text-ember">KONFORTECH BÉNIN</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl text-navy-ink max-w-lg">{h.konfortechText}</h2>
          <div className="mt-8">
            <Button href="/konfortech" variant="primary">
              {h.konfortechCta}
            </Button>
          </div>
        </div>
      </section>

      {/* VISION TEASER */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-content px-6 py-24 grid gap-10 sm:grid-cols-2 items-center">
          <div>
            <p className="signal-label mb-3 text-signal">{t.nav.vision}</p>
            <h2 className="font-display text-3xl text-ink">{h.visionTitle}</h2>
          </div>
          <div>
            <p className="text-mute leading-relaxed">{h.visionText}</p>
            <div className="mt-6">
              <Button href="/vision" variant="secondary">
                {h.visionCta}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-line bg-panel/40">
        <div className="mx-auto max-w-content px-6 py-24 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-ink">{h.finalTitle}</h2>
          <p className="mt-4 text-mute max-w-md mx-auto">{h.finalText}</p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="primary">
              {h.finalCta}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
