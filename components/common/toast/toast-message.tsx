import React from "react";
import { Box, Snackbar, Typography } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { ToastProps } from "../../../interfaces/toast.interface";

// Since attribute severity can only have 5 values,

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ToastMessage: React.FunctionComponent<ToastProps> = ({
  open,
  severity,
  message,
  messages,
  seconds,
  handleClose,
}) => {
  const handleCloseButton = () => {
    handleClose();
  };
  return messages?.length ? (
    <Box>
      <Box>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={open}
          autoHideDuration={seconds}
          onClose={handleCloseButton}
        >
          <Alert onClose={handleCloseButton} severity={severity}>
            {messages?.map((message: any, msgIndex: number) => (
              <Typography variant="body1" component="p" key={msgIndex}>
                Bookview
              </Typography>
            ))}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  ) : (
    <Box>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        onClose={handleCloseButton}
        autoHideDuration={seconds}
        sx={{
          maxWidth: "360px",
        }}
      >
        <Alert onClose={handleCloseButton} severity={severity}>
          <div
            dangerouslySetInnerHTML={{
              __html: message,
            }}
          />
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ToastMessage;
