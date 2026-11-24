import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Inscription - MLGxGame",
  robots: { index: false },
};

export default function SignupPage() {
  return (
    <ComingSoon
      title="Inscription"
      text="Les comptes arrivent bientôt. Reviens vite pour créer le tien."
    />
  );
}