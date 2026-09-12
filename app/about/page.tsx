import type { Metadata } from "next";
import AboutView from "@/components/views/AboutView";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Étudiant en Froid & Climatisation à l'UNSTIM Bénin, parcours et vision de Sidoine Ahizigbe entre technique et numérique.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return <AboutView />;
}
