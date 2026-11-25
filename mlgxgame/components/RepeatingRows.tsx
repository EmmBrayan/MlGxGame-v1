"use client";

import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";

const MIN_CARD = 84; // largeur minimale d'une carte sur téléphone (en px)
const MIN_CARD_LARGE = 230; // largeur minimale sur grand écran (en px)
const GAP = 12; // espace entre les cartes (en px)

type Props = {
  items: ReactNode[]; // les petites cartes de jeux
  frames: ReactNode[]; // les grandes cartes : une après chaque bloc de 2 lignes
};

export default function RepeatingRows({ items, frames }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [columns, setColumns] = useState(3); // nombre de cartes par ligne

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Se déclenche au départ, puis à chaque changement de largeur
    const observer = new ResizeObserver(() => {
            // Grand écran (dès 1024 px de large) : cartes plus grandes
      const min = window.innerWidth >= 1024 ? MIN_CARD_LARGE : MIN_CARD;
      const fit = Math.floor((el.clientWidth + GAP) / (min + GAP));
      setColumns(Math.max(2, fit));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const slots = columns * 2; // un bloc = deux lignes
  const blocks = Math.ceil(items.length / slots);

  return (
    <div ref={ref}>
      {Array.from({ length: blocks }, (_, i) => (
        <Fragment key={i}>
          <div
            className={`grid gap-2 ${i > 0 ? "mt-6" : ""}`}
            style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
          >
            {items.slice(i * slots, (i + 1) * slots)}
          </div>
          {frames[i]}
        </Fragment>
      ))}
    </div>
  );
}
