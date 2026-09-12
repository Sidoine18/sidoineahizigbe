import type { Metadata } from "next";
import ColdTrackView from "@/components/views/ColdTrackView";

export const metadata: Metadata = {
  title: "ColdTrack",
  description:
    "ColdTrack — prototype de supervision IoT pour installations frigorifiques : capteurs, ESP32, dashboard et alertes.",
  alternates: { canonical: "/projects/coldtrack" },
};

export default function Page() {
  return <ColdTrackView />;
}
