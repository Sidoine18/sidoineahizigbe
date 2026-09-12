"use client";

import { useLanguage } from "@/lib/i18n";
import SectionHeader from "@/components/SectionHeader";

export default function VisionView() {
  const { t } = useLanguage();
  const v = t.vision;

  return (
    <section className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <SectionHeader kicker={v.kicker} title={v.title} intro={v.intro} />
      <div className="grid gap-6 sm:grid-cols-2">
        {v.points.map((point, i) => (
          <div key={point.title} className="border-t-2 border-signal-dim pt-5">
            <span className="signal-label text-faint">{(i + 1).toString().padStart(2, "0")}</span>
            <h3 className="mt-2 font-display text-lg text-ink">{point.title}</h3>
            <p className="mt-3 text-sm text-mute leading-relaxed">{point.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
