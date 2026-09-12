import type { Metadata } from "next";
import ClimConnectView from "@/components/views/ClimConnectView";

export const metadata: Metadata = {
  title: "ClimConnect",
  description:
    "ClimConnect — plateforme en développement pour connecter clients et techniciens froid & climatisation au Bénin.",
  alternates: { canonical: "/projects/climconnect" },
};

export default function Page() {
  return <ClimConnectView />;
}
