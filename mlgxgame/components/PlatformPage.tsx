import GameCardDesign from "@/components/GameCardDesign";
import MostPlayedFrame from "@/components/MostPlayedFrame";
import RepeatingRows from "@/components/RepeatingRows";
import type { Game } from "@/data/games";

type Props = {
  title: string;
  intro: string; // un court texte unique par page (important pour Google)
  list: Game[];
};

export default function PlatformPage({ title, intro, list }: Props) {
  // Les jeux "featured" d'abord, puis les autres dans l'ordre de la liste
  const ranked = [
    ...list.filter((g) => g.featured),
    ...list.filter((g) => !g.featured),
  ];

  return (
    <main className="mx-auto w-full max-w-[1600px] px-4 py-6">
      <h1 className="text-3xl font-bold text-foreground">{title}</h1>
      <p className="mt-2 max-w-2xl text-foreground/70">{intro}</p>

      <div className="mt-6">
        <RepeatingRows
          items={list.map((game) => (
            <GameCardDesign key={game.slug} game={game} className="flex" />
          ))}
          frames={ranked.map((game, i) => (
            <MostPlayedFrame
              key={game.slug}
              game={game}
              title={`Notre choix n°${i + 1}`}
            />
          ))}
        />
      </div>
    </main>
  );
}