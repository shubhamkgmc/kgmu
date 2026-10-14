import { createContext, useContext, useState, type ReactNode } from "react";
import { services } from "../data";
import { printPage } from "../utils/print";

interface PdfExport {
  /** Ids of the "What we handle" tabs that will be included in the PDF. */
  selectedIds: string[];
  toggle: (id: string) => void;
  setAll: (on: boolean) => void;
  dialogOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
  /** Closes the dialog and opens the browser's print / save-as-PDF screen. */
  confirm: () => void;
}

const PdfExportContext = createContext<PdfExport | null>(null);

export function PdfExportProvider({ children }: { children: ReactNode }) {
  const [selectedIds, setSelectedIds] = useState<string[]>(services.map((s) => s.id));
  const [dialogOpen, setDialogOpen] = useState(false);

  const value: PdfExport = {
    selectedIds,
    toggle: (id) => setSelectedIds((ids) => (ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id])),
    setAll: (on) => setSelectedIds(on ? services.map((s) => s.id) : []),
    dialogOpen,
    openDialog: () => setDialogOpen(true),
    closeDialog: () => setDialogOpen(false),
    confirm: () => {
      setDialogOpen(false);
      // wait a moment so the dialog is gone before the print preview opens
      setTimeout(printPage, 200);
    },
  };

  return <PdfExportContext.Provider value={value}>{children}</PdfExportContext.Provider>;
}

export function usePdfExport(): PdfExport {
  const ctx = useContext(PdfExportContext);
  if (!ctx) throw new Error("usePdfExport must be used inside PdfExportProvider");
  return ctx;
}
