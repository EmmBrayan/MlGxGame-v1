import Link from "next/link";
import PlatformBadges from "@/components/PlatformBadges";
import type { Game } from "@/data/games";

type Props = {
  game: Game;
  title?: string; // "À la une" pour l'instant, "Le plus joué" plus tard
};

export default function MostPlayedFrame({ game, title = "À la une" }: Props) {
  return (
    <section className="mt-8 overflow-hidden rounded-3xl border border-border bg-card">
      <div className="flex flex-col sm:flex-row">
        {/* Grande vignette avec la première lettre */}
        <div className="relative flex h-48 items-center justify-center bg-accent/10 text-7xl font-bold text-accent/70 sm:h-auto sm:min-h-64 sm:w-1/3 lg:w-2/5">
          {game.name.charAt(0)}
          <span className="absolute left-3 top-3 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-accent">
            {title}
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-center gap-4 p-5 sm:p-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {game.name}
            </h2>
            <p className="mt-1 text-sm text-foreground/50">{game.genre}</p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {game.platforms && <PlatformBadges platforms={game.platforms} />}
            {game.price && (
              <span className="text-xs text-foreground/60">
                {game.price === "gratuit" ? "Gratuit" : "Payant"}
              </span>
            )}
          </div>

          <p className="max-w-xl text-foreground/70">{game.description}</p>

          <Link
            href={`/games/${game.slug}`}
            className="self-start rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Voir le jeu
          </Link>
        </div>
      </div>
    </section>
  );
}