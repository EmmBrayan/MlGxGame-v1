"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { games } from "@/data/games";
import { addRecent, getRecent } from "@/lib/recent";
import { pickGames, type Suggestion } from "@/lib/recommend";

// 4 emplacements de jeux, puis le bouton "+" qui est toujours le dernier.
// Téléphone : 2 jeux. Dès 640 px : 3 jeux. Dès 1024 px : 4 jeux.
const SLOTS = ["flex", "flex", "hidden sm:flex", "hidden lg:flex"];

export default function ContinuePlaying() {
  const [picks, setPicks] = useState<Suggestion[] | null>(null);

  useEffect(() => {
    setPicks(pickGames(games, getRecent(), SLOTS.length, Math.random));
  }, []);

  return (
    <div className="mt-4">
      <h3 className="mb-2 text-sm font-semibold text-foreground/60">Pour toi</h3>

      <div className="grid w-[40%] shrink-0 grid-cols-2 gap-2 sm:w-52 lg:w-72">
        {SLOTS.map((show, i) => {
          if (picks === null) {
            return (
              <div
                key={i}
                className={`${show} aspect-[3/4] animate-pulse rounded-xl border border-border bg-card`}
              />
            );
          }

          const pick = picks[i];
          if (!pick) return null;

          return (
            <Link
              key={pick.game.slug}
              href={`/jeux/${pick.game.slug}`}
              onClick={() => addRecent(pick.game.slug)}
              className={`${show} aspect-[3/4] flex-col overflow-hidden rounded-xl border border-border bg-card transition hover:border-accent`}
            >
              <div className="relative flex flex-1 items-center justify-center bg-accent/10 text-3xl font-bold text-accent/70">
                {pick.game.name.charAt(0)}
                <span className="absolute left-1.5 top-1.5 rounded-full bg-background/80 px-2 py-0.5 text-[10px] font-medium text-accent">
                  {pick.reason === "recent" ? "Reprendre" : "À essayer"}
                </span>
              </div>
              <p className="truncate px-2 py-2 text-xs font-medium">
                {pick.game.name}
              </p>
            </Link>
          );
        })}

        <Link
          href="/online"
          className="flex aspect-[3/4] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border text-foreground/60 transition hover:border-accent hover:text-accent"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-current text-2xl leading-none">
            +
          </span>
          <span className="text-xs font-medium">Plus de jeux</span>
        </Link>
      </div>
    </div>
  );
}