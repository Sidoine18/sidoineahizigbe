"use client";

import { useLanguage } from "@/lib/i18n";
import TechnicalSignal from "@/components/TechnicalSignal";

export default function ColdTrackPage() {
  const { t } = useLanguage();
  const c = t.coldtrack;

  return (
    <section className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <p className="signal-label mb-3 text-signal">{c.kicker}</p>
      <h1 className="font-display text-4xl sm:text-5xl text-ink">{c.title}</h1>
      <p className="mt-3 text-lg text-mute">{c.tagline}</p>
      <p className="mt-4 signal-label text-faint">
        {t.projects.statusLabel} · <span className="text-mute">{c.status}</span>
      </p>

      <div className="mt-16 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="signal-label mb-3 text-signal">{c.problemTitle}</h2>
          <p className="text-mute leading-relaxed">{c.problem}</p>
        </div>
        <div>
          <h2 className="signal-label mb-3 text-signal">{c.approachTitle}</h2>
          <p className="text-mute leading-relaxed">{c.approach}</p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="signal-label mb-6 text-faint">{c.pipelineTitle}</h2>
        <TechnicalSignal steps={c.pipeline} dense />
      </div>

      <div className="mt-16 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="signal-label mb-3 text-faint">{c.techTitle}</h2>
          <ul className="space-y-2">
            {c.tech.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-mute">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal-dim" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="signal-label mb-3 text-faint">{c.solutionTitle}</h2>
          <p className="text-mute leading-relaxed">{c.solution}</p>
        </div>
      </div>

      <div className="mt-16 border border-line p-8">
        <h2 className="signal-label mb-4 text-ember">{c.futureTitle}</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {c.future.map((item) => (
            <li key={item} className="text-sm text-mute">
              → {item}
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-10 text-xs text-faint italic max-w-xl">{c.stateNote}</p>
    </section>
  );
}
