import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://sidoineahizigbe.online"),
  title: {
    default: "Sidoine Ahizigbe — Technique. Technologie. Solutions numériques.",
    template: "%s — Sidoine Ahizigbe",
  },
  description:
    "Sidoine Ahizigbe — profil technique et numérique entre froid & climatisation, technologie et solutions numériques. Fondateur de KONFORTECH BÉNIN.",
  keywords: [
    "Sidoine Ahizigbe",
    "froid et climatisation",
    "technologie",
    "IoT",
    "solutions numériques",
    "UNSTIM",
    "Bénin",
    "KONFORTECH BÉNIN",
  ],
  authors: [{ name: "Sidoine Ahizigbe" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
    siteName: "Sidoine Ahizigbe",
    title: "Sidoine Ahizigbe — Technique. Technologie. Solutions numériques.",
    description:
      "Profil technique et numérique entre froid & climatisation, technologie et solutions numériques. Fondateur de KONFORTECH BÉNIN.",
    url: "https://sidoineahizigbe.online",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sidoine Ahizigbe — Technique. Technologie. Solutions numériques.",
    description: "Profil technique et numérique entre froid & climatisation, technologie et solutions numériques.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-base text-ink font-body">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
