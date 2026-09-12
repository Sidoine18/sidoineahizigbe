import type { Metadata } from "next";
import CvView from "@/components/views/CvView";

export const metadata: Metadata = {
  title: "CV",
  description:
    "CV de Sidoine Ahizigbe : formation à l'UNSTIM, compétences en froid & climatisation, IoT et développement web, certificats et projets.",
  alternates: { canonical: "/cv" },
};

export default function Page() {
  return <CvView />;
}
