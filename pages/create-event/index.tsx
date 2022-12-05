import React, { useState } from "react";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  Grid,
  TextField,
  InputLabel,
} from "@mui/material";
import Header from "../../components/header";
import { Dayjs } from "dayjs";
import CustomizedInputField from "../../components/inputs/input-field";
import PrimaryButton from "../../components/buttons/primaryButton";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DatePickerCustom from "../../components/inputs/date-picker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import theme from "../../styles/theme";
import { useRouter } from "next/router";
import VerificationDialogueBox from "../../components/modals/verification-dialogue-box";
import OptionsModal from "../../components/modals/options-modal";
const CreateEvent = () => {
  const router = useRouter();
  const [value, setValue] = React.useState<Dayjs | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [openOptions, setOpenOptions] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
    setOpenOptions(false);
  };
  return (
    <>
      <Box mb={10}>
        <Header text="Create New event" backIcon />
      </Box>
      <Container>
        <CustomizedInputField
          label="Event Header"
          placeholder="Event Header"
          sx={{ mb: 2 }}
        />
        <CustomizedInputField
          label="Estimated Count"
          placeholder="Estimated Count"
          sx={{ mb: 2 }}
        />
        <CustomizedInputField
          label="Minimum Guarantee"
          placeholder="Minimum Guarantee"
          sx={{ mb: 2 }}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <InputLabel
            sx={{
              fontWeight: 600,
              fontSize: "1.25rem",
              color: theme.palette.secondary.main,
            }}
            shrink
          >
            Day and Date
          </InputLabel>
          <DatePicker
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            renderInput={(params: any) => (
              <TextField
                sx={{ mb: 2 }}
                fullWidth
                {...params}
                InputProps={{
                  style: {
                    height: "40px",
                    borderRadius: "0.3125rem",
                    fontSize: "0.9375rem",
                    boxShadow: "none",
                  },
                }}
              />
            )}
          />
          <InputLabel
            sx={{
              fontWeight: 600,
              fontSize: "1.25rem",
              color: theme.palette.secondary.main,
            }}
          >
            Time
          </InputLabel>
          <MobileTimePicker
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => (
              <TextField
                sx={{ mb: 2 }}
                fullWidth
                {...params}
                InputProps={{
                  style: {
                    height: "40px",
                    borderRadius: "0.3125rem",
                    fontSize: "0.9375rem",
                    boxShadow: "none",
                  },
                }}
              />
            )}
          />
        </LocalizationProvider>
        <PrimaryButton
          text="Create Negative list"
          variant="outlined"
          fullWidth
          type={"submit"}
          sx={{ mb: 3 }}
          onClick={() => setOpen(true)}
        />
        <VerificationDialogueBox
          openVerificationDialog={open}
          closeVerificationDialog={handleClose}
          heading="‘WiserCount’ Would like to
          Access the Camera/View Files"
          body="Camera usage and burst shots 
          for adding member images"
          buttonText="Don't Allow"
          secondarybuttonText="Ok"
          handleOptions={() => setOpenOptions(true)}
        />
        <OptionsModal
          closeVerificationDialog={handleClose}
          openVerificationDialog={openOptions}
        />
        <PrimaryButton
          text="Create Event"
          variant="contained"
          fullWidth
          type={"submit"}
          dark
          sx={{ mb: 3 }}
          onClick={() => router.push("/view-event")}
        />
      </Container>
    </>
  );
};

export default CreateEvent;
