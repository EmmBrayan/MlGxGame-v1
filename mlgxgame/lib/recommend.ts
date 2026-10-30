import type { Game } from "@/data/games";

export type Suggestion = { game: Game; reason: "recent" | "suggestion" };

export function pickGames(
  all: Game[],
    recentSlugs: string[],
      count: number,
        random: () => number,
        ): Suggestion[] {
          const playable = all.filter((g) => g.type === "navigateur");
            const bySlug = new Map(playable.map((g) => [g.slug, g]));
              const picks: Suggestion[] = [];
                const used = new Set<string>();

                  // 1. Les parties récentes d'abord (la plus récente en premier)
                    for (const slug of recentSlugs) {
                        const game = bySlug.get(slug);
                            if (game && !used.has(slug) && picks.length < count) {
                                  picks.push({ game, reason: "recent" });
                                        used.add(slug);
                                            }
                                              }

                                                // 2. Le genre préféré : celui qui revient le plus dans l'historique
                                                  const genreCount = new Map<string, number>();
                                                    for (const slug of recentSlugs) {
                                                        const game = bySlug.get(slug);
                                                            if (game) genreCount.set(game.genre, (genreCount.get(game.genre) ?? 0) + 1);
                                                              }

                                                                // 3. Le reste : on classe par genre préféré, avec un peu de hasard
                                                                  const rest = playable
                                                                      .filter((g) => !used.has(g.slug))
                                                                          .map((game) => ({
                                                                                game,
                                                                                      score: (genreCount.get(game.genre) ?? 0) + random(),
                                                                                          }))
                                                                                              .sort((a, b) => b.score - a.score);

                                                                                                for (const { game } of rest) {
                                                                                                    if (picks.length >= count) break;
                                                                                                        picks.push({ game, reason: "suggestion" });
                                                                                                          }
                                                                                                            return picks;
                                                                                                            }