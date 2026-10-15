import type { PortalLink } from "../../types";

export function PortalCard({ portal: p }: { portal: PortalLink }) {
  return (
    <div className="portal">
      <span className="portal-icon" aria-hidden="true">
        🔗
      </span>
      <div className="portal-text">
        <h4>{p.title}</h4>
        <p className="portal-note">
          <span aria-hidden="true">🔒</span> {p.note}
        </p>
      </div>
      <a className="card-link" href={p.href} target="_blank" rel="noreferrer">
        {p.label} ↗
      </a>
    </div>
  );
}
