"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { navRoutes } from "@/data/nav";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy mt-32">
      <div className="mx-auto max-w-content px-6 py-16 grid gap-12 sm:grid-cols-3">
        <div>
          <p className="font-display text-sm font-semibold text-navy-ink">SIDOINE AHIZIGBE</p>
          <p className="mt-2 text-sm text-navy-mute">{t.footer.tagline}</p>
        </div>

        <div>
          <p className="signal-label mb-4 text-navy-mute">{t.footer.linksTitle}</p>
          <ul className="space-y-2">
            {navRoutes.map((route) => (
              <li key={route.path}>
                <Link href={route.path} className="text-sm text-navy-mute hover:text-navy-ink transition-colors">
                  {t.nav[route.key as keyof typeof t.nav]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="signal-label mb-4 text-navy-mute">{t.footer.konfortechTitle}</p>
          <a
            href="https://konfortechbenin.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-signal-dim hover:text-navy-ink transition-colors"
          >
            {t.footer.konfortechCta}
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      <div className="border-t border-navy-line py-6">
        <p className="mx-auto max-w-content px-6 signal-label text-navy-mute">
          © {year} {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
