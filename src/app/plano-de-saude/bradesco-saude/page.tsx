import OperadoraPage, { operadoraMetadata } from "@/components/OperadoraPage";

export const metadata = operadoraMetadata("bradesco-saude");

export default function Page() {
  return <OperadoraPage slug="bradesco-saude" />;
}
