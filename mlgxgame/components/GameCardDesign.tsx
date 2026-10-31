import Link from "next/link";
import PlatformBadges from "@/components/PlatformBadges";
import type { Game } from "@/data/games";

type Props = {
  game: Game;
  badge?: string; // petite étiquette en haut à gauche
  className?: string;
  onClick?: () => void;
};

export default function GameCardDesign({
  game,
  badge,
  className = "flex",
  onClick,
}: Props) {
  return (
    <Link
      href={`/jeux/${game.slug}`}
      onClick={onClick}
      className={`${className} aspect-[3/4] flex-col overflow-hidden rounded-xl border border-border bg-card transition hover:border-accent`}
    >
      <div className="relative flex min-h-0 flex-1 items-center justify-center bg-accent/10 text-3xl font-bold text-accent/70">
        {game.name.charAt(0)}
        {badge && (
          <span className="absolute left-1.5 top-1.5 rounded-full bg-background/80 px-2 py-0.5 text-[10px] font-medium text-accent">
            {badge}
          </span>
        )}
        {game.price && (
          <span className="absolute right-1.5 top-1.5 rounded-full bg-background/80 px-2 py-0.5 text-[10px] font-medium text-foreground/70">
            {game.price === "gratuit" ? "Gratuit" : "Payant"}
          </span>
        )}
      </div>

      <div className="px-2 py-2">
        <p className="truncate text-xs font-medium">{game.name}</p>
        {game.platforms && (
          <div className="mt-1.5 flex flex-wrap items-center gap-1">
            <PlatformBadges platforms={game.platforms} />
          </div>
        )}
      </div>
    </Link>
  );
}