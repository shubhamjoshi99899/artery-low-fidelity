type VariantProps = "text" | "outlined" | "contained" | undefined;

export interface ShareButtonProps {
  text: string;
  onClick?: any;
  variant?: VariantProps;
  sx?: any;
  loading?: boolean;
  disabled?: boolean;
  type?: any;
  fullWidth?: any;
  mb?: any;
  dark?: boolean;
}

export interface PrimaryButtonProps {
  text: string;
  onClick?: any;
  variant: VariantProps;
  sx?: any;
  loading?: boolean;
  disabled?: boolean;
  type?: any;
  fullWidth?: any;
  mb?: any;
  dark?: boolean;
}
