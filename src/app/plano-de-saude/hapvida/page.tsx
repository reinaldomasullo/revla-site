import OperadoraPage, { operadoraMetadata } from "@/components/OperadoraPage";

export const metadata = operadoraMetadata("hapvida");

export default function Page() {
  return <OperadoraPage slug="hapvida" />;
}
