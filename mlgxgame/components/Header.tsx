"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Le menu : une entrée peut avoir un sous-menu ("children")
const links = [
  { label: "Accueil", href: "/" },
  {
    label: "games",
    href: "/online",
    children: [
      { label: "En ligne", href: "/online" },
      { label: "PC", href: "/pc" },
      { label: "Mobile", href: "/mobile" },
      { label: "Tous à télécharger", href: "/downloads" },
    ],
  },
  { label: "Templates", href: "/templates" },
  { label: "Boutique", href: "/boutique" },
  { label: "Discussion", href: "/discussion" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <>
      <span
        className={`absolute h-0.5 w-5 rounded-full bg-foreground transition-all duration-300 ${
          open ? "rotate-45" : "-translate-y-1.5"
        }`}
      />
      <span
        className={`absolute h-0.5 rounded-full bg-accent transition-all duration-300 ${
          open ? "w-5 -rotate-45" : "w-3 -translate-x-1 translate-y-1.5"
        }`}
      />
    </>
  );
}

const iconButton =
  "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card transition hover:border-accent/60";

// Le style commun de toutes les entrées du menu
const itemBase =
  "flex w-full items-center justify-between rounded-xl px-3 py-3 text-[15px] font-medium transition";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // le menu est-il ouvert ?
  const [gamesOpen, setGamesOpen] = useState(false); // le sous-menu "games" est-il ouvert ?

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // La page courante est-elle celle de ce lien ?
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-x-3 gap-y-3 px-3 py-3 sm:px-4 md:flex-nowrap">
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              onClick={() => setOpen((prev) => !prev)}
              className={iconButton}
            >
              <MenuIcon open={open} />
            </button>
            <Link href="/" className="text-base font-bold tracking-tight">
              MLG<span className="text-accent">x</span>Game
            </Link>
          </div>

          <form
            role="search"
            onSubmit={(e) => e.preventDefault()}
            className="relative order-3 w-full md:order-none md:mx-auto md:w-auto md:max-w-md md:flex-1"
          >
            <svg
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              type="search"
              placeholder="Rechercher un jeu..."
              className="h-10 w-full rounded-xl border border-border bg-card pl-9 pr-3 text-sm outline-none transition placeholder:text-foreground/40 focus:border-accent"
            />
          </form>

          <div className="ml-auto flex items-center gap-1 md:ml-0">
            <Link
              href="/connexion"
              className="flex h-10 items-center rounded-xl px-2.5 text-sm font-medium text-foreground/70 transition hover:text-foreground"
            >
              Connexion
            </Link>
            <Link
              href="/inscription"
              className="flex h-10 items-center rounded-xl bg-accent px-3.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Inscription
            </Link>
          </div>
        </div>
      </header>

      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        aria-hidden={!open}
        className={`fixed inset-y-0 left-0 z-50 flex w-72 max-w-[85%] flex-col border-r border-border bg-card p-4 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* En haut : seulement le bouton pour fermer */}
        <div className="flex justify-end">
          <button
            type="button"
            aria-label="Fermer le menu"
            onClick={() => setOpen(false)}
            className={iconButton}
          >
            <MenuIcon open={true} />
          </button>
        </div>

        {/* Les entrées du menu */}
        <nav className="mt-4 flex flex-1 flex-col gap-1 overflow-y-auto">
          <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-widest text-foreground/40">
            Navigation
          </p>

          {links.map((l) =>
            "children" in l ? (
              <div key={l.label}>
                <button
                  type="button"
                  onClick={() => setGamesOpen((prev) => !prev)}
                  aria-expanded={gamesOpen}
                  className={`${itemBase} ${
                    gamesOpen
                      ? "text-accent"
                      : "text-foreground/80 hover:bg-background hover:text-accent"
                  }`}
                >
                  {l.label}
                  <svg
                    viewBox="0 0 24 24"
                    className={`h-4 w-4 transition-transform duration-200 ${
                      gamesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {/* Le sous-menu : il se déplie en douceur */}
                <div
                  inert={!gamesOpen}
                  className={`grid transition-all duration-200 ${
                    gamesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="ml-3 mt-1 flex flex-col gap-1 border-l border-border pl-2">
                      {l.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className={`rounded-lg px-3 py-2.5 text-sm transition ${
                            isActive(c.href)
                              ? "bg-accent/10 font-medium text-accent"
                              : "text-foreground/70 hover:bg-background hover:text-accent"
                          }`}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`${itemBase} ${
                  isActive(l.href)
                    ? "bg-accent/10 text-accent"
                    : "text-foreground/80 hover:bg-background hover:text-accent"
                }`}
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>

        {/* En bas : connexion, puis le logo */}
        <div className="mt-4 border-t border-border pt-4">
          {/* Plus tard : si la personne est connectée, on affichera ici son profil à la place de ces deux boutons */}
          <Link
            href="/connexion"
            onClick={() => setOpen(false)}
            className="flex h-11 w-full items-center justify-center rounded-xl bg-accent text-sm font-semibold text-white transition hover:opacity-90"
          >
            Connexion
          </Link>
          <Link
            href="/inscription"
            onClick={() => setOpen(false)}
            className="mt-2 flex h-11 w-full items-center justify-center rounded-xl border border-border text-sm font-medium text-foreground/80 transition hover:border-accent/60 hover:text-accent"
          >
            Créer un compte
          </Link>

          <div className="mt-5 flex items-center gap-2.5 px-1">
            <Image src="/logo.svg" alt="" width={32} height={32} />
            <span className="text-base font-bold tracking-tight">
              MLG<span className="text-accent">x</span>Game
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}