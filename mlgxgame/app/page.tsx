import Image from "next/image";
import Link from "next/link";
import PlayNow from "@/components/PlayNow";
import DownloadGamesCard from "@/components/DownloadGamesCard";

const categories = [
  { label: "Jeux en ligne", href: "/online" },
  { label: "Jeux PC", href: "/pc" },
  { label: "Jeux mobile", href: "/mobile" },
  { label: "Templates", href: "/templates" },
  { label: "Boutique", href: "/boutique" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-[1600px] px-4 py-6">
      <Link
        href="/a-propos"
        className="group relative block overflow-hidden rounded-3xl border border-border bg-card px-6 py-10 transition hover:border-accent/60 sm:px-10 sm:py-14"
      >
        <div className="pointer-events-none absolute -right-10 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent/30 blur-3xl" />

        <Image
          src="/logo.svg"
          alt="Logo MLGxGame"
          width={256}
          height={256}
          priority
          className="pointer-events-none absolute -right-6 top-1/2 h-44 w-44 -translate-y-1/2 sm:right-8 sm:h-64 sm:w-64"
        />

        <div className="relative z-10 max-w-[75%] sm:max-w-md">
          <h1 className="text-3xl font-bold leading-tight tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] sm:text-5xl">
            Bienvenue sur <span className="text-accent">MLGxGame</span>
          </h1>
          <p className="mt-3 text-base text-foreground/70 sm:text-lg">
            Ton univers entièrement personnalisable
          </p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
            En savoir plus
            <span className="transition group-hover:translate-x-1">→</span>
          </span>
        </div>
      </Link>

      <section className="mt-8">
        <h2 className="mb-3 text-sm font-semibold text-foreground/60">
          Explorer
        </h2>
        <div className="-mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="shrink-0 snap-start rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground/80 transition hover:border-accent hover:text-accent"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </section>
      <PlayNow />
      <DownloadGamesCard />
    </main>
  );
}