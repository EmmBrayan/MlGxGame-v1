import GameCardDesign from "@/components/GameCardDesign";
import MostPlayedFrame from "@/components/MostPlayedFrame";
import type { Game } from "@/data/games";

type Props = {
  title: string;
  intro: string; // un court texte unique par page (important pour Google)
  list: Game[];
};

export default function PlatformPage({ title, intro, list }: Props) {
  // Le jeu marqué "featured", sinon le premier de la liste
  const featured = list.find((g) => g.featured) ?? list[0];

  return (
    <main className="mx-auto w-full max-w-[1600px] px-4 py-6">
      <h1 className="text-3xl font-bold text-foreground">{title}</h1>
      <p className="mt-2 max-w-2xl text-foreground/70">{intro}</p>

      {/* 3 colonnes sur téléphone, de plus en plus sur grand écran */}
      <div className="mt-6 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8">
        {list.map((game) => (
          <GameCardDesign key={game.slug} game={game} className="flex" />
        ))}
      </div>

      {featured && <MostPlayedFrame game={featured} />}
    </main>
  );
}