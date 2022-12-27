import { Box, Button, Container, Divider, Stack } from "@mui/material";
import Image from "next/image";
import React, { useContext } from "react";
import PrimaryButton from "../../buttons/primaryButton";
import Header from "../../header";
import CustomizedInputField from "../../inputs/input-field";
import GoogleIcon from "@mui/icons-material/Google";
import theme from "../../../styles/theme";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { LoginValidationSchema } from "../../../utils/validations";
import { noAuthPost } from "../../../config/axiosClient";
import { ErrorToast, SuccessToast } from "../../common/toast/toasHelpers";
import { Context } from "../../../context/contextProvider";

const Login = () => {
  const context = useContext(Context);
  const toastContext = context?.Toast;
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidationSchema,
    onSubmit: (values: any) => {
      submitLogin(values);
    },
    enableReinitialize: true,
  });
  const submitLogin = async (values: any) => {
    await noAuthPost("auth/user/signin", values)
      .then((res: any) => {
        localStorage.setItem("redloftoken", res.data.body.token);
        router.push("/dashboard");
        SuccessToast(res.data.message, toastContext);
      })
      .catch((error) => {
        ErrorToast(error.response.data, toastContext);
      });
  };
  return (
    <>
      <Box mb={10}>
        <Header text="Admin Login" />
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Container>
          <CustomizedInputField
            label="Email/Mobile Number"
            placeholder="Email/Mobile Number"
            formik={formik}
            name="email"
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            type={"text"}
            sx={{ mb: 2 }}
          />
          <CustomizedInputField
            label="Password"
            placeholder="Password"
            sx={{ mb: 2 }}
            formik={formik}
            name="password"
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            type={"password"}
          />
          <PrimaryButton
            text="Login"
            variant="contained"
            fullWidth
            dark
            type={"submit"}
            sx={{ mb: 3 }}
          />
          <Divider sx={{ mb: 3, color: "#7D7D7D" }}>Or</Divider>
          <Button
            sx={{
              height: "40px !important",
              background: "#fff",
              textTransform: "capitalize",
              color: theme.palette.primary.main,
              mb: 4,
              fontWeight: 600,
              fontSize: "1rem",
              borderRadius: "none",
              border: "1px solid #090E82",
              boxShadow: "0px 0px 10px rgba(9, 14, 130, 0.05)",
            }}
            variant="contained"
            fullWidth
            onClick={() => router.push("/dashboard")}
          >
            <Image
              src="/google.png"
              height={35}
              width={35}
              style={{ marginRight: "20px" }}
              alt="google"
            />
            Sign In with Google
          </Button>
          <Stack
            p={5}
            textAlign={"center"}
            justifyContent={"center"}
            alignItems="center"
          >
            <Image
              src="/Login-amico.png"
              width={300}
              height={300}
              alt="meeting"
            />
          </Stack>
        </Container>
      </form>
    </>
  );
};

export default Login;
