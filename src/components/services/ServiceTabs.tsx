import type { Service } from "../../types";

interface Props {
  services: Service[];
  activeId: string;
  onChange: (id: string) => void;
}

export function ServiceTabs({ services, activeId, onChange }: Props) {
  return (
    <div className="tabs" role="tablist">
      {services.map((s) => (
        <button
          key={s.id}
          role="tab"
          aria-selected={s.id === activeId}
          aria-controls={`panel-${s.id}`}
          className={s.id === activeId ? "tab on" : "tab"}
          onClick={() => onChange(s.id)}
        >
          {s.name}
        </button>
      ))}
    </div>
  );
}
