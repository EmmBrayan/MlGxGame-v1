"use client";

import { useEffect, useState } from "react";
import FitRow from "@/components/GameRow";
import GameCardTall from "@/components/GameCardDesign";
import MoreCard from "@/components/LastCard";
import { games } from "@/data/games";
import { addRecent, getRecent } from "@/lib/recent";
import { pickGames, type Suggestion } from "@/lib/recommend";

const MAX = 12; // nombre maximum de jeux préparés (la rangée en affiche autant qu'il en tient)

export default function ContinuePlaying() {
  const [picks, setPicks] = useState<Suggestion[] | null>(null);

    useEffect(() => {
        setPicks(pickGames(games, getRecent(), MAX, Math.random));
          }, []);

            // Tant que l'historique n'est pas lu : des rectangles gris qui pulsent
              const items =
                  picks === null
                        ? Array.from({ length: MAX }, (_, i) => (
                                  <div
                                              key={i}
                                                          className="aspect-[3/4] animate-pulse rounded-xl border border-border bg-card"
                                                                    />
                                                                            ))
                                                                                  : picks.map((pick) => (
                                                                                            <GameCardTall
                                                                                                        key={pick.game.slug}
                                                                                                                    game={pick.game}
                                                                                                                                badge={pick.reason === "recent" ? "Reprendre" : "À essayer"}
                                                                                                                                            onClick={() => addRecent(pick.game.slug)}
                                                                                                                                                      />
                                                                                                                                                              ));

                                                                                                                                                                return (
                                                                                                                                                                    <div className="mt-4">
                                                                                                                                                                          <h3 className="mb-2 text-sm font-semibold text-foreground/60">Pour toi</h3>
                                                                                                                                                                                <FitRow items={items} more={<MoreCard href="/online" />} />
                                                                                                                                                                                    </div>
                                                                                                                                                                                      );
                                                                                                                                                                                      }