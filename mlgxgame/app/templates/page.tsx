import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Templates - MLGxGame",
  robots: { index: false }, // Google n'indexe pas cette page vide
};

export default function TemplatesPage() {
  return (
    <ComingSoon
      title="Templates web"
      text="Des modèles de sites prêts à l'emploi, pour lancer ton projet sans coder. Cette page arrive bientôt."
    />
  );
}