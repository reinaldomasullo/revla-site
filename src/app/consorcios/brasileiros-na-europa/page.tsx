import ExteriorPage, { exteriorMetadata } from "@/components/ExteriorPage";

export const metadata = exteriorMetadata("europa");

export default function Page() {
  return <ExteriorPage slug="europa" />;
}
