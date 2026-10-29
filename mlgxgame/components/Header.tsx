"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
    { label: "Accueil", href: "/" },
    { label: "Jeux", href: "/jeux" },
    { label: "Templates", href: "/templates" },
    { label: "Boutique", href: "/boutique" },
    { label: "Discussion", href: "/discussion" },
];

function MenuIcon({ open }: { open: boolean }) {
    return (
        <>
            <span
                className={`absolute h-0.5 w-5 rounded-full bg-foreground transition-all duration-300 ${open ? "rotate-45" : "-translate-y-1.5"
                    }`}
            />
            <span
                className={`absolute h-0.5 rounded-full bg-accent transition-all duration-300 ${open ? "w-5 -rotate-45" : "w-3 -translate-x-1 translate-y-1.5"
                    }`}
            />
        </>
    );
}

const iconButton =
    "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card transition hover:border-accent/60";

export default function Header() {
    const [open, setOpen] = useState(false);

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

    return (
        <>
            <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
                <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-3 gap-y-3 px-3 py-3 sm:px-4 md:flex-nowrap">
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
                className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}
            />

            <aside
                aria-hidden={!open}
                className={`fixed inset-y-0 left-0 z-50 flex w-72 max-w-[85%] flex-col border-r border-border bg-card p-4 transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between">
                    <span className="text-base font-bold tracking-tight">
                        MLG<span className="text-accent">x</span>Game
                    </span>
                    <button
                        type="button"
                        aria-label="Fermer le menu"
                        onClick={() => setOpen(false)}
                        className={iconButton}
                    >
                        <MenuIcon open={true} />
                    </button>
                </div>

                <nav className="mt-6 flex flex-col gap-1">
                    {links.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className="rounded-xl px-3 py-3 text-base text-foreground/80 transition hover:bg-background hover:text-accent"
                        >
                            {l.label}
                        </Link>
                    ))}
                </nav>
            </aside>
        </>
    );
}