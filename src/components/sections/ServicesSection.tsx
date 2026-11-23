import { useEffect, useState } from "react";
import { services } from "../../data";
import { Section } from "../ui/Section";
import { ServiceTabs } from "../services/ServiceTabs";
import { ServicePanel } from "../services/ServicePanel";
import { ServicePager } from "../services/ServicePager";

function getServiceIdFromUrl() {
  const requestedId = new URLSearchParams(window.location.search).get("service");
  return services.find((service) => service.id === requestedId)?.id ?? services[0].id;
}

export function ServicesSection() {
  const [activeId, setActiveId] = useState(getServiceIdFromUrl);
  const index = services.findIndex((s) => s.id === activeId);
  const current = services[index];

  useEffect(() => {
    const url = new URL(window.location.href);
    const hasValidService = services.some((service) => service.id === url.searchParams.get("service"));
    if (!hasValidService) return;

    if (url.hash !== "#work") {
      url.hash = "work";
      window.history.replaceState(window.history.state, "", url);
    }
    document.getElementById("work")?.scrollIntoView();
  }, []);

  useEffect(() => {
    const syncServiceFromUrl = () => setActiveId(getServiceIdFromUrl());
    window.addEventListener("popstate", syncServiceFromUrl);
    return () => window.removeEventListener("popstate", syncServiceFromUrl);
  }, []);

  const selectService = (id: string) => {
    setActiveId(id);
    const url = new URL(window.location.href);
    url.searchParams.set("service", id);
    url.hash = "work";
    if (url.href !== window.location.href) {
      window.history.pushState(window.history.state, "", url);
    }
  };

  // used by the pager: switch and bring the top of the section into view
  const goTo = (id: string) => {
    selectService(id);
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Section id="work" className="screen-only" title="What we handle">
      <div className="work-layout">
        <ServiceTabs services={services} activeId={activeId} onChange={selectService} />
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
