import GameCardDesign from "@/components/GameCardDesign";
import GameRow from "@/components/GameRow";
import LastCard from "@/components/LastCard";
import { games } from "@/data/games";

export default function LastRow() {
    const downloads = games.filter((g) => g.type === "telechargement");

    return (
        <GameRow
            items={downloads.map((g) => (
                <GameCardDesign key={g.slug} game={g} />
            ))}
            more={<LastCard href="/telechargements" />}
        />
    );
}