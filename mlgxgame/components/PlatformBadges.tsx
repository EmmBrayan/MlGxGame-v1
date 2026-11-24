const LABEL = { pc: "PC", android: "Android", ios: "iPhone" } as const;

// Un style par plateforme : PC plein violet, Android et iPhone avec un contour
const STYLE = {
  pc: "bg-accent/20 text-accent",
  android: "text-foreground/80 ring-1 ring-inset ring-accent/50",
  ios: "text-foreground/80 ring-1 ring-inset ring-foreground/30",
} as const;

export default function PlatformBadges({
  platforms,
}: {
  platforms: ("pc" | "android" | "ios")[];
}) {
  return (
    <>
      {platforms.map((p) => (
        <span
          key={p}
          className={`rounded-md px-1.5 py-0.5 text-[10px] font-semibold leading-none ${STYLE[p]}`}
        >
          {LABEL[p]}
        </span>
      ))}
    </>
  );
}