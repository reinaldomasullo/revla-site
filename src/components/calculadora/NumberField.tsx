"use client";

export default function NumberField({
  label,
  value,
  onChange,
  suffix,
  placeholder,
  helpText,
}: {
  label: string;
  /** null = campo vazio (não preenchido pelo usuário ainda). */
  value: number | null;
  onChange: (value: number | null) => void;
  suffix?: string;
  /** Exemplo de formato, exibido apagado — nunca um valor de referência real. */
  placeholder?: string;
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
          placeholder={placeholder}
          className="w-full bg-transparent px-3 py-2.5 text-sm text-[var(--color-ink)] outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          value={value === null ? "" : value}
          onChange={(e) => {
            const raw = e.target.value;
            onChange(raw === "" ? null : e.target.valueAsNumber);
          }}
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
