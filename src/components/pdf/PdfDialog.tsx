import { useEffect, useRef } from "react";
import { services } from "../../data";
import { usePdfExport } from "../../context/PdfExportContext";

export function PdfDialog() {
  const { selectedIds, toggle, setAll, dialogOpen, closeDialog, confirm } = usePdfExport();
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (dialogOpen && !d.open) d.showModal();
    if (!dialogOpen && d.open) d.close();
  }, [dialogOpen]);

  const count = selectedIds.length;

  // A click on the dark backdrop lands on the <dialog> element itself, so it closes the dialog.
  const onBackdropClick = (e: { target: unknown; currentTarget: unknown }) => {
    if (e.target === e.currentTarget) closeDialog();
  };

  return (
    <dialog
      ref={ref}
      className="pdf-dialog no-print"
      aria-labelledby="pdf-title"
      onClose={closeDialog}
      onClick={onBackdropClick}
    >
      <div className="pdf-dialog-body">
        <div className="pdf-head">
          <h2 id="pdf-title">Choose what goes in the PDF</h2>
          <p>
            Tick the sections of "What we handle" to include. The cover, sites, digital services, teaching and team
            sections are always included.
          </p>
        </div>

        <div className="pdf-body">
          <div className="pdf-tools">
            <button type="button" onClick={() => setAll(true)}>
              Select all
            </button>
            <button type="button" onClick={() => setAll(false)}>
              Clear all
            </button>
            <span className="pdf-count">
              {count} of {services.length} selected
            </span>
          </div>
          <ul className="pdf-list">
            {services.map((s) => {
              const on = selectedIds.includes(s.id);
              return (
                <li key={s.id} className="pdf-item">
                  <label className={on ? "on" : undefined}>
                    <input type="checkbox" checked={on} onChange={() => toggle(s.id)} />
                    <span aria-hidden="true">{s.icon}</span>
                    <span>{s.name}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="pdf-foot">
          <button type="button" onClick={closeDialog}>
            Cancel
          </button>
          <button type="button" className="primary" disabled={count === 0} onClick={confirm}>
            Download PDF
          </button>
        </div>
      </div>
    </dialog>
  );
}
