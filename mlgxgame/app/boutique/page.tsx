import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Boutique - MLGxGame",
  robots: { index: false }, // Google n'indexe pas cette page vide
};

export default function TemplatesPage() {
  return (
    <ComingSoon
      title="Boutique"
      text="Des equipement gaming facile a trouver tout se dont tu as besoin. Cette page arrive bientôt."
    />
  );
}