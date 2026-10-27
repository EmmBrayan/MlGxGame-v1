import Link from "next/link";

const categories = [
  { title: "Jeux en ligne", text: "Joue directement dans ton navigateur." },
    { title: "Templates web", text: "Un site prêt à publier, sans coder." },
      { title: "Équipement", text: "Casques, souris, chaises : notre sélection." },
      ];

      export default function Home() {
        return (
            <main className="glow min-h-screen">
                  <section className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-5 pb-16 pt-28 text-center">
                         <span className="rounded-full border border-border bg-card/60 px-4 py-1 text-xs tracking-widest text-accent">
                                    JOUE. COMPÈTE. GAGNE.
                                            </span>
                                                    <h1 className="text-gradient text-5xl font-bold leading-tight sm:text-7xl">
                                                              Bienvenue sur MLGxGame
                                                                      </h1>
                                                                              <p className="max-w-xl text-lg text-foreground/60">
                                                                                        Les meilleurs jeux, templates et équipements gaming au même endroit.
                                                                                                </p>
                                                                                                        <div className="flex flex-col gap-3 sm:flex-row">
                                                                                                                  <Link
                                                                                                                              href="/jeux"
                                                                                                                                          className="rounded-xl bg-accent px-6 py-3 font-semibold shadow-lg shadow-accent/30 transition hover:-translate-y-0.5 hover:shadow-accent/50"
                                                                                                                                                    >
                                                                                                                                                                Découvrir les jeux
                                                                                                                                                                          </Link>
                                                                                                                                                                                    <Link
                                                                                                                                                                                                href="/discussion"
                                                                                                                                                                                                            className="rounded-xl border border-border bg-card/60 px-6 py-3 font-semibold transition hover:border-accent"
                                                                                                                                                                                                                      >
                                                                                                                                                                                                                                  Rejoindre la communauté
                                                                                                                                                                                                                                            </Link>
                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                          </section>

                                                                                                                                                                                                                                                                <section className="mx-auto grid max-w-5xl gap-4 px-5 pb-24 sm:grid-cols-3">
                                                                                                                                                                                                                                                                        {categories.map((c) => (
                                                                                                                                                                                                                                                                                  <div
                                                                                                                                                                                                                                                                                              key={c.title}
                                                                                                                                                                                                                                                                                                          className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-accent/60"
                                                                                                                                                                                                                                                                                                                    >
                                                                                                                                                                                                                                                                                                                                <h2 className="mb-2 text-lg font-semibold">{c.title}</h2>
                                                                                                                                                                                                                                                                                                                                            <p className="text-sm text-foreground/60">{c.text}</p>
                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                              ))}
                                                                                                                                                                                                                                                                                                                                                                    </section>
                                                                                                                                                                                                                                                                                                                                                                        </main>
                                                                                                                                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                                                                                                                                          }
