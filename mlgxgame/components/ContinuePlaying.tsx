"use client";

import { useEffect, useState } from "react";
import { games, type Game } from "@/data/games";
import { getRecent, addRecent } from "@/lib/recent";
import { pickGames, type Suggestion } from "@/lib/recommend";
import GameRow from "@/components/GameRow";
import GameCardDesign from "@/components/GameCardDesign";
import LastCard from "@/components/LastCard";

const MAX = 12;

// Valeurs par défaut : la section "Joue maintenant" n'a rien à changer.
const browserGames = games.filter((g) => g.type === "navigateur");

type Props = {
  list?: Game[];
    title?: string;
      moreHref?: string;
      };

      export default function ContinuePlaying({
        list = browserGames,
          title = "Pour toi",
            moreHref = "/online",
            }: Props) {
              const [picks, setPicks] = useState<Suggestion[] | null>(null);

                useEffect(() => {
                    setPicks(pickGames(list, getRecent(), MAX, Math.random));
                      }, [list]);

                        const items =
                            picks === null
                                  ? Array.from({ length: MAX }, (_, i) => (
                                            <div
                                                        key={i}
                                                                    className="aspect-[3/4] animate-pulse rounded-2xl border border-border bg-card"
                                                                              />
                                                                                      ))
                                                                                            : picks.map(({ game, reason }) => (
                                                                                                      <GameCardDesign
                                                                                                                  key={game.slug}
                                                                                                                              game={game}
                                                                                                                                          badge={reason === "recent" ? "Reprendre" : "À essayer"}
                                                                                                                                                      onClick={() => addRecent(game.slug)}
                                                                                                                                                                />
                                                                                                                                                                        ));

                                                                                                                                                                          return (
                                                                                                                                                                              <section className="mt-6">
                                                                                                                                                                                    <h3 className="mb-3 text-lg font-semibold text-foreground">{title}</h3>
                                                                                                                                                                                          <GameRow items={items} more={<LastCard href={moreHref} />} />
                                                                                                                                                                                              </section>
                                                                                                                                                                                                );
                                                                                                                                                                                                }