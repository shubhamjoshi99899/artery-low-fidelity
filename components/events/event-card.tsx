import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const EventCard = () => {
  return (
    <>
      <Box
        sx={{
          background: "#FFFFFF",
          boxShadow: "0px 0px 20px 2px rgba(9, 14, 130, 0.05)",
          borderRadius: "8px",
          padding: "16px 32px",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Box
              sx={{
                background: "#090E82",
                borderRadius: "4px",
                padding: "6px 12px",
                maxWidth: "56px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "1rem",
                  lineHeight: "19px",
                  color: "#fff",
                }}
              >
                Feb <br /> 2022
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "1rem",
                  lineHeight: "19px",
                  color: "#000",
                }}
              >
                Ongoing Event
              </Typography>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "1rem",
                  lineHeight: "19px",
                  color: "#000",
                }}
              >
                19:00 - 00:00
              </Typography>
            </Box>
          </Stack>
          <FiberManualRecordIcon sx={{ color: "green" }} />
        </Stack>
      </Box>
    </>
  );
};

export default EventCard;
