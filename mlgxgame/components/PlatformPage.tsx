import GameCardDesign from "@/components/GameCardDesign";
import LastCard from "@/components/LastCard";
import MostPlayedFrame from "@/components/MostPlayedFrame";
import TwoRowGrid from "@/components/TwoRowGrid";
import type { Game } from "@/data/games";

type Props = {
  title: string;
  intro: string; // un court texte unique par page (important pour Google)
  list: Game[];
  moreHref?: string; // où mène le "+" s'il y a trop de jeux
};

export default function PlatformPage({ title, intro, list, moreHref }: Props) {
  // Le jeu marqué "featured", sinon le premier de la liste
  const featured = list.find((g) => g.featured) ?? list[0];

  return (
    <main className="mx-auto w-full max-w-[1600px] px-4 py-6">
      <h1 className="text-3xl font-bold text-foreground">{title}</h1>
      <p className="mt-2 max-w-2xl text-foreground/70">{intro}</p>

      <div className="mt-6">
        <TwoRowGrid
          items={list.map((game) => (
            <GameCardDesign key={game.slug} game={game} className="flex" />
          ))}
          more={moreHref ? <LastCard href={moreHref} /> : undefined}
        />
      </div>

      {featured && <MostPlayedFrame game={featured} />}
    </main>
  );
}