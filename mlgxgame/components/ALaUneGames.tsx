import Link from "next/link";
import PlatformBadges from "@/components/PlatformBadges";
import type { Game } from "@/data/games";

export default function ALaUneGames({ game }: { game: Game }) {
    return (
        <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card lg:flex-row">
            <div className="relative flex h-24 items-center justify-center bg-accent/10 text-4xl font-bold text-accent/70 lg:h-auto lg:w-40 lg:shrink-0">
                {game.name.charAt(0)}
                <span className="absolute left-2 top-2 rounded-full bg-background/80 px-2 py-0.5 text-[10px] font-medium text-accent">
                    À la une
                </span>
            </div>

            <div className="flex min-w-0 flex-1 flex-col justify-between gap-3 p-3 lg:p-4">
                <div>
                    <h3 className="truncate text-sm font-bold lg:text-lg">{game.name}</h3>
                    <div className="mt-1.5 flex flex-wrap items-center gap-1">
                        {game.platforms && <PlatformBadges platforms={game.platforms} />}
                        {game.price && (
                            <span className="text-[10px] text-foreground/50">
                                {game.price === "gratuit" ? "Gratuit" : "Payant"}
                            </span>
                        )}
                    </div>
                    <p className="mt-2 hidden text-sm text-foreground/70 lg:block">
                        {game.description}
                    </p>
                </div>

                <Link
                    href={`/jeux/${game.slug}`}
                    className="rounded-lg bg-accent px-3 py-2 text-center text-xs font-semibold text-white transition hover:opacity-90 lg:self-start lg:px-4 lg:text-sm"
                >
                    <span className="lg:hidden">Voir</span>
                    <span className="hidden lg:inline">Télécharger</span>
                </Link>
            </div>
        </div>
    );
}