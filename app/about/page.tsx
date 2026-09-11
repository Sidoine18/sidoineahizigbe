"use client";

import { useLanguage } from "@/lib/i18n";
import SectionHeader from "@/components/SectionHeader";
import Timeline from "@/components/Timeline";

export default function AboutPage() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <SectionHeader kicker={a.kicker} title={a.title} intro={a.intro} />

      <div className="grid gap-16 sm:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 max-w-xl">
          <p className="text-mute leading-relaxed">{a.body1}</p>
          <p className="text-mute leading-relaxed">{a.body2}</p>

          <div className="pt-6">
            <p className="signal-label mb-4 text-faint">{a.valuesTitle}</p>
            <div className="flex flex-wrap gap-2">
              {a.values.map((value) => (
                <span key={value} className="signal-label border border-line px-3 py-1.5 text-mute">
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="signal-label mb-8 text-faint">{a.timelineTitle}</p>
          <Timeline items={a.timeline} />
        </div>
      </div>
    </section>
  );
}
