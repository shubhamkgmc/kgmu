import { Stat } from "./Stat";
import type { StatItem } from "../../types";

export function StatGrid({ stats, keyPrefix }: { stats: StatItem[]; keyPrefix: string }) {
  return (
    <div className="stats">
      {stats.map((st) => (
        <Stat key={`${keyPrefix}-${st.label}`} {...st} />
      ))}
    </div>
  );
}
