import { Box, Button, Container, Divider, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import PrimaryButton from "../../buttons/primaryButton";
import Header from "../../header";
import CustomizedInputField from "../../inputs/input-field";
import GoogleIcon from "@mui/icons-material/Google";
import theme from "../../../styles/theme";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  return (
    <>
      <Box mb={10}>
        <Header text="Admin Login" />
      </Box>
      <Container>
        <CustomizedInputField
          label="Email/Mobile Number"
          placeholder="Email/Mobile Number"
          sx={{ mb: 2 }}
        />
        <CustomizedInputField
          label="Password"
          placeholder="Password"
          sx={{ mb: 2 }}
        />
        <PrimaryButton
          text="Login"
          variant="contained"
          fullWidth
          dark
          type={"submit"}
          sx={{ mb: 3 }}
          onClick={() => router.push("/dashboard")}
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
            fontSize: "20px",
            borderRadius: "none",
            border: "1px solid #090E82",
            boxShadow: "0px 0px 10px rgba(9, 14, 130, 0.05)",
          }}
          variant="contained"
          fullWidth
          onClick={() => router.push("/dashboard")}
        >
          <GoogleIcon
            sx={{ width: "24px", height: "24px", color: "#4285F4", mr: 2 }}
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
    </>
  );
};

export default Login;
