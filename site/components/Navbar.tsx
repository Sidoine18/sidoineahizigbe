"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { navRoutes } from "@/data/nav";
import LanguageSwitcher from "./LanguageSwitcher";
import Button from "./Button";

export default function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled ? "bg-base/90 backdrop-blur border-line py-2" : "bg-transparent border-transparent py-5"
      }`}
    >
      <nav className="mx-auto max-w-content flex items-center justify-between px-6">
        <Link href="/" className="font-display text-sm font-semibold tracking-wide text-ink">
          SIDOINE AHIZIGBE
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {navRoutes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`text-sm transition-colors ${
                pathname === route.path ? "text-ink" : "text-mute hover:text-ink"
              }`}
            >
              {t.nav[route.key as keyof typeof t.nav]}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <LanguageSwitcher />
          <Button href="/contact" variant="secondary" icon={false} className="py-2">
            {t.nav.collaborate}
          </Button>
        </div>

        <button
          className="lg:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-line bg-base px-6 py-6">
          <div className="flex flex-col gap-4">
            {navRoutes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={`text-base ${pathname === route.path ? "text-ink" : "text-mute"}`}
              >
                {t.nav[route.key as keyof typeof t.nav]}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
            <LanguageSwitcher />
            <Button href="/contact" variant="secondary" icon={false} className="py-2">
              {t.nav.collaborate}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
