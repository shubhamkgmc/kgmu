import type { TaskGroup } from "../../types";

export function TaskGroupGrid({ groups }: { groups: TaskGroup[] }) {
  return (
    <div className="task-groups">
      {groups.map((g, i) => (
        <section className="task-group" key={g.title} style={{ ["--i" as string]: i }}>
          <h4>
            <span className="task-icon" aria-hidden="true">
              {g.icon}
            </span>
            {g.title}
          </h4>
          <ul>
            {g.items.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
