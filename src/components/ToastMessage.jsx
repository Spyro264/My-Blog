import { Alert, Snackbar } from "@mui/material";

const ToastMessage = ({
  open,
  message,
  setSnackbar,
  vertical = "top",
  horizontal = "right",
  color,
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      autoHideDuration={3000}
      open={open}
      onClose={() => setSnackbar({ boolean: false, message: "", error: "" })}
    >
      <Alert severity={color}>{message}</Alert>
    </Snackbar>
  );
};

export default ToastMessage;
