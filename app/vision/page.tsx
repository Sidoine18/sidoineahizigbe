import type { Metadata } from "next";
import VisionView from "@/components/views/VisionView";

export const metadata: Metadata = {
  title: "Vision",
  description:
    "Rendre les systèmes techniques plus intelligents : la vision de Sidoine Ahizigbe pour le froid, la climatisation et le numérique en Afrique.",
  alternates: { canonical: "/vision" },
};

export default function Page() {
  return <VisionView />;
}
