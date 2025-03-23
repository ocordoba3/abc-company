import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Expense } from "../../../interfaces/expenses";
import useFetch from "../../../hooks/useFetch";
import { FormControl, InputAdornment, MenuItem, Select } from "@mui/material";
import { useParams } from "react-router-dom";

interface Props {
  open: boolean;
  handleClose: VoidFunction;
}

const AddExpenseDialog = ({ open, handleClose }: Props) => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { fetchInstance } = useFetch();

  const { mutateAsync: saveExpense, isPending } = useMutation({
    mutationKey: ["save-expense"],
    mutationFn: (expense: Expense) =>
      fetchInstance(`/expenses`, "POST", expense),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
      handleClose();
    },
  });

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      onClose={handleClose}
      slotProps={{
        paper: {
          component: "form",
          onSubmit: async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const body = {
              ...formJson,
              client: id!,
              doc: new Date().toISOString(),
            };
            await saveExpense(body as Expense);
          },
        },
      }}
    >
      <DialogTitle fontWeight={700}>Add Expense</DialogTitle>
      <DialogContent sx={{ padding: "2rem" }}>
        <FormControl fullWidth sx={{ mt: 2 }} size="small">
          <span className="text-sm mb-2">Deduction Type</span>
          <Select
            required
            size="small"
            variant="outlined"
            id="deducted_from"
            name="deducted_from"
          >
            <MenuItem value="Client Settlement">Client Settlement</MenuItem>
            <MenuItem value="Not Deducted">Not Deducted</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mt: 2 }} size="small">
          <span className="text-sm mb-2">Expense Label</span>
          <TextField
            required
            id="id"
            name="id"
            type="text"
            fullWidth
            size="small"
            variant="outlined"
          />
        </FormControl>
        <FormControl fullWidth sx={{ mt: 2 }} size="small">
          <span className="text-sm mb-2">Expense Amount</span>
          <TextField
            required
            id="amount"
            name="amount"
            type="number"
            fullWidth
            size="small"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              },
            }}
          />
        </FormControl>
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "center",
          p: "0 2rem 2rem 2rem",
        }}
      >
        <Button
          loading={isPending}
          size="small"
          variant="contained"
          color="secondary"
          type="submit"
        >
          Submit Expense
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddExpenseDialog;
