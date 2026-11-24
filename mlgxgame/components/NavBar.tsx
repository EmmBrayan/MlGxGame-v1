"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Icône "étincelles" pour l'IA
const aiIcon = [
  "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z",
  "M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z",
];

const items = [
  {
    href: "/online",
    label: "Jeux",
    icon: [
      "M17.3 5H6.7a4 4 0 0 0-3.9 3.2l-1.3 6.5A3 3 0 0 0 4.4 18.3c.9 0 1.7-.5 2.1-1.2L7.6 15h8.8l1.1 2.1c.4.7 1.2 1.2 2.1 1.2a3 3 0 0 0 2.9-3.6l-1.3-6.5A4 4 0 0 0 17.3 5z",
      "M6 12h4M8 10v4",
    ],
  },
  {
    href: "/templates",
    label: "Templates",
    icon: ["M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z", "M3 9h18M9 21V9"],
  },
  {
    href: "/",
    label: "Accueil",
    home: true, // l'entrée violette
    icon: ["M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"],
  },
  {
    href: "/boutique",
    label: "Boutique",
    icon: ["M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z", "M3 6h18", "M16 10a4 4 0 0 1-8 0"],
  },
  {
    href: "/connexion",
    label: "Compte",
    icon: ["M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2", "M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"],
  },
  {
    href: "/agent",
    label: "Assistant IA",
    ai: true, // l'entrée avec le contour violet
    icon: aiIcon,
  },
];

function Icon({ paths, className }: { paths: string[]; className: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // La touche Échap referme le menu
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Zone invisible : un appui à côté referme le menu */}
      {open && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3">
        {/* Les entrées qui sortent */}
        <ul
          inert={!open}
          className={`flex origin-bottom-right flex-col items-end gap-2 transition duration-200 ${
            open
              ? "translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-3 scale-95 opacity-0"
          }`}
        >
          {items.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            const style = item.home
              ? "border-accent bg-accent text-white"
              : item.ai
                ? "border-accent bg-card text-accent"
                : active
                  ? "border-accent/50 bg-card text-accent"
                  : "border-border bg-card/95 text-foreground/80 hover:text-foreground";

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-full border py-1.5 pl-1.5 pr-4 text-sm font-medium shadow-lg shadow-black/40 backdrop-blur transition-colors ${style}`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                      item.home ? "bg-white/20" : "bg-accent/10"
                    }`}
                  >
                    <Icon paths={item.icon} className="h-5 w-5" />
                  </span>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Le bouton rond, toujours dans le coin */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label={open ? "Fermer la navigation" : "Ouvrir la navigation"}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/40 ring-4 ring-background transition-transform hover:scale-105"
        >
          <Icon
            paths={open ? ["M6 6l12 12M18 6L6 18"] : ["M4 7h16M4 12h16M4 17h16"]}
            className="h-6 w-6"
          />
        </button>
      </div>
    </>
  );
}