import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import theme from "../styles/theme";
import { Box, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import { useRouter } from "next/router";
interface Props {
  text: string;
  backIcon?: boolean;
  editIcon?: boolean;
  sx?: any;
}

const Header: React.FC<Props> = ({ text, backIcon, editIcon, sx }) => {
  const router = useRouter();
  return (
    <Stack
      sx={{
        background: theme.palette.primary.light,
        mb: 10,
      }}
    >
      <AppBar
        sx={{
          boxShadow: "none",
          mb: 10,
        }}
      >
        <Toolbar
          sx={{
            textAlign: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            background: theme.palette.primary.light,
            boxShadow: "none",
            borderBottom: "1px solid #6C6C6C !important",
          }}
        >
          {backIcon ? (
            <IconButton onClick={() => router.back()}>
              <ArrowBackIcon />
            </IconButton>
          ) : (
            <Box></Box>
          )}
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: "22px",
              color: theme.palette.primary.main,
              textAlign: "center",
              fontWeight: 600,
              ...sx,
              // ml: backIcon ? -10 : editIcon ? 0 : 0,
            }}
          >
            {text}
          </Typography>
          {editIcon ? (
            <IconButton>
              <EditIcon />
            </IconButton>
          ) : (
            <Box></Box>
          )}
        </Toolbar>
      </AppBar>
    </Stack>
  );
};

export default Header;
