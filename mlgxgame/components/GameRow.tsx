"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const MIN_CARD = 104; // largeur minimale d'une carte (en px)
const GAP = 8; // espace entre les cartes (en px)

type Props = {
  items: ReactNode[]; // les cartes de jeux
    more: ReactNode; // le rectangle "+", toujours en dernier
    };

    export default function FitRow({ items, more }: Props) {
      const ref = useRef<HTMLDivElement>(null);
        const [fit, setFit] = useState(2); // nombre de cartes de jeux qui tiennent

          useEffect(() => {
              const el = ref.current;
                  if (!el) return;

                      // Se déclenche au départ, puis à chaque changement de largeur
                          const observer = new ResizeObserver(() => {
                                const columns = Math.floor((el.clientWidth + GAP) / (MIN_CARD + GAP));
                                      setFit(Math.max(1, columns - 1)); // on garde une colonne pour le "+"
                                          });
                                              observer.observe(el);
                                                  return () => observer.disconnect();
                                                    }, []);

                                                      const visible = Math.min(fit, items.length);

                                                        return (
                                                            <div
                                                                  ref={ref}
                                                                        className="grid gap-2"
                                                                              style={{ gridTemplateColumns: `repeat(${visible + 1}, minmax(0, 1fr))` }}
                                                                                  >
                                                                                        {items.slice(0, visible)}
                                                                                              {more}
                                                                                                  </div>
                                                                                                    );
                                                                                                    }