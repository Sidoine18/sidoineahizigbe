export default function ExpertiseCard({
  num,
  title,
  tag,
  text,
  points,
}: {
  num: string;
  title: string;
  tag: string;
  text: string;
  points: string[];
}) {
  return (
    <div className="border border-line bg-panel p-7">
      <div className="flex items-baseline justify-between">
        <span className="font-display text-3xl text-signal-dim">{num}</span>
        <span className="signal-label text-faint">{tag}</span>
      </div>
      <h3 className="mt-4 font-display text-xl text-ink">{title}</h3>
      <p className="mt-3 text-sm text-mute leading-relaxed">{text}</p>
      <ul className="mt-5 space-y-1.5">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2 text-sm text-mute">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal-dim" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
