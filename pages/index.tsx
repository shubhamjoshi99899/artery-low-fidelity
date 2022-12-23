import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { handleClientScriptLoad } from "next/script";
import { useState } from "react";
import PrimaryButton from "../components/buttons/primaryButton";
import CreateEventModal from "../components/events/create-event-modal";
import EventCard from "../components/events/event-card";
import Header from "../components/header";
import CreateEvent from "./create-event";
const Home = () => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (values: any) => {
    axios
      .post("https://portal.wisercount.com/api/event", values)
      .then((res) => {});
    // .catch((err) => {
    //   console.log(err);
    // });
  };
  return (
    <div>
      <Head>
        <title>Artery Low Fidelity</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box mb={10}>
        <Header text="WiserCount" />
      </Box>
      <Container sx={{ mb: 2 }}>
        <Stack direction="row" spacing={2}>
          <PrimaryButton
            fullWidth
            text="Create Event"
            variant="contained"
            dark
            onClick={handleOpenModal}
          />
          <PrimaryButton
            fullWidth
            text="View Event"
            variant="outlined"
            type="submit"
            onClick={() => router.push("/view-event")}
          />
        </Stack>
      </Container>

      <Divider sx={{ mb: 5 }} />
      <Container sx={{ mb: 2 }}>
        {/* <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "1rem",
              lineHeight: "19px",
              color: "#7D7D7D",
              mb: 2,
            }}
          >
            Ongoing Event
          </Typography>
          <EventCard />
        </Box>
        <Box>
          <Stack direction="row" justifyContent={"space-between"}>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "1rem",
                lineHeight: "19px",
                color: "#7D7D7D",
                mb: 2,
              }}
            >
              Scheduled Events
            </Typography>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "1rem",
                lineHeight: "19px",
                color: "#7D7D7D",
                mb: 2,
              }}
            >
              View All
            </Typography>
          </Stack>
          <EventCard />
        </Box> */}
        <CreateEventModal
          open={open}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
          loading={disabled}
        />
        <Stack
          p={5}
          textAlign={"center"}
          justifyContent={"center"}
          alignItems="center"
        >
          <Image
            src="/Events-amico.png"
            width={300}
            height={300}
            alt="meeting"
          />
        </Stack>
      </Container>
    </div>
  );
};

export default Home;
