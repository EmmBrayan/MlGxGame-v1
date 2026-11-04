import type { Metadata } from "next";
import { games } from "@/data/games";
import GamesCatalog from "@/components/GamesCatalog";

export const metadata: Metadata = {
  title: "Jeux à télécharger PC et Android - MLGxGame",
    description:
        "Tous les jeux à télécharger sur PC et Android, gratuits ou payants.",
        };

        export default function DownloadsPage() {
          const list = games.filter((g) => g.type === "telechargement");

            return (
                <GamesCatalog
                      title="Jeux à télécharger"
                            subtitle="Sur PC ou Android, on t'envoie vers la boutique officielle"
                                  list={list}
                                      />
                                        );
                                        }