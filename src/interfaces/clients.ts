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
  ReadyForAssignment = "Ready for Assignment",
  Scheduled = "Scheduled",
  Signed = "Signed",
}

export type ClientTabType = "detail" | "expenses";
