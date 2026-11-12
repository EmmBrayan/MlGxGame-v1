"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Ordre de la barre : 2 boutons, l'accueil au centre, 2 boutons
const items = [
    {
        href: "/online",
        label: "games",
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
        home: true, // celui-ci est le gros cercle violet
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
];

// Icône "étincelles" pour l'IA
const aiIcon = [
    "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z",
    "M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z",
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

    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-3 z-40 flex justify-center px-3 lg:inset-x-auto lg:bottom-auto lg:right-4 lg:top-1/2 lg:-translate-y-1/2 lg:px-0">
            {/* Plus de "gap" : la barre et le cercle IA sont collés */}
            <div className="pointer-events-auto flex items-center lg:flex-col">
                <nav
                    aria-label="Navigation rapide"
                    className="flex items-center gap-1 rounded-full border border-border bg-card/90 p-1.5 pr-5 shadow-lg shadow-black/40 backdrop-blur lg:flex-col lg:pb-5 lg:pr-1.5"
                >
                    {items.map((item) => {
                        const active =
                            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                        const style = item.home
                            ? `h-10 w-10 bg-accent text-white shadow-md shadow-accent/40 ${active ? "ring-2 ring-white/30" : ""
                            }`
                            : `h-9 w-9 ${active
                                ? "bg-accent/15 text-accent"
                                : "text-foreground/60 hover:text-foreground"
                            }`;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                title={item.label}
                                aria-label={item.label}
                                className={`flex items-center justify-center rounded-full transition-colors ${style}`}
                            >
                                <Icon paths={item.icon} className="h-5 w-5" />
                            </Link>
                        );
                    })}
                </nav>

                {/* Le cercle IA : posé sur le bout de la barre */}
                <Link
                    href="/agent"
                    title="Assistant IA"
                    aria-label="Assistant IA"
                    className="relative z-10 -ml-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-card text-accent shadow-lg shadow-accent/30 ring-4 ring-background transition-transform hover:scale-105 lg:ml-0 lg:-mt-4"
                >
                    <Icon paths={aiIcon} className="h-10 w-10" />
                </Link>
            </div>
        </div>
    );
}
