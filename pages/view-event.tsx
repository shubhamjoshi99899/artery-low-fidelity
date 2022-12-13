import React, { useState } from "react";
import Header from "../components/header";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import CustomizedInputField from "../components/inputs/input-field";
import PrimaryButton from "../components/buttons/primaryButton";
import { useRouter } from "next/router";
import { ViewEventValidationSchema } from "../utils/validations";
import { useFormik } from "formik";

const ViewEvent = () => {
  const router = useRouter();
  const [meetingId, setMeetingId] = useState<string>("");
  const formik = useFormik({
    initialValues: {
      eventId: "",
    },
    onSubmit: (values: any) => {
      setMeetingId(values);
      router.push(`/view-event/${values.eventId}`);
    },
    enableReinitialize: true,
    validationSchema: ViewEventValidationSchema,
  });

  return (
    <>
      <Box mb={10}>
        <Header text="View Event" backIcon />
      </Box>
      <Container>
        <form onSubmit={formik.handleSubmit}>
          <CustomizedInputField
            label="Enter Event ID"
            placeholder="Enter meeting ID "
            sx={{ mb: 2 }}
            name="eventId"
            formik={formik}
            value={formik.values.eventId}
            error={formik.touched.eventId && Boolean(formik.errors.eventId)}
            helperText={formik.touched.eventId && formik.errors.eventId}
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
          />
        </form>
      </Container>
    </>
  );
};

export default ViewEvent;
