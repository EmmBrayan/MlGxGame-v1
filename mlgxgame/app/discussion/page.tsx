import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Discussion - MLGxGame",
  robots: { index: false },
};

export default function DiscussionPage() {
  return (
    <ComingSoon
      title="Discussion"
      text="Un espace pour discuter entre joueurs. Cette page arrive bientôt."
    />
  );
}