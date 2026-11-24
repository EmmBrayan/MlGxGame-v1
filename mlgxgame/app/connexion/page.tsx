import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Connexion - MLGxGame",
  robots: { index: false },
};

export default function LoginPage() {
  return (
    <ComingSoon
      title="Connexion"
      text="Les comptes arrivent bientôt. Tu pourras retrouver tes jeux préférés partout."
    />
  );
}