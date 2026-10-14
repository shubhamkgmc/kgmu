import { formatIN } from "../../utils/format";
import type { ChartRow } from "../../types";

export function BarChart({ rows }: { rows: ChartRow[] }) {
  const max = Math.max(...rows.map((r) => r.value));
  return (
    <ul className="bars">
      {rows.map((r) => (
        <li key={r.label}>
          <span className="bar-name">{r.label}</span>
          <span className="bar-track">
            <span className="bar-fill" style={{ width: `${(r.value / max) * 100}%` }} />
          </span>
          <span className="bar-val">{formatIN(r.value)}</span>
        </li>
      ))}
    </ul>
  );
}
