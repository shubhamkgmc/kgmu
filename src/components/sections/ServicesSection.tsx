import { useState } from "react";
import { services } from "../../data";
import { Section } from "../ui/Section";
import { ServiceTabs } from "../services/ServiceTabs";
import { ServicePanel } from "../services/ServicePanel";
import { ServicePager } from "../services/ServicePager";

export function ServicesSection() {
  const [activeId, setActiveId] = useState(services[0].id);
  const index = services.findIndex((s) => s.id === activeId);
  const current = services[index];

  // used by the pager: switch and bring the top of the section into view
  const goTo = (id: string) => {
    setActiveId(id);
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Section id="work" className="screen-only" title="What we handle">
      <div className="work-layout">
        <ServiceTabs services={services} activeId={activeId} onChange={setActiveId} />
        <div className="work-main">
          <p className="work-count">
            {index + 1} of {services.length}
          </p>
          <ServicePanel key={current.id} service={current} />
          <ServicePager services={services} activeId={activeId} onSelect={goTo} />
        </div>
      </div>
    </Section>
  );
}
