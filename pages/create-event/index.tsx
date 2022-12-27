import React, { useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Header from "../../components/header";
import { Dayjs } from "dayjs";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useRouter } from "next/router";
import axios from "axios";
import EventCreatedSuccessModal from "../../components/modals/event-created-success";
const CreateEvent = () => {
  const router = useRouter();

  const [eventId, setEventId] = useState("");

  const [open, setOpen] = useState(false);
  const handleCreateInstantEvent = () => {
    axios.post("https://portal.wisercount.com/api/event").then((res) => {
      setEventId(res.data?.eventId);
      setOpen(true);
    });
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box mb={15}>
        <EventCreatedSuccessModal
          handleCloseModal={handleClose}
          handleOpenModal={open}
          eventId={eventId}
        />
        <Header text="Create New event" backIcon />
      </Box>
      <Container>
        <Stack
          onClick={() => handleCreateInstantEvent()}
          sx={{ cursor: "pointer" }}
          spacing={2}
          mb={1}
          direction="row"
        >
          <EventRepeatIcon sx={{ color: "#090E82" }} />
          <Typography
            fontWeight={600}
            fontSize="18px"
            sx={{ color: "#090E82" }}
            onClick={() => handleCreateInstantEvent()}
          >
            Create Instant event
          </Typography>
        </Stack>
        <Stack
          onClick={() => router.push("/create-event/schedule-event")}
          sx={{ cursor: "pointer" }}
          spacing={2}
          direction="row"
        >
          <CalendarMonthIcon sx={{ color: "#090E82" }} />
          <Typography
            fontWeight={600}
            fontSize="18px"
            sx={{ color: "#090E82" }}
          >
            Schedule for later
          </Typography>
        </Stack>
      </Container>
    </>
  );
};

export default CreateEvent;
