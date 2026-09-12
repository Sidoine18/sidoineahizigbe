import type { Metadata } from "next";
import KonfortechView from "@/components/views/KonfortechView";

export const metadata: Metadata = {
  title: "KONFORTECH BÉNIN",
  description:
    "KONFORTECH BÉNIN, structure de conception de solutions techniques entre web et climatisation, fondée par Sidoine Ahizigbe.",
  alternates: { canonical: "/konfortech" },
};

export default function Page() {
  return <KonfortechView />;
}
