import { StatGrid } from "../ui/StatGrid";
import { BarChart } from "../ui/BarChart";
import { PieChart } from "../ui/PieChart";
import { ModuleGrid } from "./ModuleGrid";
import { TaskGroupGrid } from "./TaskGroupGrid";
import { UpdateCards } from "./UpdateCards";
import { LifecycleFlow } from "./LifecycleFlow";
import type { Service } from "../../types";

interface Props {
  service: Service;
  /** Print copies skip the tab-panel ARIA role and id so ids stay unique. */
  print?: boolean;
}

export function ServicePanel({ service: s, print = false }: Props) {
  return (
    <div
      className={s.featured ? "panel featured" : "panel"}
      role={print ? undefined : "tabpanel"}
      id={print ? undefined : `panel-${s.id}`}
      aria-labelledby={print ? undefined : `tab-${s.id}`}
    >
      {s.featured ? (
        <div className={s.tone ? `banner tone-${s.tone}` : "banner"}>
          <span className="banner-icon" aria-hidden="true">
            {s.icon}
          </span>
          {s.badge && <span className="badge">{s.badge}</span>}
          <p>{s.summary}</p>
        </div>
      ) : (
        <p className="lead">{s.summary}</p>
      )}
      {s.stats && <StatGrid stats={s.stats} keyPrefix={s.id} />}
      {s.modules && (
        <>
          <h3>Modules</h3>
          <ModuleGrid modules={s.modules} />
        </>
      )}
      {s.lifecycle && (
        <>
          <h3>Email ID lifecycle</h3>
          <LifecycleFlow steps={s.lifecycle} />
        </>
      )}
      {s.taskGroups && (
        <>
          <h3>Work done by the IT Cell</h3>
          <TaskGroupGrid groups={s.taskGroups} />
        </>
      )}
      {s.updates && (
        <>
          <h3>{s.updatesTitle ?? "What we publish and keep updated"}</h3>
          <UpdateCards items={s.updates} />
        </>
      )}
      {s.bars && (
        <>
          <h3>{s.barsTitle} and share of total</h3>
          <div className="viz">
            <BarChart rows={s.bars} />
            <PieChart rows={s.bars} />
          </div>
        </>
      )}
      {s.points && (
        <ul className="points">
          {s.points.map((p, i) => (
            <li key={p} style={{ ["--i" as string]: i }}>
              {p}
            </li>
          ))}
        </ul>
      )}
      {s.link && (
        <a className="card-link" href={s.link.href} target="_blank" rel="noreferrer">
          {s.link.label} ↗
        </a>
      )}
    </div>
  );
}
