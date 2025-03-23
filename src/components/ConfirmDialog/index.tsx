import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

interface Props {
  open: boolean;
  handleClose: VoidFunction;
  handleSubmit: () => Promise<void>;
  title: string;
  description: string;
}
const ConfirmDialog = ({
  open,
  handleClose,
  handleSubmit,
  title,
  description,
}: Props) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
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
          onClick={() => handleSubmit()}
          autoFocus
        >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
