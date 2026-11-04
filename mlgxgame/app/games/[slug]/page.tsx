import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { games } from "@/data/games";

type Props = { params: Promise<{ slug: string }> };

// Dit à Next.js quelles pages créer à l'avance : une par jeu
export function generateStaticParams() {
    return games.map((g) => ({ slug: g.slug }));
}

// Titre et description propres à chaque jeu (important pour Google)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const game = games.find((g) => g.slug === slug);
    if (!game) return {};
    return {
        title: `${game.name} - MLGxGame`,
        description: game.description,
    };
}

export default async function GamePage({ params }: Props) {
    const { slug } = await params; // le morceau de l'adresse : "agar-io"
    const game = games.find((g) => g.slug === slug);
    if (!game) notFound(); // jeu inconnu : page 404

    const isBrowser = game.type === "navigateur";

    return (
        <main className="mx-auto w-full max-w-[1600px] px-4 py-6">
            <Link href="/" className="text-sm text-foreground/60 hover:text-foreground">
                ← Retour
            </Link>

            <div className="mt-6 flex flex-col gap-6 sm:flex-row">
                {/* Grande vignette avec la première lettre */}
                <div className="flex aspect-square w-40 shrink-0 items-center justify-center rounded-2xl border border-border bg-card text-6xl font-bold text-accent sm:w-56">
                    {game.name[0]}
                </div>

                <div className="max-w-3xl">
                    <h1 className="text-3xl font-bold text-foreground">{game.name}</h1>
                    <p className="mt-1 text-foreground/60">{game.genre}</p>

                    {/* Petites étiquettes */}
                    <div className="mt-4 flex flex-wrap gap-2 text-xs">
                        <span className="rounded-full border border-border px-3 py-1 text-foreground/80">
                            {isBrowser ? "Dans le navigateur" : "À télécharger"}
                        </span>
                        {game.platforms?.map((p) => (
                            <span
                                key={p}
                                className="rounded-full bg-accent/15 px-3 py-1 text-accent"
                            >
                                {p === "pc" ? "PC" : "Android"}
                            </span>
                        ))}
                        {game.price && (
                            <span className="rounded-full border border-border px-3 py-1 text-foreground/80">
                                {game.price === "gratuit" ? "Gratuit" : "Payant"}
                            </span>
                        )}
                    </div>

                    <p className="mt-6 leading-relaxed text-foreground/80">
                        {game.description}
                    </p>

                    {/* Bouton provisoire : on le branchera à la prochaine étape */}
                    <button
                        type="button"
                        disabled
                        className="mt-8 rounded-full bg-accent px-6 py-3 font-medium text-white opacity-60"
                    >
                        {isBrowser ? "Jouer" : "Télécharger"}
                    </button>
                </div>
            </div>
        </main>
    );
}