import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
  Stack,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import PrimaryButton from "../buttons/primaryButton";
import CloseIcon from "@mui/icons-material/Close";
import theme from "../../styles/theme";
import ShareButton from "../buttons/share-button";
import ShareSocial from "./share-social-modal";
interface Props {
  handleOpenModal: any;
  handleCloseModal: any;
  text?: string;
  handleAction?: any;
  handleRoute?: any;
  eventId: string;
}

const EventCreatedSuccessModal: React.FC<Props> = ({
  handleOpenModal,
  handleCloseModal,
  handleAction,
  handleRoute,
  text,
  eventId,
}) => {
  const [open, setOpen] = useState(false);

  const openShareModal = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    handleCloseModal();
  };

  return (
    <>
      <ShareSocial eventId={eventId} open={open} handleClose={handleClose} />
      <Dialog
        open={handleOpenModal}
        onClose={handleCloseModal}
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <IconButton
          onClick={handleCloseModal}
          sx={{ position: "absolute", top: 0, right: 0 }}
        >
          <CloseIcon />
        </IconButton>
        <Box sx={{ p: 5 }}>
          <Box sx={{ textAlign: "center" }}>
            <Image src="/succes.gif" width={64} height={64} alt="Created" />
          </Box>
          <DialogTitle>
            <Typography
              textAlign="center"
              sx={{ color: "#000" }}
              fontWeight="600"
              variant="h6"
            >
              Event Created Successfully
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Typography variant="body1" textAlign="center">
              You’ve successfully created the event{" "}
              {/* <span style={{ fontWeight: 700 }}>{text}</span>. */}
            </Typography>
          </DialogContent>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <ShareButton onClick={openShareModal} text="Share" />
            <PrimaryButton
              type="submit"
              variant="contained"
              fullWidth
              text="View Event"
              sx={{ maxWidth: "230px" }}
              onClick={handleAction}
            />
          </Stack>
        </Box>
      </Dialog>
    </>
  );
};

export default EventCreatedSuccessModal;
