import type { Metadata } from "next";
import { games } from "@/data/games";
import PlatformPage from "@/components/PlatformPage";

export const metadata: Metadata = {
  title: "Jeux PC à télécharger - MLGxGame",
  description:
    "Une sélection de jeux à télécharger sur PC, gratuits ou payants, choisis pour s'amuser sainement.",
};

export default function PcPage() {
  const list = games.filter(
    (g) => g.type === "telechargement" && g.platforms?.includes("pc"),
  );

  return (
    <PlatformPage
      title="Jeux PC"
      intro="Des jeux à télécharger sur ordinateur, gratuits ou payants. Chaque jeu est choisi pour le plaisir de jouer, et on t'envoie vers la boutique officielle pour l'installer."
      list={list}
    />
  );
}