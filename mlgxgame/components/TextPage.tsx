import type { ReactNode } from "react";

type Props = {
  title: string;
  updated?: string;
  children: ReactNode;
};

export default function TextPage({ title, updated, children }: Props) {
  return (
    <main className="mx-auto w-full max-w-[1600px] px-4 py-6">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground">{title}</h1>
        {updated && (
          <p className="mt-1 text-sm text-foreground/50">
            Dernière mise à jour : {updated}
          </p>
        )}
        {/* Les [&_h2]: appliquent un style aux balises à l'intérieur */}
        <div className="mt-6 space-y-4 leading-relaxed text-foreground/80 [&_a]:text-accent [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
          {children}
        </div>
      </article>
    </main>
  );
}