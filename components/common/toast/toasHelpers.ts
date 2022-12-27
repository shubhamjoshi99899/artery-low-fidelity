export const SuccessToast = (message: any, toastContext: any) => {
  if (message.length) {
    toastContext?.dispatch({
      type: "new-toast",
      value: {
        open: true,
        severity: "success",
        message: message,
        seconds: 10000,
      },
    });
  }
};

export const ErrorToast = (errorObj: any, toastContext: any) => {
  if (errorObj.status === 401) {
    localStorage.clear();
    window.location.href = process.env.NEXT_PUBLIC_WEB_URL
      ? process.env.NEXT_PUBLIC_WEB_URL
      : "";
  } else {
    if (errorObj?.body?.length > 0) {
      let message: string = "";
      errorObj.body.forEach((error: any) => {
        message += error.message + "\n";
      });
      toastContext?.dispatch({
        type: "new-toast",
        value: {
          open: true,
          severity: "error",
          message: message,
          seconds: 10000,
        },
      });
    } else {
      toastContext?.dispatch({
        type: "new-toast",
        value: {
          open: true,
          severity: "error",
          message: errorObj.message,
          seconds: 10000,
        },
      });
    }
  }
};

export const InfoToast = (message: any, toastContext: any) => {
  toastContext?.dispatch({
    type: "new-toast",
    value: {
      open: true,
      severity: "info",
      message: message,
      seconds: 10000,
    },
  });
};

export const WarningToast = (message: any, toastContext: any) => {
  toastContext?.dispatch({
    type: "new-toast",
    value: {
      open: true,
      severity: "warning",
      message: message,
      seconds: 10000,
    },
  });
};
