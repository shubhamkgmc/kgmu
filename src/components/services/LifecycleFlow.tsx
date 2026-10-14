import type { LifecycleStep } from "../../types";

export function LifecycleFlow({ steps }: { steps: LifecycleStep[] }) {
  return (
    <ol className="flow">
      {steps.map((st, i) => (
        <li className="flow-step" key={st.label} style={{ ["--i" as string]: i }}>
          <span className="flow-icon" aria-hidden="true">
            {st.icon}
          </span>
          <span className="flow-label">{st.label}</span>
        </li>
      ))}
    </ol>
  );
}
