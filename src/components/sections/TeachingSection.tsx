import { reports, teaching } from "../../data";
import { Section } from "../ui/Section";
import { StatGrid } from "../ui/StatGrid";
import { Chip, ChipList } from "../ui/Chips";

export function TeachingSection() {
  return (
    <Section className="alt" title="Teaching and learning">
      <StatGrid stats={teaching} keyPrefix="teaching" />
      <p className="lead">
        Online classes, tele-education, digital OPD and telemedicine kept teaching and care going through lockdowns.
      </p>
      <h3>Yearly IT upgrade reports</h3>
      <ChipList>
        {reports.map((r) => (
          <Chip key={r.year}>
            <a href={r.href} target="_blank" rel="noreferrer">
              {r.year}
            </a>
          </Chip>
        ))}
      </ChipList>
    </Section>
  );
}
