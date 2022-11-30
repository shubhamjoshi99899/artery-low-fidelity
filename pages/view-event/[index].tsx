import React from "react";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  Grid,
} from "@mui/material";
import Header from "../../components/header";
import theme from "../../styles/theme";
import HeaderText from "../../components/page-ui-components/header-text";
import LanguageIcon from "@mui/icons-material/Language";
import Image from "next/image";
const ViewEvent = () => {
  return (
    <>
      <Box mb={10}>
        <Header text="Event Name" backIcon editIcon />
      </Box>
      <Container>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontSize: "1.25rem",
            color: theme.palette.secondary.main,
            fontWeight: 600,
            mb: 2,
          }}
        >
          Statistics
        </Typography>
        <HeaderText text1="Fri, 24th Jan’22" text2="STARTED: 19:00" />
        <Stack
          sx={{
            boxShadow: "0px 0px 20px 2px rgba(9, 14, 130, 0.05)",
            borderRadius: "12px",
            p: 3,
            mb: 4,
          }}
          direction="row"
          justifyContent={"space-between"}
          alignItems="center"
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <LanguageIcon />
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "20px",
                color: "#121212",
              }}
            >
              Live Count
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "30px",
              lineHeight: "44px",
              color: "#090E82",
            }}
          >
            500
          </Typography>
        </Stack>
        <Grid container>
          <Grid item xs={4} spacing={1}>
            <Image
              style={{ border: "1px solid red" }}
              src="/meeting.png"
              width={100}
              height={100}
              alt="image"
            />
          </Grid>
          <Grid item xs={4}>
            <Image
              style={{ border: "1px solid red" }}
              src="/meeting.png"
              width={100}
              height={100}
              alt="image"
            />
          </Grid>
          <Grid item xs={4}>
            <Image
              style={{ border: "1px solid red" }}
              src="/meeting.png"
              width={100}
              height={100}
              alt="image"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ViewEvent;
