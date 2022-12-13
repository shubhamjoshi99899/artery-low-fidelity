import * as React from "react";
import {
  Box,
  InputAdornment,
  InputLabel,
  TextField,
  Theme,
} from "@mui/material";
import theme from "../../styles/theme";

interface Props {
  id?: any;
  label?: string;
  placeholder: string;
  value?: any;
  formik?: any;
  error?: any;
  helperText?: any;
  name?: string;
  multiline?: boolean;
  endAdornment?: any;
  rows?: any;
  required?: any;
  type?: any;
  sx?: any;
  disabled?: boolean;
  percent?: any;
  handleChange?: any;
}

const CustomizedInputField: React.FC<Props> = ({
  label,
  id,
  placeholder,
  value,
  formik,
  error,
  helperText,
  name,
  multiline,
  rows,
  type,
  required,
  sx,
  percent,
  disabled,
  handleChange,
}) => {
  return (
    <Box mt={1}>
      <InputLabel
        sx={{
          fontWeight: 600,
          fontSize: "1.25rem",
          color: theme.palette.secondary.main,
        }}
        shrink
        htmlFor={id}
      >
        {label}
      </InputLabel>
      <TextField
        InputProps={{
          style: {
            height: rows > 0 ? "auto" : "40px",
            borderRadius: "0.3125rem",
            fontSize: "0.9375rem",
            boxShadow: "none",
          },
          endAdornment: percent && (
            <InputAdornment position="start">%</InputAdornment>
          ),
          inputProps: percent && {
            type: "number",
            min: "0",
            max: "100",
          },
        }}
        fullWidth
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={formik ? formik.handleChange : handleChange}
        id={id}
        rows={rows}
        multiline={multiline}
        error={error}
        name={name}
        helperText={helperText}
        sx={{
          "& ::placeholder": {
            color: "#242424",
            fontSize: "0.9375rem",
            fontWeight: "400",
          },
          ...sx,
        }}
        type={type ? type : "text"}
        disabled={disabled}
      />
    </Box>
  );
};
export default CustomizedInputField;
