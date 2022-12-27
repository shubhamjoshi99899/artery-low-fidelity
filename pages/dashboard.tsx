import {
  Box,
  Chip,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import PrimaryButton from "../components/buttons/primaryButton";
import EventCard from "../components/events/event-card";
import Header from "../components/header";
const DashboardComponent = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Artery Low Fidelity</title>
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
            type="submit"
            onClick={() => router.push("/create-event")}
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
        <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "1.25rem",
              lineHeight: "19px",
              color: "#090E82",
              mb: 2,
            }}
          >
            Ongoing Event
          </Typography>
          <Chip
            sx={{
              background: "rgba(79, 221, 176, 0.25)",
              borderRadius: "30px",
              color: "#3C9C7E",
              fontweight: 600,
              fontSize: "12px",
              mb: 2,
            }}
            label="Upcoming week"
          />
          <EventCard />
        </Box>
        <Box>
          <Stack direction="row" justifyContent={"space-between"}>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "1.25rem",
                lineHeight: "19px",
                color: "#090E82",
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
        </Box>
      </Container>
    </div>
  );
};

export default DashboardComponent;
