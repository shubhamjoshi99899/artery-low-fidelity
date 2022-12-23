import * as yup from "yup";

export const steponevalidationSchema = yup.object({
  email: yup.string().required("Email is required"),
  mobile: yup.string().required("Market is required"),
  founded: yup.string().required("A year is required"),
  founder: yup.string().required("Field is required"),
});
