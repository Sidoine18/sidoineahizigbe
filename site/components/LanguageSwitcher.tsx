"use client";

import { useLanguage } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 signal-label" role="group" aria-label="Language switcher">
      <button
        onClick={() => setLang("fr")}
        aria-pressed={lang === "fr"}
        className={`px-1.5 py-1 transition-colors ${lang === "fr" ? "text-ink" : "text-faint hover:text-mute"}`}
      >
        FR
      </button>
      <span className="text-faint">/</span>
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`px-1.5 py-1 transition-colors ${lang === "en" ? "text-ink" : "text-faint hover:text-mute"}`}
      >
        EN
      </button>
    </div>
  );
}
