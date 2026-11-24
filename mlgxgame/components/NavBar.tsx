"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type UIEvent } from "react";
import AssistantPanel from "@/components/AssistantPanel";

// Icône "étincelles" pour l'IA
const aiIcon = [
  "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z",
  "M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z",
];

// Les pages du menu, dans l'ordre d'affichage
const items = [
  { href: "/", label: "Accueil", home: true, icon: ["M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"] },
  {
    href: "/online",
    label: "Jeux en ligne",
    icon: [
      "M17.3 5H6.7a4 4 0 0 0-3.9 3.2l-1.3 6.5A3 3 0 0 0 4.4 18.3c.9 0 1.7-.5 2.1-1.2L7.6 15h8.8l1.1 2.1c.4.7 1.2 1.2 2.1 1.2a3 3 0 0 0 2.9-3.6l-1.3-6.5A4 4 0 0 0 17.3 5z",
      "M6 12h4M8 10v4",
    ],
  },
  { href: "/pc", label: "Jeux PC", icon: ["M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z", "M8 21h8M12 16v5"] },
  { href: "/mobile", label: "Jeux mobile", icon: ["M8 2h8a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z", "M11 18h2"] },
  { href: "/downloads", label: "Jeux à télécharger", icon: ["M12 3v12M7 10l5 5 5-5", "M4 21h16"] },
  { href: "/templates", label: "Templates", icon: ["M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z", "M3 9h18M9 21V9"] },
  { href: "/boutique", label: "Boutique", icon: ["M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z", "M3 6h18", "M16 10a4 4 0 0 1-8 0"] },
  { href: "/connexion", label: "Connexion", icon: ["M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2", "M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"] },
  { href: "/inscription", label: "Inscription", icon: ["M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", "M19 8v6M22 11h-6"] },
  { href: "/discussion", label: "Discussion", icon: ["M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"] },
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
  const [open, setOpen] = useState(false); // la navigation est-elle ouverte ?
  const [aiOpen, setAiOpen] = useState(false); // le panneau IA est-il ouvert ?
  // Faut-il estomper le haut et le bas de la liste ?
  const [fade, setFade] = useState({ top: false, bottom: true });

  // La touche Échap referme le menu
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // À chaque défilement, on regarde s'il reste des entrées cachées en haut ou en bas
  function onScroll(e: UIEvent<HTMLUListElement>) {
    const el = e.currentTarget;
    setFade({
      top: el.scrollTop > 4,
      bottom: el.scrollTop + el.clientHeight < el.scrollHeight - 4,
    });
  }

  // Le dégradé qui fait disparaître les entrées aux bords
  const mask = `linear-gradient(to bottom, ${fade.top ? "transparent" : "#000"} 0, #000 28px, #000 calc(100% - 28px), ${fade.bottom ? "transparent" : "#000"} 100%)`;

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

      <div className="pointer-events-none fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3">
        {/* Le panneau qui sort */}
        <div
          inert={!open}
          className={`flex origin-bottom-right flex-col items-end gap-2 transition duration-200 ${
            open
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-3 scale-95 opacity-0"
          }`}
        >
          {/* La liste qui défile : environ 6 entrées visibles */}
          <ul
            onScroll={onScroll}
            style={{ maskImage: mask, WebkitMaskImage: mask }}
            className="flex max-h-[min(20rem,50vh)] flex-col items-end gap-2 overflow-y-auto overscroll-contain px-1 py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              const style = item.home
                ? "border-accent bg-accent text-white"
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

          {/* L'IA reste fixe sous la liste : toujours visible */}
          <button
            type="button"
            onClick={() => {
              setOpen(false); // on referme la navigation
              setAiOpen(true); // et on ouvre le panneau IA
            }}
            className="mr-1 flex items-center gap-3 rounded-full border border-accent bg-card py-1.5 pl-1.5 pr-4 text-sm font-medium text-accent shadow-lg shadow-accent/30 backdrop-blur"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10">
              <Icon paths={aiIcon} className="h-5 w-5" />
            </span>
            Assistant IA
          </button>
        </div>

        {/* Le bouton rond, toujours dans le coin */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label={open ? "Fermer la navigation" : "Ouvrir la navigation"}
          className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/40 ring-4 ring-background transition-transform hover:scale-105"
        >
          <Icon
            paths={open ? ["M6 6l12 12M18 6L6 18"] : ["M4 7h16M4 12h16M4 17h16"]}
            className="h-6 w-6"
          />
        </button>
      </div>

      {/* Le panneau de l'assistant IA, au centre de l'écran */}
      <AssistantPanel open={aiOpen} onClose={() => setAiOpen(false)} />
    </>
  );
}