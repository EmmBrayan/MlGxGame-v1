import Link from "next/link";
import PlatformBadges from "@/components/PlatformBadges";
import type { Game } from "@/data/games";

type Props = {
  game: Game;
  title?: string; // l'étiquette sur l'image : "Notre choix", plus tard "Le plus joué"
};

export default function MostPlayedFrame({ game, title = "Notre choix" }: Props) {
  return (
    <section className="mt-6 flex overflow-hidden rounded-2xl border border-border bg-card">
      {/* Image à gauche, avec l'étiquette */}
      <div className="relative flex w-28 shrink-0 items-center justify-center bg-accent/10 text-4xl font-bold text-accent/70 sm:w-40 sm:text-5xl">
        {game.name.charAt(0)}
        <span className="absolute left-2 top-2 rounded-full bg-background/80 px-2 py-0.5 text-[10px] font-medium text-accent">
          {title}
        </span>
      </div>

      {/* Texte à droite */}
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 p-3 sm:p-4">
        <div>
          <h2 className="truncate text-base font-bold sm:text-lg">{game.name}</h2>
          <div className="mt-1 flex flex-wrap items-center gap-1">
            {game.platforms && <PlatformBadges platforms={game.platforms} />}
            {game.price && (
              <span className="text-[10px] text-foreground/50">
                {game.price === "gratuit" ? "Gratuit" : "Payant"}
              </span>
            )}
          </div>
        </div>

        {/* La description n'apparaît que sur écran moyen et plus, sur 2 lignes maximum */}
        <p className="hidden text-sm text-foreground/70 sm:line-clamp-2">
          {game.description}
        </p>

        <Link
          href={`/games/${game.slug}`}
          className="self-start rounded-lg bg-accent px-3 py-2 text-xs font-semibold text-white transition hover:opacity-90"
        >
          Voir le jeu
        </Link>
      </div>
    </section>
  );
}