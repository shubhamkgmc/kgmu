import { members, teamGroups } from "../../data";
import { Section } from "../ui/Section";
import { MemberCard } from "../team/MemberCard";

export function TeamSection() {
  return (
    <Section id="team" title="Our team">
      <div className="team-groups">
        {teamGroups.map((g) => (
          <div className="team-group" key={g.name}>
            <h3>{g.name}</h3>
            <p>{g.note}</p>
          </div>
        ))}
      </div>
      <h3 className="members-title">Team members</h3>
      <div className="members">
        {members.map((m) => (
          <MemberCard key={m.name} member={m} />
        ))}
      </div>
    </Section>
  );
}
