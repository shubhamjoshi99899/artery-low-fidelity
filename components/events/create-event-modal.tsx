import { Box, Dialog } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { CreateEvent } from "../../utils/validations";
import PrimaryButton from "../buttons/primaryButton";
import CustomizedInputField from "../inputs/input-field";

interface Props {
  open: any;
  handleClose: any;
  handleSubmit: any;
  loading: any;
}

const CreateEventModal: React.FC<Props> = ({
  open,
  handleClose,
  handleSubmit,
  loading,
}) => {
  const formik = useFormik({
    initialValues: {
      eventId: "",
      eventConfig: "",
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
    enableReinitialize: true,
    validationSchema: CreateEvent,
  });
  return (
    <>
      <Dialog sx={{}} onClose={handleClose} open={open}>
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ p: 5 }}>
            <CustomizedInputField
              label="Event id"
              placeholder="Event id"
              sx={{ mb: 2 }}
              formik={formik}
              name="eventId"
              value={formik.values.eventId}
              error={formik.touched.eventId && Boolean(formik.errors.eventId)}
              helperText={formik.touched.eventId && formik.errors.eventId}
              disabled={loading}
            />
            {/* <CustomizedInputField
              label="Event Config"
              placeholder="Event Config"
              sx={{ mb: 2 }}
              multiline={true}
              name="eventConfig"
              value={formik.values.eventConfig}
              error={
                formik.touched.eventConfig && Boolean(formik.errors.eventConfig)
              }
              helperText={
                formik.touched.eventConfig && formik.errors.eventConfig
              }
              rows={4}
            /> */}
            <PrimaryButton
              text="Create Event"
              variant="contained"
              fullWidth
              type={"submit"}
              dark
              sx={{ mb: 3 }}
              // disabled={
              //   formik.values.eventId?.length == 0 ||
              //   formik.values.eventConfig?.length == 0
              // }
            />
          </Box>
        </form>
      </Dialog>
    </>
  );
};

export default CreateEventModal;
