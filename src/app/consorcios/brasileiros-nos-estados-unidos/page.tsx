import ExteriorPage, { exteriorMetadata } from "@/components/ExteriorPage";

export const metadata = exteriorMetadata("estados-unidos");

export default function Page() {
  return <ExteriorPage slug="estados-unidos" />;
}
