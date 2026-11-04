import type { Game } from "@/data/games";
import GameCardDesign from "@/components/GameCardDesign";

type Props = {
  title: string;
    subtitle: string;
      list: Game[];
      };

      export default function GamesCatalog({ title, subtitle, list }: Props) {
        return (
            <main className="mx-auto w-full max-w-[1600px] px-4 py-6">
                  <h1 className="text-3xl font-bold text-foreground">{title}</h1>
                        <p className="mt-1 text-foreground/60">
                                {subtitle} · {list.length} jeux
                                      </p>

                                            {/* 2 colonnes sur téléphone, de plus en plus sur grand écran */}
                                                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                                                          {list.map((game) => (
                                                                    <GameCardDesign key={game.slug} game={game} className="flex" />
                                                                            ))}
                                                                                  </div>
                                                                                      </main>
                                                                                        );
                                                                                        }