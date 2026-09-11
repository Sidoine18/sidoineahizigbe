"use client";

import { useLanguage } from "@/lib/i18n";
import SectionHeader from "@/components/SectionHeader";
import ExpertiseCard from "@/components/ExpertiseCard";

export default function ExpertisePage() {
  const { t } = useLanguage();
  const e = t.expertise;

  return (
    <section className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <SectionHeader kicker={e.kicker} title={e.title} intro={e.intro} />
      <div className="grid gap-6 sm:grid-cols-2">
        {e.items.map((item) => (
          <ExpertiseCard key={item.num} {...item} />
        ))}
      </div>
    </section>
  );
}
