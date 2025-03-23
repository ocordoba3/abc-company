import { BiSearch } from "react-icons/bi";
import { Button, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { Client } from "../../interfaces/clients";
import { columns } from "./utils/consts";
import { PATHS } from "../../router/paths";
import Empty from "../../components/Empty";
import useFetch from "../../hooks/useFetch";
import LoadingSkeleton from "../../components/LoadingSkeleton";

const ClientsView = () => {
  const { fetchInstance } = useFetch();
  const navigate = useNavigate();

  const { data, isFetching } = useQuery<Client[]>({
    queryKey: ["clients"],
    queryFn: () => fetchInstance("/clients") as Promise<Client[]>,
  });

  if (isFetching) {
    return (
      <div className="bg-white w-full h-[calc(100vh-10rem)] rounded-b-xl p-8">
        <LoadingSkeleton />
      </div>
    );
  }

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
          placeholder="Search Clients..."
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
      <div className="mb-8 flex justify-between items-center">
        <Button size="small" variant="contained" color="secondary">
          Filter Clients
        </Button>
        <Button size="small" variant="contained" color="secondary">
          Add Clients
        </Button>
      </div>

      {/* Clients list */}
      <div className="w-full h-[calc(100vh-16rem)]">
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
