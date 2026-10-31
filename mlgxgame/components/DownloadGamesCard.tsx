import GamesColumn from "@/components/GamesColumn";
import LastRow from "@/components/LastRow";
import { games } from "@/data/games";

export default function DownloadGamesCard() {
    const downloads = games.filter((g) => g.type === "telechargement");
    const pcGames = downloads.filter((g) => g.platforms?.includes("pc"));
    const androidGames = downloads.filter((g) => g.platforms?.includes("android"));

    return (
        <section className="mt-12">
            <h2 className="text-xl font-bold tracking-tight">
                Télécharge ton prochain jeu
            </h2>
            <p className="mt-1 text-sm text-foreground/60">
                Sur PC ou Android, gratuit ou payant : on t&apos;envoie vers la boutique officielle.
            </p>

            <div className="mt-4 grid grid-cols-2 items-start gap-3">
                <GamesColumn title="Jeux PC" list={pcGames} />
                <GamesColumn title="Jeux Android" list={androidGames} />
            </div>

            <div className="mt-3">
                <LastRow />
            </div>
        </section>
    );
}