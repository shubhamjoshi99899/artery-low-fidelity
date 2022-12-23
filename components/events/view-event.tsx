import React from "react";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";

interface Props {
  details?: any;
}
const ViewEvent: React.FC<Props> = ({ details }) => {
  return (
    <>
      {details?.map((detail: any, index: number) => (
        <Stack
          key={index}
          sx={{
            boxShadow: "0px 0px 20px 2px rgba(9, 14, 130, 0.05)",
            borderRadius: "12px",
            p: 3,
            mb: 3,
          }}
          direction="row"
          justifyContent={"space-between"}
          alignItems="center"
        >
          <Stack direction="row" spacing={2} alignItems="center">
            {detail?.icon}
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "20px",
                color: "#121212",
              }}
            >
              {detail?.title}
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
            {detail?.count}
          </Typography>
        </Stack>
      ))}
    </>
  );
};

export default ViewEvent;
