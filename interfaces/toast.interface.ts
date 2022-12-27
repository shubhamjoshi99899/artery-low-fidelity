type Severity = "error" | "success" | "info" | "warning" | undefined;

export interface ToastProps {
  open: boolean;
  severity: Severity;
  message: any;
  messages?: Array<string>;
  seconds: number;
  handleClose: Function;
}
