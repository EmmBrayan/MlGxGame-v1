import type { Metadata } from "next";
import { games } from "@/data/games";
import PlatformPage from "@/components/PlatformPage";

export const metadata: Metadata = {
  title: "Jeux en ligne gratuits - MLGxGame",
  description:
    "Tous les jeux jouables directement dans ton navigateur, sans téléchargement.",
};

export default function OnlinePage() {
  const list = games.filter((g) => g.type === "navigateur");

  return (
    <PlatformPage
      title="Jeux en ligne"
      intro="Zéro téléchargement : un clic et tu joues, directement dans ton navigateur. Des jeux simples et amusants, choisis pour se divertir sainement."
      list={list}
    />
  );
}