import { LoadingButton } from "@mui/lab";
import { Theme, Typography, Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import { ShareButtonProps } from "../../interfaces/primary-button.interface";
import theme from "../../styles/theme";

const ShareButton: React.FunctionComponent<ShareButtonProps> = ({
  text,
  onClick,
  variant,
  loading,
  disabled,
  type,
  fullWidth,
  dark,
  mb,
  sx,
}) => {
  return (
    <Button
      sx={{
        background: "#fff",
        textTransform: "capitalize",
        color: theme.palette.primary.main,
        fontWeight: 600,
        fontSize: "1rem",
        borderRadius: "none",
        border: "1px solid #090E82",
        boxShadow: "0px 0px 10px rgba(9, 14, 130, 0.05)",
        height: "46px",
      }}
      variant="contained"
      fullWidth
      onClick={onClick}
    >
      <Image
        src="/share.png"
        width={15}
        height={15}
        style={{ marginRight: "10px" }}
        alt="google"
      />
      {text}
    </Button>
  );
};

export default ShareButton;
