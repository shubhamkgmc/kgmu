import { initials } from "../../utils/initials";
import type { Member } from "../../types";

export function MemberCard({ member: m }: { member: Member }) {
  return (
    <article className="member">
      <div className="avatar" aria-hidden="true">
        {initials(m.name)}
      </div>
      <h3>{m.name}</h3>
      <p className="member-role">{m.role}</p>
      <p className="member-group">{m.group}</p>
      {(m.phone || m.email) && (
        <p className="member-contact">
          {m.phone && <a href={`tel:${m.phone.replace(/\s+/g, "")}`}>{m.phone}</a>}
          {m.email && <a href={`mailto:${m.email}`}>{m.email}</a>}
        </p>
      )}
    </article>
  );
}
