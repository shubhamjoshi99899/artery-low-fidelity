import React from "react";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  Grid,
  Chip,
  TextField,
  InputLabel,
} from "@mui/material";
import Header from "../../components/header";
import Checkbox from "@mui/material/Checkbox";
import PrimaryButton from "../../components/buttons/primaryButton";
const NegativeList = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <Box mb={10}>
        <Header sx={{ ml: -5 }} text="Negative List" backIcon />
        <Container>
          {/* <Stack mb={2} direction="row" justifyContent="left" spacing={3}>
            <Chip
              sx={{
                background: "#090E82",
                px: 1,
                color: "#fff",
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "14px",
              }}
              label="Statistics"
            />
            <Chip
              sx={{
                background: "#DADADA",
                px: 1,
                color: "#090E82",
                borderRadius: "8px",
                border: "1px solid #090E82",
                fontWeight: 600,
                fontSize: "14px",
              }}
              label="Event Details"
              variant="outlined"
            />
          </Stack> */}
        </Container>
        <Divider sx={{ mb: 3 }} />
        <Container>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems="center"
            sx={{ mb: 3 }}
          >
            <Stack
              direction="row"
              justifyContent={"space-between"}
              alignItems="center"
              spacing={2}
            >
              <Box
                sx={{
                  background: "#ECEDFF",
                  color: "#090E82",
                  border: "1px solid #090E82",
                  fontWeight: 500,
                  fontSize: "14px",
                  textAlign: "center",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                A
              </Box>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "20px",
                  color: "#000",
                }}
              >
                Name
              </Typography>
            </Stack>

            <Checkbox {...label} />
          </Stack>
          <PrimaryButton
            text="Add Members"
            variant="outlined"
            fullWidth
            type={"submit"}
            sx={{ mb: 3 }}
          />
          <PrimaryButton
            text="Create"
            variant="contained"
            fullWidth
            type={"submit"}
            dark
            sx={{ mb: 3 }}
          />
        </Container>
      </Box>
    </>
  );
};

export default NegativeList;
