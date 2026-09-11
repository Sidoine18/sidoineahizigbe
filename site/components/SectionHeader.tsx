export default function SectionHeader({
  kicker,
  title,
  intro,
  align = "left",
}: {
  kicker?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {kicker && <p className="signal-label mb-3 text-signal">{kicker}</p>}
      <h2 className="font-display text-3xl sm:text-4xl font-medium text-ink tracking-tight">{title}</h2>
      {intro && <p className="mt-4 text-mute leading-relaxed">{intro}</p>}
    </div>
  );
}
