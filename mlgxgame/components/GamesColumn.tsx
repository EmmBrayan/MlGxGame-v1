import ALaUneGames from "@/components/ALaUneGames";
import GamesScroller from "@/components/GamesScroller";
import type { Game } from "@/data/games";

export default function GamesColumn({
    title,
    list,
}: {
    title: string;
    list: Game[];
}) {
    // Le jeu marqué "featured: true", sinon le premier de la liste
    const featured = list.find((g) => g.featured) ?? list[0];

    return (
        <div className="flex min-w-0 flex-col gap-3">
            {featured && <ALaUneGames game={featured} />}

            <div className="overflow-hidden rounded-2xl border border-border bg-card p-2">
                <h3 className="px-1 pb-2 pt-1 text-sm font-semibold">{title}</h3>
                <div className="h-32 sm:h-48 lg:h-72">
                    <GamesScroller games={list} />
                </div>
            </div>
        </div>
    );
}