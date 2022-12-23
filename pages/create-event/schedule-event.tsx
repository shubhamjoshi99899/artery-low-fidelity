import React, { useState } from "react";
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
import { Box, Container, Grid, InputLabel, TextField } from "@mui/material";
import { Dayjs } from "dayjs";
import Header from "../../components/header";
const ScheduleEvent = () => {
  const [value, setValue] = React.useState<Dayjs | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [openOptions, setOpenOptions] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
    setOpenOptions(false);
  };
  const router = useRouter();

  return (
    <div>
      <Box mb={10}>
        <Header text="Create New event" backIcon />
      </Box>
      <Container>
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
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <PrimaryButton
              text="Share"
              variant="outlined"
              fullWidth
              type={"submit"}
              sx={{ mb: 3 }}
              onClick={() => setOpen(true)}
            />
          </Grid>
          <Grid item xs={6}>
            <PrimaryButton
              text="Join Event"
              variant="contained"
              fullWidth
              type={"submit"}
              sx={{ mb: 3, background: "#020655", color: "#fff" }}
              onClick={() => setOpen(true)}
            />
          </Grid>
        </Grid>
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
          text="Schedule Event"
          variant="contained"
          fullWidth
          type={"submit"}
          dark
          sx={{ mb: 3 }}
          onClick={() => router.push("/view-event")}
        />
      </Container>
    </div>
  );
};

export default ScheduleEvent;
