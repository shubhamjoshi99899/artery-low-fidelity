import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  Grid,
  Skeleton,
  IconButton,
} from "@mui/material";
import Header from "../../components/header";
import theme from "../../styles/theme";
import HeaderText from "../../components/page-ui-components/header-text";
import LanguageIcon from "@mui/icons-material/Language";
import Image from "next/image";
import axios from "axios";
import SyncIcon from "@mui/icons-material/Sync";
interface Props {
  query?: any;
}
const ViewEvent: React.FC<Props> = ({ query }) => {
  const [data, setData] = useState<any | []>([]);

  const getEventDetails = () => {
    axios
      .get(`https://portal.wisercount.com/api/event/${query.index}`)
      .then((res) => {
        setData(res.data.persons);
        console.log(res.data.persons);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getEventDetails();
  }, [query]);
  return (
    <>
      <Box mb={10}>
        <Header text="Event Name" backIcon editIcon />
      </Box>
      <Container>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
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
          <IconButton onClick={getEventDetails}>
            <SyncIcon />
          </IconButton>
        </Stack>
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
              Final Count
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
            {data?.length}
          </Typography>
        </Stack>
        <Grid container>
          {/* <Grid item xs={4} spacing={1}>
            <Image
              style={{ border: "1px solid red" }}
              src={data?.persons?.f}
              width={100}
              height={100}
              alt="image"
            />
          </Grid>
          */}

          {/* <Grid item xs={4}>
            <Image
              // style={{ border: "1px solid red" }}
              src="/meeting.png"
              width={100}
              height={100}
              alt="image"
            />
          </Grid> */}
          {data?.map((item: any, index: number) => (
            <Grid key={index} item xs={4}>
              {item?.faces ? (
                <Image
                  // style={{ border: "1px solid red" }}
                  src={item?.faces[0]?.url}
                  width={100}
                  height={100}
                  alt="image"
                />
              ) : (
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={100}
                  height={100}
                />
              )}
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ViewEvent;

ViewEvent.getInitialProps = async ({ query }) => {
  return { query };
};
