import { GridColDef } from "@mui/x-data-grid";
import { transformDate } from "../../../helpers/functions";

export const columns: GridColDef[] = [
  {
    field: "client_name",
    headerName: "Client Name",
    width: 400,
  },
  {
    field: "doa",
    headerName: "DOA",
    width: 150,
    valueFormatter: (value: Date) => transformDate(value),
  },
  {
    field: "medical_status",
    headerName: "Medical Status",
    width: 150,
  },
  {
    field: "client_status",
    headerName: "Case Status",
    width: 150,
    valueFormatter: (value: boolean) => (value ? "Active" : "Inactive"),
  },
  {
    field: "law_firm",
    headerName: "Law Firm",
    width: 300,
  },
];
