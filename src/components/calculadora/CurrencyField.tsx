"use client";

/**
 * Campo de valor em reais com máscara "R$ x.xxx,xx": o usuário digita só números
 * (como numa maquininha) e a formatação com separador de milhar e centavos é
 * aplicada automaticamente — melhor experiência do que um <input type="number">
 * puro pra valores grandes em reais.
 */
export default function CurrencyField({
  label,
  value,
  onChange,
  helpText,
}: {
  label: string;
  /** null = campo vazio (não preenchido pelo usuário ainda). Valor em reais (ex: 1234.56). */
  value: number | null;
  onChange: (value: number | null) => void;
  helpText?: string;
}) {
  const id = `field-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  const formatted =
    value === null
      ? ""
      : new Intl.NumberFormat("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "");
    if (digits === "") {
      onChange(null);
      return;
    }
    // Últimos 2 dígitos são sempre os centavos, igual a um campo de valor monetário.
    onChange(parseInt(digits, 10) / 100);
  };

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-[var(--color-ink)]">
        {label}
      </label>
      <div className="mt-1.5 flex items-center overflow-hidden rounded-lg border border-[var(--color-border)] focus-within:border-[var(--color-primary)] focus-within:ring-2 focus-within:ring-[var(--color-primary)]/30">
        <span className="shrink-0 border-r border-[var(--color-border)] bg-[var(--color-muted)] px-3 py-2.5 text-xs font-medium text-[var(--color-ink)]/60">
          R$
        </span>
        <input
          id={id}
          type="text"
          inputMode="decimal"
          placeholder="0,00"
          className="w-full bg-transparent px-3 py-2.5 text-sm text-[var(--color-ink)] outline-none"
          value={formatted}
          onChange={handleChange}
        />
      </div>
      {helpText && <p className="mt-1 text-xs text-[var(--color-ink)]/70">{helpText}</p>}
    </div>
  );
}
