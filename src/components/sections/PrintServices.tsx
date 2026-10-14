import { services } from "../../data";
import { Section } from "../ui/Section";
import { ServicePanel } from "../services/ServicePanel";

/** Every service laid out one after another. Hidden on screen, shown only in the PDF/print view. */
export function PrintServices() {
  return (
    <Section className="print-only" title="What we handle">
      {services.map((sv) => (
        <div className="print-svc" key={sv.id}>
          <h3 className="print-h">{sv.name}</h3>
          <ServicePanel service={sv} print />
        </div>
      ))}
    </Section>
  );
}
