"use client";

import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import Button from "@/components/Button";
import TechnicalSignal from "@/components/TechnicalSignal";

export default function KonfortechPage() {
  const { t } = useLanguage();
  const k = t.konfortech;

  return (
    <section className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <p className="signal-label mb-3 text-ember">{k.kicker}</p>
      <h1 className="font-display text-4xl sm:text-5xl text-ink">{k.title}</h1>
      <p className="mt-3 text-lg text-signal">{k.position}</p>
      <p className="mt-6 max-w-xl text-mute leading-relaxed">{k.intro}</p>

      <div className="mt-16">
        <TechnicalSignal steps={["Sidoine Ahizigbe", "Vision & conception", "KONFORTECH BÉNIN", "Solutions", "Clients"]} dense />
      </div>

      <div className="mt-16 border border-line p-8 sm:p-10">
        <h2 className="font-display text-2xl text-ink max-w-lg">{k.separationTitle}</h2>
        <p className="mt-4 text-mute leading-relaxed max-w-xl">{k.separationText}</p>
      </div>

      <div className="mt-16 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="signal-label mb-4 text-faint">{k.domainsTitle}</h2>
          <ul className="space-y-2">
            {k.domains.map((d) => (
              <li key={d} className="flex items-start gap-2 text-sm text-mute">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal-dim" />
                {d}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="signal-label mb-4 text-faint">{k.axesTitle}</h2>
          <ul className="space-y-2">
            {k.axes.map((a) => (
              <li key={a} className="flex items-start gap-2 text-sm text-mute">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ember" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 border border-signal-dim bg-panel p-10 text-center">
        <h2 className="font-display text-2xl text-ink">{k.ctaTitle}</h2>
        <p className="mt-3 text-mute max-w-md mx-auto">{k.ctaText}</p>
        <div className="mt-7 flex justify-center">
          <Button href="https://konfortechbenin.online" external variant="primary" icon={false}>
            <span className="inline-flex items-center gap-2">
              {k.ctaButton}
              <ExternalLink size={15} />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
