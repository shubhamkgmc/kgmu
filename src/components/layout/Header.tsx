import { navLinks, org } from "../../data";
import { printPage } from "../../utils/print";

export function Header() {
  return (
    <header className="top">
      <div className="brand">
        <strong>{org.unit}</strong>
        <span>{org.university}</span>
      </div>
      <nav>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
        <button className="pdf-btn no-print" onClick={printPage}>
          Download PDF
        </button>
      </nav>
    </header>
  );
}
