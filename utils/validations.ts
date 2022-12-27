import * as Yup from "yup";

export const LoginValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Username is required"),
  password: Yup.string().required("Password is required"),
});

export const CreateEvent = Yup.object({
  eventId: Yup.string()
    .required("Please enter a valid event ID")
    .min(12, "Invalid event ID, Event ID should be 12 characters long.")
    .max(12, "Invalid event ID, Event ID should be 12 characters long."),
  eventConfig: Yup.string(),
});

export const ViewEventValidationSchema = Yup.object({
  eventId: Yup.string()
    .required("Please enter a valid event ID")
    .min(12, "Invalid event ID, Event ID should be 12 characters long.")
    .max(12, "Invalid event ID, Event ID should be 12 characters long."),
});
