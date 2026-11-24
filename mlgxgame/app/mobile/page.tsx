import type { Metadata } from "next";
import { games } from "@/data/games";
import PlatformPage from "@/components/PlatformPage";

export const metadata: Metadata = {
  title: "Jeux mobile Android et iPhone - MLGxGame",
  description:
    "Une sélection de jeux pour téléphone, sur Android et iPhone, gratuits ou payants, choisis pour s'amuser sainement.",
};

export default function MobilePage() {
  const list = games.filter(
    (g) =>
      g.type === "telechargement" &&
      (g.platforms?.includes("android") || g.platforms?.includes("ios")),
  );

  return (
    <PlatformPage
      title="Jeux mobile"
      intro="Des jeux à télécharger sur ton téléphone, sur Android et iPhone, gratuits ou payants. Chaque jeu est choisi pour le plaisir de jouer, et on t'envoie vers la boutique officielle pour l'installer."
      list={list}
    />
  );
}