"use client";

import { useEffect, useRef } from "react";

type Props = {
  open: boolean; // le panneau est-il ouvert ?
  onClose: () => void; // la fonction qui le ferme
};

export default function AssistantPanel({ open, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  // À l'ouverture : le bouton "Fermer" prend le focus
  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  // Tant que le panneau est ouvert : Échap le ferme, et la page derrière ne défile plus
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    // Le fond sombre : un appui dessus ferme le panneau
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Le panneau : un appui dedans ne le ferme pas */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="assistant-title"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-3xl border border-border bg-card p-6 shadow-2xl shadow-black/60"
      >
        <div className="flex items-start justify-between gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-accent/10 text-accent">
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
              <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />
            </svg>
          </span>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="flex h-9 w-9 items-center justify-center rounded-full text-foreground/60 transition hover:bg-background hover:text-foreground"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <h2 id="assistant-title" className="mt-4 text-xl font-bold tracking-tight">
          Assistant IA
        </h2>
        <span className="mt-2 inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">
          Bientôt disponible
        </span>
        <p className="mt-3 text-sm leading-relaxed text-foreground/70">
          Ton assistant MLGxGame t&apos;aidera bientôt à trouver le jeu parfait,
          selon tes goûts. Il arrive dans une prochaine version.
        </p>

        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}