export interface Expense {
  id: string;
  doc: Date;
  amount: number;
  deducted_from: DeductedFrom;
  client: string;
}

export enum DeductedFrom {
  ClientSettlement = "Client Settlement",
  NotDeducted = "Not Deducted",
}
