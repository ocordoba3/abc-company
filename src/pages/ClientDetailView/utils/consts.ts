import { GridColDef } from "@mui/x-data-grid";

import { transformDate } from "../../../helpers/functions";

export const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Label",
    width: 400,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "doc",
    headerName: "Created At",
    width: 150,
    valueFormatter: (value: Date) => transformDate(value),
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 150,
    valueFormatter: (value: number) => `$${value}`,
  },
  {
    field: "deducted_from",
    headerName: "Deducted From",
    width: 150,
  },
];
