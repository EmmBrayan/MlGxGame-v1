import type { Metadata } from "next";
import { games } from "@/data/games";
import PlatformPage from "@/components/PlatformPage";

export const metadata: Metadata = {
  title: "Jeux à télécharger - PC, Android et iPhone - MLGxGame",
  description:
    "Tous les jeux à télécharger sur PC, Android et iPhone, gratuits ou payants, choisis pour s'amuser sainement.",
};

export default function DownloadsPage() {
  const list = games.filter((g) => g.type === "telechargement");

  return (
    <PlatformPage
      title="Jeux à télécharger"
      intro="Tous nos jeux à installer, sur ordinateur comme sur téléphone, gratuits ou payants. Choisis ta plateforme sur les pages Jeux PC et Jeux mobile, ou parcours tout ici : on t'envoie toujours vers la boutique officielle."
      list={list}
    />
  );
}