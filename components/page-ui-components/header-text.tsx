import React from "react";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import theme from "../../styles/theme";

interface Props {
  text1?: string;
  text2?: string;
}

const HeaderText: React.FC<Props> = ({ text1, text2 }) => {
  return (
    <>
      <Stack direction="row" justifyContent={"space-between"}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "1rem",
            lineHeight: "20px",
            letterSpacing: "0.5px",
            color: "#7D7D7D",
            mb: 2,
          }}
        >
          {text1}
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "1rem",
            lineHeight: "20px",
            letterSpacing: "0.5px",
            color: theme.palette.secondary.main,
            mb: 2,
            textAlign: "right",
          }}
        >
          {text2}
        </Typography>
      </Stack>
    </>
  );
};

export default HeaderText;
