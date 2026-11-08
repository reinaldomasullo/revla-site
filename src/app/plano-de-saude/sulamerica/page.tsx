import OperadoraPage, { operadoraMetadata } from "@/components/OperadoraPage";

export const metadata = operadoraMetadata("sulamerica");

export default function Page() {
  return <OperadoraPage slug="sulamerica" />;
}
