const LABEL = { pc: "PC", android: "Android" } as const;

export default function PlatformBadges({
    platforms,
}: {
    platforms: ("pc" | "android")[];
}) {
    return (
        <>
            {platforms.map((p) => (
                <span
                    key={p}
                    className={`rounded-md px-1.5 py-0.5 text-[10px] font-semibold leading-none ${p === "pc"
                            ? "bg-accent/20 text-accent"
                            : "text-foreground/80 ring-1 ring-inset ring-accent/50"
                        }`}
                >
                    {LABEL[p]}
                </span>
            ))}
        </>
    );
}