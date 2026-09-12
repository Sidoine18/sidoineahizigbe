"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import SectionHeader from "@/components/SectionHeader";
import Timeline from "@/components/Timeline";

export default function AboutView() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <div className="grid gap-10 sm:grid-cols-[auto_1fr] items-start mb-12">
        <div className="relative h-32 w-32 sm:h-40 sm:w-40 shrink-0 overflow-hidden border border-line">
          <Image
            src="/images/profile/sidoine-ahizigbe.jpg"
            alt="Portrait de Sidoine Ahizigbe"
            fill
            sizes="160px"
            className="object-cover"
            priority
          />
        </div>
        <SectionHeader kicker={a.kicker} title={a.title} intro={a.intro} />
      </div>

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
