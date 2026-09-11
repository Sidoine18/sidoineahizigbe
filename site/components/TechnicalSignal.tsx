type TechnicalSignalProps = {
  steps: string[];
  title?: string;
  dense?: boolean;
};

export default function TechnicalSignal({ steps, title, dense = false }: TechnicalSignalProps) {
  return (
    <div className="w-full">
      {title && <p className="signal-label mb-4 uppercase tracking-wider">{title}</p>}
      <div className="relative">
        <div className="absolute left-0 right-0 top-1/2 h-px bg-line -translate-y-1/2" aria-hidden="true" />
        <div
          className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-signal shadow-[0_0_8px_2px_rgba(74,143,199,0.55)] animate-pulse-travel"
          aria-hidden="true"
        />
        <div className={`relative flex items-start justify-between ${dense ? "gap-2" : "gap-3"}`}>
          {steps.map((step, i) => (
            <div key={step} className="flex flex-col items-center text-center" style={{ flex: "1 0 0" }}>
              <span
                className="mb-2 h-2 w-2 rounded-full bg-panel border border-signal-dim"
                aria-hidden="true"
              />
              <span className={`signal-label ${dense ? "text-[0.62rem]" : ""}`}>
                {i.toString().padStart(2, "0")} — {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
