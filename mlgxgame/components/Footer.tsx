"use client"

import Link from "next/link";

const links = [
  { href: "/a-propos", label: "À propos" },
  { href: "/confidentialite", label: "Confidentialité" },
  { href: "/conditions", label: "Conditions d'utilisation" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-border">
      <div className="mx-auto w-full max-w-[1600px] px-4 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <p className="font-semibold text-foreground">MLGxGame</p>
            <p className="mt-2 text-sm text-foreground/60">
              Des jeux choisis pour divertir sainement.
            </p>
          </div>

          <nav
            aria-label="Liens du site"
            className="flex flex-col gap-2 text-sm text-foreground/70"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:emmbrayan145@gmail.com"
              className="hover:text-accent"
            >
              Contact
            </a>
          </nav>
        </div>

        <p className="mt-8 border-t border-border pt-6 text-xs leading-relaxed text-foreground/50">
          © {year} MLGxGame. Non affilié aux éditeurs de jeux : les noms et
          marques cités appartiennent à leurs propriétaires. Certains liens
          pourront être des liens d&apos;affiliation.
        </p>
      </div>
    </footer>
  );
}