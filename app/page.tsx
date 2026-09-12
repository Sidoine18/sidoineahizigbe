import type { Metadata } from "next";
import HomeView from "@/components/views/HomeView";

export const metadata: Metadata = {
  description:
    "Profil technique et numérique à Cotonou, Bénin : froid & climatisation, IoT, développement de solutions numériques. Fondateur de KONFORTECH BÉNIN.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return <HomeView />;
}
