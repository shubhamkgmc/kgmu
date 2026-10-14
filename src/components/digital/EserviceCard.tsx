import { useState } from "react";
import type { Eservice } from "../../types";

export function EserviceCard({ service: e }: { service: Eservice }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={open ? "card open" : "card"}>
      <button className="card-head" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span>
          <h3>{e.name}</h3>
          <p>{e.note}</p>
        </span>
        <span className="chev" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>
      <div className="card-more">
        <div className="card-more-inner" aria-hidden={!open}>
          <div className="card-more-body">
            <ul>
              {e.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <a className="card-link" href={e.href} target="_blank" rel="noreferrer">
              {e.linkLabel} ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
