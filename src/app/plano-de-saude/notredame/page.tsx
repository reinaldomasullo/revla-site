import OperadoraPage, { operadoraMetadata } from "@/components/OperadoraPage";

export const metadata = operadoraMetadata("notredame");

export default function Page() {
  return <OperadoraPage slug="notredame" />;
}
