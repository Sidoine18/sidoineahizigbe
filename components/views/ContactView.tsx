"use client";

import { Mail, Phone } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";

export default function ContactView() {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <section className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <SectionHeader kicker={c.kicker} title={c.title} intro={c.intro} />

      <div className="grid gap-16 sm:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="signal-label mb-5 text-faint">{c.directTitle}</p>
          <div className="space-y-4">
            <a
              href="mailto:sidoineah964@gmail.com"
              className="flex items-center gap-3 text-sm text-mute hover:text-ink transition-colors"
            >
              <Mail size={16} className="text-signal" />
              sidoineah964@gmail.com
            </a>
            <a
              href="https://wa.me/2290195498359"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-mute hover:text-ink transition-colors"
            >
              <Phone size={16} className="text-signal" />
              +229 01 95 49 83 59
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
