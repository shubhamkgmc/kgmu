import { useCountUp } from "../../hooks/useCountUp";
import { formatIN } from "../../utils/format";
import type { StatItem } from "../../types";

export function Stat({ label, value, suffix = "" }: StatItem) {
  const v = useCountUp(value);
  const shown = Number.isInteger(value) ? formatIN(Math.round(v)) : v.toFixed(1);
  return (
    <div className="stat">
      <div className="stat-num">
        {shown}
        <span>{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
