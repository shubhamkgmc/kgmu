import { CHART_COLORS } from "../../constants/chartColors";
import type { ChartRow } from "../../types";

export function PieChart({ rows }: { rows: ChartRow[] }) {
  const total = rows.reduce((a, r) => a + r.value, 0);
  let acc = 0;
  return (
    <div className="pie">
      <svg viewBox="0 0 32 32" className="pie-svg" role="img" aria-label="Share of each category">
        {rows.map((r, i) => {
          const pct = (r.value / total) * 100;
          const slice = (
            <circle
              key={r.label}
              cx="16"
              cy="16"
              r="7.9577"
              fill="none"
              stroke={CHART_COLORS[i % CHART_COLORS.length]}
              strokeWidth="15.9"
              strokeDasharray={`${pct / 2} ${50 - pct / 2}`}
              strokeDashoffset={12.5 - acc / 2}
            />
          );
          acc += pct;
          return slice;
        })}
      </svg>
      <ul className="pie-legend">
        {rows.map((r, i) => (
          <li key={r.label}>
            <i style={{ background: CHART_COLORS[i % CHART_COLORS.length] }} />
            <span>{r.label}</span>
            <b>{Math.round((r.value / total) * 100)}%</b>
          </li>
        ))}
      </ul>
    </div>
  );
}
