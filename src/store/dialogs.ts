import { create } from "zustand";

interface ConfirmDialog {
  handleSubmit: () => Promise<void>;
  title: string;
  description: string;
}

type StoreDialogs = {
  confirmDialog: ConfirmDialog | null;
  setConfirmDialog: (dialog: ConfirmDialog | null) => void;
  openAddExpenseDialog: boolean;
  setOpenAddExpenseDialog: () => void;
};

const useStoreDialogs = create<StoreDialogs>()((set) => ({
  confirmDialog: null,
  setConfirmDialog: (confirmDialog) => set(() => ({ confirmDialog })),
  openAddExpenseDialog: false,
  setOpenAddExpenseDialog: () =>
    set((store) => ({ openAddExpenseDialog: !store.openAddExpenseDialog })),
}));

export default useStoreDialogs;
