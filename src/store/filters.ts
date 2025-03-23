import { create } from "zustand";
import { MedicalStatus } from "../interfaces/clients";

type StoreFilters = {
  medicalStatus: MedicalStatus | null;
  setMedicalStatus: (medicalStatus: MedicalStatus | null) => void;
};

const useStoreFilters = create<StoreFilters>()((set) => ({
  medicalStatus: null,
  setMedicalStatus: (medicalStatus: MedicalStatus | null) =>
    set(() => ({ medicalStatus })),
}));

export default useStoreFilters;
