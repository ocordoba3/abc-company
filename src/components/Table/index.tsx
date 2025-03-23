import {
  DataGrid,
  DataGridProps,
  GridColDef,
  GridValidRowModel,
} from "@mui/x-data-grid";

import Empty from "../Empty";

interface Props extends Omit<DataGridProps, "rows" | "columns"> {
  rows: GridValidRowModel[];
  columns: GridColDef[];
}

const Table = ({ columns, rows, ...rest }: Props) => {
  return (
    <DataGrid
      getRowClassName={() =>
        "bg-blue-50 my-1 border-t-0 rounded-xl hover:!bg-green-50 cursor-pointer"
      }
      getCellClassName={() => "!border-t-0"}
      rows={rows}
      columns={columns}
      autoPageSize
      rowSelection={false}
      sx={{
        border: 0,
        "& .MuiDataGrid-cell.MuiDataGrid-cellEmpty": {
          borderTop: "none",
        },
        "& .MuiDataGrid-columnHeaderTitle": {
          fontWeight: "700 !important",
        },
        "& .MuiDataGrid-columnHeader": {
          borderBottom: "none !important",
        },
        "& .MuiDataGrid-filler": {
          display: "none !important",
        },
        "& .MuiDataGrid-columnSeparator": {
          display: "none",
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
        },
        "& .MuiDataGrid-selectedRowCount": {
          display: "none",
        },
        "& .MuiButtonBase-root.MuiCheckbox-root": {
          color: "#62159b",
        },
      }}
      slots={{ noRowsOverlay: Empty }}
      {...rest}
    />
  );
};

export default Table;
