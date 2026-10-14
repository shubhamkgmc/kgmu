import type { UpdateItem } from "../../types";

export function UpdateCards({ items }: { items: UpdateItem[] }) {
  return (
    <div className="updates">
      {items.map((u, i) => (
        <article className="update" key={u.title} style={{ ["--i" as string]: i }}>
          <span className="update-icon" aria-hidden="true">
            {u.icon}
          </span>
          <div>
            <h4>{u.title}</h4>
            <p>{u.note}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
