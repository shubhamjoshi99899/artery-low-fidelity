import React from "react";
import Header from "../components/header";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import CustomizedInputField from "../components/inputs/input-field";
import PrimaryButton from "../components/buttons/primaryButton";
import { useRouter } from "next/router";

const ViewEvent = () => {
  const router = useRouter();
  return (
    <>
      <Box mb={10}>
        <Header text="View Event" backIcon />
      </Box>
      <Container>
        <CustomizedInputField
          label="Enter Event ID"
          placeholder="Enter meeting ID "
          sx={{ mb: 2 }}
        />
        <Typography fontSize={"12px"} fontWeight={400} mb={2}>
          By clicking “View”, you agree to our Terms of Service and Privacy
          Statement
        </Typography>
        <PrimaryButton
          fullWidth
          text="View Event"
          variant="contained"
          dark
          type="submit"
          onClick={() => router.push("/view-event/123")}
        />
      </Container>
    </>
  );
};

export default ViewEvent;
