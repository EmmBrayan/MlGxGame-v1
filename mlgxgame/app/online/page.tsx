import type { Metadata } from "next";
import { games } from "@/data/games";
import GamesCatalog from "@/components/GamesCatalog";

export const metadata: Metadata = {
  title: "Jeux en ligne gratuits - MLGxGame",
    description:
        "Tous les jeux jouables directement dans ton navigateur, sans téléchargement.",
        };

        export default function OnlinePage() {
          const list = games.filter((g) => g.type === "navigateur");

            return (
                <GamesCatalog
                      title="Jeux en ligne"
                            subtitle="Zéro téléchargement : un clic et tu joues"
                                  list={list}
                                      />
                                        );
                                        }