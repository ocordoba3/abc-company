export interface Client {
  client_name: string;
  client_status: boolean;
  doa: Date;
  dob: Date;
  id: string;
  law_firm: string;
  medical_status: MedicalStatus;
}

export enum MedicalStatus {
  Active = "Active",
  Pending = "Pending",
  InProgress = "In Progress",
}

export type ClientTabType = "detail" | "expenses";
