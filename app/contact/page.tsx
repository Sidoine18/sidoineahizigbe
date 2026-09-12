import type { Metadata } from "next";
import ContactView from "@/components/views/ContactView";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Sidoine Ahizigbe pour un projet technique, une solution numérique ou une collaboration avec KONFORTECH BÉNIN.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <ContactView />;
}
