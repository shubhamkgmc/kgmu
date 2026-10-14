import { COVER_IMAGE, glance } from "../../data";
import { usePdfExport } from "../../context/PdfExportContext";

export function Hero() {
  const { openDialog } = usePdfExport();
  return (
    <section className="hero">
      <img className="hero-bg" src={COVER_IMAGE} alt="KGMU main building" />
      <div className="hero-shade" />
      <div>
        <h1>Keeping KGMU's systems running, every hour of every day.</h1>
        <p>
          The IT Cell runs the network, phone lines, security cameras and digital services across the hospital,
          colleges and hostels. Here is what that work looks like.
        </p>
        <div className="btn-row no-print">
          <a className="btn" href="#work">
            See our work
          </a>
          <button className="btn ghost" onClick={openDialog}>
            Download as PDF (A4)
          </button>
        </div>
      </div>
      <aside className="board" aria-label="Campus at a glance">
        <h2>Campus at a glance</h2>
        {glance.map((g) => (
          <div className="board-row" key={g.label}>
            <span>{g.label}</span>
            <b className={g.highlight ? "ok" : undefined}>{g.value}</b>
          </div>
        ))}
      </aside>
    </section>
  );
}
