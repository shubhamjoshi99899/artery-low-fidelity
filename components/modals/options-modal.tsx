import { Box, Dialog, Divider, Typography } from "@mui/material";
import React from "react";

interface Props {
  openVerificationDialog: boolean;
  closeVerificationDialog: any;
  accept?: boolean;
  heading?: string;
  body?: string;
  body2?: string;
  buttonText?: string;
  confirmClick?: any;
  fromInvoiceAccept?: any;
  secondarybuttonText?: any;
}

const OptionsModal: React.FC<Props> = ({
  openVerificationDialog,
  closeVerificationDialog,
  heading,
  body,
  body2,
  buttonText,
  secondarybuttonText,
}) => {
  const handleClose = () => {
    closeVerificationDialog();
  };

  return (
    <Box>
      <Dialog
        open={openVerificationDialog}
        onClose={handleClose}
        sx={{
          height: "auto !important",
          borderRadius: "12px ",
          border: "1px solid #EFEFEF",
          padding: 5,
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Box sx={{ mb: 2, py: 1, borderBottom: "1px solid #C7C7C7", px: 5 }}>
            <Typography sx={{ color: "#090E82" }}>
              Choose from Gallery
            </Typography>
          </Box>
          <Box sx={{ mb: 2, borderBottom: "1px solid #C7C7C7", px: 8 }}>
            <Typography sx={{ color: "#090E82" }}>Take a Photo</Typography>
          </Box>
          <Divider />

          <Box mb={2} onClick={handleClose}>
            <Typography>Cancel</Typography>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};

export default OptionsModal;
