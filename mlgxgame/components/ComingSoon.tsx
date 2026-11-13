import Link from "next/link";

type Props = {
  title: string;
  text: string;
};

export default function ComingSoon({ title, text }: Props) {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-[1600px] items-center justify-center px-4 py-12">
      <div className="max-w-md text-center">
        <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">
          Bientôt disponible
        </span>
        <h1 className="mt-4 text-3xl font-bold text-foreground">{title}</h1>
        <p className="mt-3 text-foreground/70">{text}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/online"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground/80 transition hover:border-accent hover:text-accent"
          >
            Voir les jeux
          </Link>
        </div>
      </div>
    </main>
  );
}