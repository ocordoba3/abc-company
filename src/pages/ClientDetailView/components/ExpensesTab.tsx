import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { columns } from "../utils/consts";
import { Expense } from "../../../interfaces/expenses";
import Table from "../../../components/Table";
import useFetch from "../../../hooks/useFetch";
import { useState } from "react";
import { GridRowSelectionModel } from "@mui/x-data-grid";
import ConfirmDialog from "../../../components/ConfirmDialog";
import AddExpenseDialog from "./AddExpenseDialog";

const ExpensesTab = () => {
  const queryClient = useQueryClient();
  const { fetchInstance } = useFetch();
  const { id } = useParams();
  const [selectedRows, setSelectedRows] = useState<GridRowSelectionModel>([]);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const { data, isFetching } = useQuery<Expense[]>({
    enabled: Boolean(id),
    queryKey: ["expenses"],
    queryFn: () => fetchInstance("/expenses") as Promise<Expense[]>,
    staleTime: Infinity,
  });

  const { mutateAsync: deleteExpense } = useMutation({
    mutationKey: ["delete-expense"],
    mutationFn: (expenseId: string) =>
      fetchInstance(`/expenses/${expenseId}`, "DELETE"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
  });

  async function handleCloseAddModal() {
    setOpenAddModal(false);
  }

  async function handleCloseDeleteModal() {
    setOpenDeleteModal(false);
  }

  async function handleDelete() {
    for (const row of selectedRows) {
      await deleteExpense(String(row));
    }

    handleCloseDeleteModal();
  }

  return (
    <>
      <div className="mb-8 flex justify-end items-center">
        {selectedRows.length > 0 && (
          <Button
            onClick={() => setOpenDeleteModal(true)}
            sx={{ marginRight: "1rem", opacity: "0.8" }}
            size="small"
            variant="contained"
            color="error"
          >
            Delete
          </Button>
        )}
        <Button
          onClick={() => setOpenAddModal(true)}
          size="small"
          variant="contained"
          color="secondary"
        >
          Add Expense
        </Button>
      </div>
      <div className="w-full h-[calc(100vh-16rem)]">
        <Table
          loading={isFetching}
          columns={columns}
          checkboxSelection
          rowSelection
          rows={data ? data.filter((expense) => expense.client === id) : []}
          onRowSelectionModelChange={(val) => setSelectedRows(val)}
        />
      </div>

      {/* Modal to confirm and remove the expense */}
      <ConfirmDialog
        open={openDeleteModal}
        handleClose={handleCloseDeleteModal}
        title="Delete Expenses"
        description="Are you sure you want to delete these expenses?"
        handleSubmit={handleDelete}
      />

      {/* Modal to add an expense */}
      <AddExpenseDialog open={openAddModal} handleClose={handleCloseAddModal} />
    </>
  );
};

export default ExpensesTab;
