import type { Service } from "../../types";

interface Props {
  services: Service[];
  activeId: string;
  onSelect: (id: string) => void;
}

/** Previous / next buttons under the panel, so small-screen users never need to scroll back up. */
export function ServicePager({ services, activeId, onSelect }: Props) {
  const i = services.findIndex((s) => s.id === activeId);
  const prev = services[i - 1];
  const next = services[i + 1];
  return (
    <nav className="pager" aria-label="Previous and next section">
      {prev && (
        <button type="button" className="prev" onClick={() => onSelect(prev.id)}>
          <small>← Previous</small>
          {prev.icon} {prev.name}
        </button>
      )}
      {next && (
        <button type="button" className="next" onClick={() => onSelect(next.id)}>
          <small>Next →</small>
          {next.icon} {next.name}
        </button>
      )}
    </nav>
  );
}
