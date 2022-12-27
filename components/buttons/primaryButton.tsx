import { LoadingButton } from "@mui/lab";
import { Theme, Typography } from "@mui/material";
import React from "react";
import { PrimaryButtonProps } from "../../interfaces/primary-button.interface";
import theme from "../../styles/theme";

type VariantProps = "text" | "outlined" | "contained" | undefined;

const PrimaryButton: React.FunctionComponent<PrimaryButtonProps> = ({
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
    <LoadingButton
      color="primary"
      onClick={onClick}
      variant={variant}
      type={type ? type : "submit"}
      sx={{
        boxShadow: "none",
        height: "48px",
        background: dark ? theme.palette.secondary.main : "default",
        borderColor: theme.palette.secondary.main,
        mb: mb,

        // color: "#fff",
        ...sx,
      }}
      loading={loading}
      fullWidth={fullWidth}
      disabled={loading || disabled}
    >
      <Typography
        fontSize={"14px"}
        fontWeight={700}
        variant="body1"
        component={"p"}
        textTransform={"none"}
      >
        {text}
      </Typography>
    </LoadingButton>
  );
};

export default PrimaryButton;
