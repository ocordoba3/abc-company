export interface Client {
  id: string;
  client_name: string;
  doa: Date;
  medical_status: MedicalStatus;
  client_status: boolean;
  law_firm: string;
  birthday: Date;
}

export enum MedicalStatus {
  ReadyForAssignment = "Ready for Assignment",
  Scheduled = "Scheduled",
  Signed = "Signed",
}
