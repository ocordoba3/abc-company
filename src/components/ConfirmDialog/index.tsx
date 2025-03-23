import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import useStoreDialogs from "../../store/dialogs";

const ConfirmDialog = () => {
  const { confirmDialog, setConfirmDialog } = useStoreDialogs();

  async function handleClose() {
    setConfirmDialog(null);
  }

  return (
    <Dialog
      open={Boolean(confirmDialog)}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{confirmDialog?.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {confirmDialog?.description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          variant="outlined"
          size="small"
          onClick={handleClose}
        >
          Close
        </Button>
        <Button
          color="secondary"
          variant="contained"
          size="small"
          onClick={() => confirmDialog?.handleSubmit()}
          autoFocus
        >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
