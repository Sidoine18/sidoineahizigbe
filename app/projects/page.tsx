import type { Metadata } from "next";
import ProjectsView from "@/components/views/ProjectsView";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "ColdTrack, ClimConnect, MoleculeX — projets techniques et numériques de Sidoine Ahizigbe, présentés comme des études de cas honnêtes.",
  alternates: { canonical: "/projects" },
};

export default function Page() {
  return <ProjectsView />;
}
