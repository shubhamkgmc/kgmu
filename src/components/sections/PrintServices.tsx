import { services } from "../../data";
import { usePdfExport } from "../../context/PdfExportContext";
import { Section } from "../ui/Section";
import { ServicePanel } from "../services/ServicePanel";

/** The sections chosen in the PDF dialog, laid out one after another. Hidden on screen, shown only when printing. */
export function PrintServices() {
  const { selectedIds } = usePdfExport();
  const chosen = services.filter((sv) => selectedIds.includes(sv.id));
  if (chosen.length === 0) return null;
  return (
    <Section className="print-only" title="What we handle">
      {chosen.map((sv) => (
        <div className="print-svc" key={sv.id}>
          <h3 className="print-h">{sv.name}</h3>
          <ServicePanel service={sv} print />
        </div>
      ))}
    </Section>
  );
}
