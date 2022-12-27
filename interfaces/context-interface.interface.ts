export interface action {
  type: any;
  value: any;
}

export interface toastInitialState {
  open: boolean;
  severity: Severity;
  message: string;
  messages?: Array<string>;
  seconds: number;
}

type Severity = "error" | "success" | "info" | "warning" | undefined;

export interface toast {
  state: toastInitialState;
  dispatch: any;
}

export interface backdropLoader {
  open: boolean;
}
