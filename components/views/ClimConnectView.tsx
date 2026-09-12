"use client";

import { useLanguage } from "@/lib/i18n";
import TechnicalSignal from "@/components/TechnicalSignal";

export default function ClimConnectView() {
  const { t } = useLanguage();
  const c = t.climconnect;

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
        <h2 className="signal-label mb-6 text-faint">{c.techTitle}</h2>
        <TechnicalSignal steps={c.tech} dense />
      </div>

      <div className="mt-16">
        <h2 className="signal-label mb-4 text-faint">{c.solutionTitle}</h2>
        <p className="text-mute leading-relaxed max-w-2xl">{c.solution}</p>

        <div className="mt-8 border border-line divide-y divide-line">
          {c.features.map((feature) => (
            <div key={feature.name} className="flex items-center justify-between px-5 py-4">
              <span className="text-sm text-ink">{feature.name}</span>
              <span className="signal-label text-faint">{feature.state}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-10 text-xs text-faint italic max-w-xl">{c.stateNote}</p>
    </section>
  );
}
