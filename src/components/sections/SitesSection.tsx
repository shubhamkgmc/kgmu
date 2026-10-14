import { sites } from "../../data";
import { Section } from "../ui/Section";
import { Chip, ChipList } from "../ui/Chips";

export function SitesSection() {
  return (
    <Section id="coverage" className="alt" title="Sites we connect">
      <p className="lead">The main campus and units outside it are linked through one data centre.</p>
      <ChipList>
        {sites.map((x) => (
          <Chip key={x}>{x}</Chip>
        ))}
      </ChipList>
    </Section>
  );
}
