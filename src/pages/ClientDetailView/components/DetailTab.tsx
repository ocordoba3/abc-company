import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import { Client } from "../../../interfaces/clients";
import Empty from "../../../components/Empty";
import { FaBuildingColumns } from "react-icons/fa6";
import { transformDate } from "../../../helpers/functions";

const DetailTab = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData<Client>(["client-detail", id]);

  if (!data) {
    return <Empty />;
  }

  return (
    <div className="grid grid-cols-2 p-12">
      <div>
        <h3 className="text-lg text-gray-400">Client Name</h3>
        <h2 className="text-xl text-black mb-8 pl-4">{data?.client_name}</h2>

        <h3 className="text-lg text-gray-400">Date of Birth</h3>
        <h2 className="text-xl text-black mb-8 pl-4">
          {transformDate(data?.dob || "")}
        </h2>

        <h3 className="text-lg text-gray-400">Date of Incident</h3>
        <h2 className="text-xl text-black pl-4">
          {transformDate(data?.doa || "")}
        </h2>
      </div>

      <div className="flex items-center h-fit">
        <FaBuildingColumns size={24} className="mr-2" />
        <h2 className="text-xl text-black pl-4">{data?.law_firm}</h2>
      </div>
    </div>
  );
};

export default DetailTab;
