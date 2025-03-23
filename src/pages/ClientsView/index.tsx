import { BiSearch } from "react-icons/bi";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { Client } from "../../interfaces/clients";
import { columns } from "./utils/consts";
import { PATHS } from "../../router/paths";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import Table from "../../components/Table";
import useFetch from "../../hooks/useFetch";
import { useDebounce } from "../../hooks/useDebounce";
import { useMemo, useState } from "react";
import { MdClear } from "react-icons/md";

const ClientsView = () => {
  const { fetchInstance } = useFetch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 1000);

  const { data, isFetching } = useQuery<Client[]>({
    queryKey: ["clients"],
    queryFn: () => fetchInstance("/clients") as Promise<Client[]>,
    staleTime: Infinity,
  });

  const clientsList = useMemo(
    () =>
      data
        ? data?.filter((client) =>
            client.client_name
              .toLowerCase()
              .includes(debouncedSearchQuery.toLowerCase())
          )
        : [],
    [data, debouncedSearchQuery]
  );

  if (isFetching) {
    return (
      <div className="bg-white w-full h-[calc(100vh-10rem)] rounded-b-xl p-8">
        <LoadingSkeleton />
      </div>
    );
  }

  return (
    <div className="rounded-lg shadow-md p-8 bg-white">
      {/* Title and search bar */}
      <div className="mb-4 flex justify-between items-center">
        <h1 className="font-bold text-3xl w-1/2">Clients</h1>
        <TextField
          value={searchQuery}
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
              endAdornment: (
                <MdClear
                  onClick={() => setSearchQuery("")}
                  size={24}
                  className="text-gray-400 mr-2 cursor-pointer"
                />
              ),
              className: "h-10",
            },
          }}
          onChange={({ target: { value } }) => setSearchQuery(value)}
        />
      </div>

      {/* Clients list */}
      <div className="w-full h-[calc(100vh-14rem)]">
        <Table
          rows={clientsList}
          columns={columns}
          onRowClick={(params) => navigate(PATHS.clientById(String(params.id)))}
        />
      </div>
    </div>
  );
};

export default ClientsView;
