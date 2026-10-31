import Link from "next/link";

export default function MoreCard({
  href,
  label = "Plus de jeux",
}: {
  href: string;
  label?: string;
}) {
  return (
    <Link
      href={href}
      className="flex aspect-[3/4] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border text-foreground/60 transition hover:border-accent hover:text-accent"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-current text-2xl leading-none">
        +
      </span>
      <span className="text-xs font-medium">{label}</span>
    </Link>
  );
}