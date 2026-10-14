import { eservices } from "../../data";
import { Section } from "../ui/Section";
import { EserviceCard } from "../digital/EserviceCard";

export function DigitalServicesSection() {
  return (
    <Section title="Digital services we run">
      <div className="cards">
        {eservices.map((e) => (
          <EserviceCard key={e.name} service={e} />
        ))}
      </div>
    </Section>
  );
}
