import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({
  title,
  oneLiner,
  status,
  tech,
  href,
  statusLabel,
  cta,
}: {
  title: string;
  oneLiner: string;
  status: string;
  tech: string[];
  href: string;
  statusLabel: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="group block border border-line bg-panel p-7 transition-colors duration-200 hover:border-signal"
    >
      <div className="flex items-start justify-between">
        <h3 className="font-display text-xl text-ink">{title}</h3>
        <ArrowUpRight
          size={18}
          className="shrink-0 text-faint transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal"
        />
      </div>
      <p className="mt-3 text-sm text-mute leading-relaxed">{oneLiner}</p>

      <div className="mt-6 signal-label text-faint">
        {statusLabel} · <span className="text-mute">{status}</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span key={item} className="signal-label border border-line px-2 py-1 text-mute">
            {item}
          </span>
        ))}
      </div>

      <span className="mt-6 inline-block text-sm text-signal">{cta}</span>
    </Link>
  );
}
