"use client";

import { Download } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import SectionHeader from "@/components/SectionHeader";

const CV_PATH = "/documents/cv-sidoine-ahizigbe.pdf";

export default function CvView() {
  const { t } = useLanguage();
  const cv = t.cv;

  return (
    <section className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <SectionHeader kicker={cv.kicker} title={cv.title} />

      <a
        href={CV_PATH}
        download
        className="inline-flex items-center gap-2 border border-signal bg-signal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-signal/90"
      >
        <Download size={16} />
        {cv.download}
      </a>
      <p className="mt-3 signal-label text-faint">{cv.downloadNote}</p>

      {/* Formation académique */}
      <div className="mt-16">
        <p className="signal-label mb-8 text-faint">{cv.sections.formation}</p>
        <div className="relative border-l border-line pl-8">
          {cv.formation.map((item, i) => (
            <div key={i} className="relative pb-8 last:pb-0">
              <span className="absolute -left-[calc(2rem+3.5px)] top-1.5 h-2 w-2 rounded-full bg-signal" />
              <p className="signal-label text-signal">{item.period}</p>
              <h3 className="mt-2 font-display text-lg text-ink">{item.title}</h3>
              <p className="mt-1 text-sm text-faint">{item.place}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Langues */}
      <div className="mt-16">
        <p className="signal-label mb-6 text-faint">{cv.sections.languages}</p>
        <div className="grid gap-3 sm:grid-cols-3">
          {cv.languages.map((lang) => (
            <div key={lang.name} className="border border-line p-4">
              <p className="text-ink text-sm">{lang.name}</p>
              <p className="mt-1 signal-label text-faint">{lang.level}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Compétences (issues des 4 domaines d'expertise) */}
      <div className="mt-16">
        <p className="signal-label mb-6 text-faint">{cv.sections.skills}</p>
        <div className="grid gap-6 sm:grid-cols-2">
          {t.expertise.items.map((item) => (
            <div key={item.num} className="border border-line p-6">
              <p className="signal-label text-signal">
                {item.num} — {item.title}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {item.points.map((p) => (
                  <li key={p} className="signal-label border border-line px-2 py-1 text-mute">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Certificats & formations */}
      <div className="mt-16">
        <p className="signal-label mb-6 text-faint">{cv.sections.certificates}</p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {cv.certificates.map((c) => (
            <li key={c} className="flex items-start gap-2 text-sm text-mute">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal-dim" />
              {c}
            </li>
          ))}
        </ul>
      </div>

      {/* Projets */}
      <div className="mt-16">
        <p className="signal-label mb-6 text-faint">{cv.sections.projects}</p>
        <ul className="space-y-3">
          {t.projects.items.map((p) => (
            <li key={p.id} className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-3">
              <span className="text-ink">{p.title}</span>
              <span className="signal-label text-faint">{p.status}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Centres d'intérêt */}
      <div className="mt-16">
        <p className="signal-label mb-4 text-faint">{cv.sections.interests}</p>
        <div className="flex flex-wrap gap-2">
          {cv.interests.map((i) => (
            <span key={i} className="signal-label border border-line px-3 py-1.5 text-mute">
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
