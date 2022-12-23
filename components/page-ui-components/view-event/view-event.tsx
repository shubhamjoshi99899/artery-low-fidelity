import {
  Container,
  Grid,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import theme from "../../../styles/theme";
import HeaderText from "../header-text";
import SyncIcon from "@mui/icons-material/Sync";
import LanguageIcon from "@mui/icons-material/Language";

interface Props {
  data: any;
  getEventDetails: any;
  loading: any;
  paginatedData: any;
}
const skeletonArray = Array(10).fill("");

const ViewEventComponent: React.FC<Props> = ({
  getEventDetails,
  data,
  loading,
  paginatedData,
}) => {
  return (
    <>
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
          {paginatedData?.map((item: any, index: number) => (
            <Grid key={index} item xs={4}>
              {item?.faces && (
                <Image
                  src={item?.faces[0]?.url}
                  width={120}
                  height={180}
                  alt="image"
                  style={{ marginBottom: "12px" }}
                />
              )}
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ViewEventComponent;
