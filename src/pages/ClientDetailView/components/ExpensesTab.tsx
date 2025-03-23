import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import { Client } from "../../../interfaces/clients";
import { columns } from "../utils/consts";
import Table from "../../../components/Table";

const ExpensesTab = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData<Client>(["client-detail", id]);

  return (
    <Table
      columns={columns}
      rows={
        data
          ? data.expenses.map((expense) => ({ ...expense, id: expense.name }))
          : []
      }
    />
  );
};

export default ExpensesTab;
