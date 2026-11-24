"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const MIN_CARD = 84; // largeur minimale d'une carte (en px)
const GAP = 8; // espace entre les cartes (en px)

type Props = {
  items: ReactNode[]; // les cartes de jeux
  more?: ReactNode; // la carte "+", seulement s'il y a trop de jeux
};

export default function TwoRowGrid({ items, more }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [columns, setColumns] = useState(3); // nombre de cartes par ligne

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Se déclenche au départ, puis à chaque changement de largeur
    const observer = new ResizeObserver(() => {
      const fit = Math.floor((el.clientWidth + GAP) / (MIN_CARD + GAP));
      setColumns(Math.max(2, fit));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const slots = columns * 2; // deux lignes, pas plus
  const tooMany = items.length > slots;
  // S'il y a trop de jeux, on garde la dernière case pour le "+"
  const visible = tooMany && more ? items.slice(0, slots - 1) : items.slice(0, slots);

  return (
    <div
      ref={ref}
      className="grid gap-2"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {visible}
      {tooMany && more}
    </div>
  );
}