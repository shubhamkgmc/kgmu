import { useState } from "react";
import { services } from "../../data";
import { Section } from "../ui/Section";
import { ServiceTabs } from "../services/ServiceTabs";
import { ServicePanel } from "../services/ServicePanel";

export function ServicesSection() {
  const [activeId, setActiveId] = useState(services[0].id);
  const current = services.find((s) => s.id === activeId)!;
  return (
    <Section id="work" className="screen-only" title="What we handle">
      <ServiceTabs services={services} activeId={activeId} onChange={setActiveId} />
      <ServicePanel key={current.id} service={current} />
    </Section>
  );
}
