import { defaultModuleIcon, moduleIcons } from "../../data";

export function ModuleGrid({ modules }: { modules: string[] }) {
  return (
    <ul className="modules">
      {modules.map((m, i) => (
        <li className="module" key={m} style={{ ["--i" as string]: i }}>
          <span className="module-icon" aria-hidden="true">
            {moduleIcons[m] ?? defaultModuleIcon}
          </span>
          <span className="module-name">{m}</span>
        </li>
      ))}
    </ul>
  );
}
