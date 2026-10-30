import Link from "next/link";
import GamesCarousel from "@/components/GamesScroller";
import { games } from "@/data/games";

export default function PlayNow() {
    const browserGames = games.filter((g) => g.type === "navigateur");
    const tiles = browserGames.slice(0, 4);

    return (
        <section className="mt-10">
            <h2 className="text-xl font-bold tracking-tight">Joue maintenant</h2>
            <p className="mt-1 text-sm text-foreground/60">
                Zéro téléchargement : un clic et tu joues.
            </p>

            <div className="mt-4 flex gap-3">
                <div className="grid w-[40%] shrink-0 grid-cols-2 gap-2 sm:w-52">
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
                        <GamesCarousel games={browserGames} />
                    </div>
                </div>
            </div>
        </section>
    );
}