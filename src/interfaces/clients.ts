export interface Client {
  client_name: string;
  client_status: boolean;
  doa: Date;
  dob: Date;
  expenses: Expense[];
  id: string;
  law_firm: string;
  medical_status: MedicalStatus;
}

export enum MedicalStatus {
  ReadyForAssignment = "Ready for Assignment",
  Scheduled = "Scheduled",
  Signed = "Signed",
}

export interface Expense {
  name: string;
  doc: Date;
  amount: number;
  deducted_from: DeductedFrom;
  client: string;
}

export enum DeductedFrom {
  ClientSettlement = "Client Settlement",
  NotDeducted = "Not Deducted",
}

export type ClientTabType = "detail" | "expenses";
