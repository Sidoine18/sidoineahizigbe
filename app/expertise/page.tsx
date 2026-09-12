import type { Metadata } from "next";
import ExpertiseView from "@/components/views/ExpertiseView";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Froid & climatisation, technologie IoT, solutions numériques et innovation technique — les quatre domaines d'expertise de Sidoine Ahizigbe.",
  alternates: { canonical: "/expertise" },
};

export default function Page() {
  return <ExpertiseView />;
}
