export type TimelineItem = {
  period: string;
  title: string;
  place: string;
  text: string;
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative border-l border-line pl-8">
      {items.map((item, i) => (
        <div key={i} className="relative pb-10 last:pb-0">
          <span className="absolute -left-[calc(2rem+3.5px)] top-1.5 h-2 w-2 rounded-full bg-signal" />
          <p className="signal-label text-signal">{item.period}</p>
          <h3 className="mt-2 font-display text-lg text-ink">{item.title}</h3>
          <p className="mt-1 text-sm text-faint">{item.place}</p>
          <p className="mt-3 text-sm text-mute leading-relaxed max-w-xl">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
