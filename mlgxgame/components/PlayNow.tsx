import Link from "next/link";
import ContinuePlaying from "@/components/ContinuePlaying";
import GamesScroller from "@/components/GamesScroller";
import { games, type Game } from "@/data/games";

// L'élément en plus, visible seulement sur grand écran (dès 1024 px)
function Featured({ game }: { game: Game }) {
  return (
      <aside className="hidden w-80 shrink-0 flex-col justify-between rounded-2xl border border-border bg-card p-5 lg:flex">
            <div>
                    <span className="rounded-full bg-accent/15 px-2.5 py-1 text-xs font-medium text-accent">
                              À la une
                                      </span>
                                              <h3 className="mt-4 text-2xl font-bold tracking-tight">{game.name}</h3>
                                                      <p className="mt-1 text-sm text-foreground/50">{game.genre}</p>
                                                              <p className="mt-3 text-sm text-foreground/70">{game.description}</p>
                                                                    </div>
                                                                          <Link
                                                                                  href={`/jeux/${game.slug}`}
                                                                                          className="mt-4 rounded-xl bg-accent px-4 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
                                                                                                >
                                                                                                        Jouer maintenant
                                                                                                              </Link>
                                                                                                                  </aside>
                                                                                                                    );
                                                                                                                    }

                                                                                                                    export default function PlayNow() {
                                                                                                                      const browserGames = games.filter((g) => g.type === "navigateur");
                                                                                                                        const tiles = browserGames.slice(0, 4);
                                                                                                                          const featured = browserGames[0]; // change le numéro pour mettre un autre jeu à la une

                                                                                                                            return (
                                                                                                                                <section className="mt-10">
                                                                                                                                      <h2 className="text-xl font-bold tracking-tight">Joue maintenant</h2>
                                                                                                                                            <p className="mt-1 text-sm text-foreground/60">
                                                                                                                                                    Zéro téléchargement : un clic et tu joues.
                                                                                                                                                          </p>

                                                                                                                                                                <div className="mt-4 flex gap-3">
                                                                                                                                                                        <div className="grid w-[40%] shrink-0 grid-cols-2 gap-2 sm:w-52 lg:w-72">
                                                                                                                                                                                  {tiles.map((g) => (
                                                                                                                                                                                              <Link
                                                                                                                                                                                                            key={g.slug}
                                                                                                                                                                                                                          href={`/jeux/${g.slug}`}
                                                                                                                                                                                                                                        aria-label={g.name}
                                                                                                                                                                                                                                                      className="flex aspect-square items-center justify-center rounded-xl border border-border bg-card text-lg font-bold text-accent transition hover:border-accent"
                                                                                                                                                                                                                                                                  >
                                                                                                                                                                                                                                                                                {g.name.charAt(0)}
                                                                                                                                                                                                                                                                                            </Link>
                                                                                                                                                                                                                                                                                                      ))}
                                                                                                                                                                                                                                                                                                              </div>

                                                                                                                                                                                                                                                                                                                      <div className="relative min-w-0 flex-1 overflow-hidden rounded-2xl border border-border bg-card">
                                                                                                                                                                                                                                                                                                                                <div className="absolute inset-2">
                                                                                                                                                                                                                                                                                                                                            <GamesScroller games={browserGames} />
                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                              </div>

                                                                                                                                                                                                                                                                                                                                                                      {featured && <Featured game={featured} />}
                                                                                                                                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                                                                                                                                                  <ContinuePlaying />
                                                                                                                                                                                                                                                                                                                                                                                      </section>
                                                                                                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                                                                                                                        }