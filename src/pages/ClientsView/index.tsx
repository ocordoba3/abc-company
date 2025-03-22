import { BiSearch } from "react-icons/bi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { TextField } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { Client } from "@/interfaces/clients";
import { fetchClients } from "@/helpers/fetchClients";
import Empty from "@/components/Empty";
import { useNavigate } from "react-router-dom";
import { PATHS } from "@/router/paths";

const ClientsView = () => {
  const navigate = useNavigate();
  // Access the client
  //   const queryClient = useQueryClient();

  // Queries
  const { data } = useQuery<Client[]>({
    queryKey: ["clients"],
    queryFn: fetchClients,
  });

  const columns: GridColDef[] = [
    {
      field: "client_name",
      headerName: "Client Name",
      width: 400,
    },
    {
      field: "doa",
      headerName: "DOA",
      width: 150,
      valueFormatter: (value: Date) =>
        new Intl.DateTimeFormat("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
        }).format(new Date(value)),
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

  return (
    <div className="rounded-lg shadow-md p-4 bg-white">
      {/* Title and search bar */}
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl w-1/2">Clients</h1>
        <TextField
          sx={{
            "& .MuiInputBase-root": {
              borderRadius: "20px",
            },
          }}
          size="small"
          className="w-1/3"
          placeholder="Search..."
          slotProps={{
            input: {
              startAdornment: (
                <BiSearch size={24} className="text-gray-400 mr-2" />
              ),
              className: "h-10",
            },
          }}
        />
      </div>
      {/* Action buttons */}
      <div className="mb-4 flex justify-between items-center">
        <button className="bg-purple-300 text-purple-900 text-sm cursor-pointer rounded-3xl py-2 px-4">
          Filter Clients
        </button>
        <button className="bg-purple-300 text-purple-900 text-sm cursor-pointer rounded-3xl py-2 px-4">
          Add Clients
        </button>
      </div>

      {/* Clients list */}
      <div className="w-full h-[calc(100vh-15rem)]">
        {data && data.length > 0 && (
          <DataGrid
            getRowClassName={() =>
              "bg-blue-50 my-1 border-t-0 rounded-xl hover:!bg-green-50 cursor-pointer"
            }
            getCellClassName={() => "!border-t-0"}
            rows={data}
            columns={columns}
            autoPageSize
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
                borderBottom: "none !important",
              },
              "& .MuiDataGrid-columnSeparator": {
                display: "none",
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
              },
            }}
            slots={{ noRowsOverlay: Empty }}
            onRowClick={(params) =>
              navigate(PATHS.clientById(String(params.id)))
            }
          />
        )}
      </div>
    </div>
  );
};

export default ClientsView;
