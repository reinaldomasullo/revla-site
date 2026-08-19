"use client";

export default function NumberField({
  label,
  value,
  onChange,
  suffix,
  min = 0,
  step = 1,
  helpText,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  suffix?: string;
  min?: number;
  step?: number;
  helpText?: string;
}) {
  const id = `field-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-[var(--color-ink)]">
        {label}
      </label>
      <div className="mt-1.5 flex items-center overflow-hidden rounded-lg border border-[var(--color-border)] focus-within:border-[var(--color-primary)] focus-within:ring-2 focus-within:ring-[var(--color-primary)]/30">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          className="w-full bg-transparent px-3 py-2.5 text-sm text-[var(--color-ink)] outline-none"
          value={Number.isFinite(value) ? value : 0}
          min={min}
          step={step}
          onChange={(e) => onChange(e.target.valueAsNumber || 0)}
        />
        {suffix && (
          <span className="shrink-0 border-l border-[var(--color-border)] bg-[var(--color-muted)] px-3 py-2.5 text-xs font-medium text-[var(--color-ink)]/60">
            {suffix}
          </span>
        )}
      </div>
      {helpText && <p className="mt-1 text-xs text-[var(--color-ink)]/70">{helpText}</p>}
    </div>
  );
}
