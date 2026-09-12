"use client";

import { useLanguage } from "@/lib/i18n";
import Button from "@/components/Button";
import TechnicalSignal from "@/components/TechnicalSignal";

export default function NotFound() {
  const { t } = useLanguage();
  const n = t.notfound;

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-content flex-col items-center justify-center px-6 text-center">
      <p className="signal-label mb-4 text-ember">{n.kicker}</p>
      <h1 className="font-display text-5xl sm:text-6xl text-ink">{n.title}</h1>
      <p className="mt-4 text-mute">{n.text}</p>

      <div className="mt-12 w-full max-w-md opacity-60">
        <TechnicalSignal steps={["Froid", "Capteur", "Data", "???"]} dense />
      </div>

      <div className="mt-12">
        <Button href="/" variant="secondary">
          {n.cta}
        </Button>
      </div>
    </section>
  );
}
