"use client";

import { LanguageProvider } from "@/lib/i18n";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </LanguageProvider>
  );
}
