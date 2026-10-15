import { useEffect, useRef } from "react";
import type { Service } from "../../types";

interface Props {
  services: Service[];
  activeId: string;
  onChange: (id: string) => void;
}

/**
 * Sidebar list on large screens, swipeable strip on small ones (layout is pure CSS).
 * Supports arrow keys, Home and End, and keeps the active tab in view.
 */
export function ServiceTabs({ services, activeId, onChange }: Props) {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = listRef.current;
    const btn = list?.querySelector<HTMLElement>('[aria-selected="true"]');
    if (!list || !btn) return;
    // scrolls only the tab list itself, never the page
    list.scrollTo({
      left: btn.offsetLeft - list.clientWidth / 2 + btn.clientWidth / 2,
      top: btn.offsetTop - list.clientHeight / 2 + btn.clientHeight / 2,
      behavior: "smooth",
    });
  }, [activeId]);

  const onKeyDown = (e: { key: string; preventDefault: () => void }) => {
    const i = services.findIndex((s) => s.id === activeId);
    let next = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % services.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + services.length) % services.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = services.length - 1;
    if (next < 0) return;
    e.preventDefault();
    onChange(services[next].id);
    document.getElementById(`tab-${services[next].id}`)?.focus();
  };

  return (
    <div className="tabs" role="tablist" aria-label="What we handle" ref={listRef} onKeyDown={onKeyDown}>
      {services.map((s) => (
        <button
          key={s.id}
          id={`tab-${s.id}`}
          role="tab"
          aria-selected={s.id === activeId}
          aria-controls={`panel-${s.id}`}
          tabIndex={s.id === activeId ? 0 : -1}
          className={s.id === activeId ? "tab on" : "tab"}
          onClick={() => onChange(s.id)}
        >
          <span aria-hidden="true">{s.icon}</span>
          {s.name}
        </button>
      ))}
    </div>
  );
}
