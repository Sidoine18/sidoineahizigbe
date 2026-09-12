import type { Metadata } from "next";
import MoleculeXView from "@/components/views/MoleculeXView";

export const metadata: Metadata = {
  title: "MoleculeX",
  description:
    "MoleculeX — exploration des fluides frigorigènes et de leur impact environnemental (GWP, COP).",
  alternates: { canonical: "/projects/moleculex" },
};

export default function Page() {
  return <MoleculeXView />;
}
