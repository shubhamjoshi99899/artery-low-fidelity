import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
    secondaryLight: Palette["primary"];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
    secondaryLight?: PaletteOptions["primary"];
  }
  interface Theme {
    custom: {
      pending: {
        dark: string;
        light: string;
      };
    };
  }

  interface ThemeOptions {
    custom?: {
      pending: {
        dark: string;
        light: string;
      };
    };
  }

  interface TypographyVariants {
    primaryColorText: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    primaryColorText?: React.CSSProperties;
  }
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    primaryColorText: true;
    a_required: true;
    va_passed: true;
    va_failed: true;
    draft: true;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    va_required: true;
    va_passed: true;
    va_failed: true;
    draft: true;
  }
}

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: "'Mukta', sans-serif",
    h1: {
      fontSize: 21,
    },
    h2: {
      fontSize: 20,
      fontWeight: 600,
      color: "#21212",
    },

    h6: {
      fontSize: 16,
      fontWeight: 500,
      color: "#21212",
    },

    subtitle2: {
      fontSize: 15,
      fontWeight: 600,
      color: "#495057",
    },

    subtitle1: {
      fontSize: 14,
      fontWeight: 500,
      color: "#212121",
    },
    body1: {
      fontSize: 13,
    },
    body2: {
      fontSize: 11,
      fontWeight: 700,
    },
    primaryColorText: {
      fontSize: 13,
      fontWeight: 500,
      color: "#7D287D",
    },
    caption: {
      fontSize: 10,
      color: "#919191",
      fontWeight: 500,
      textTransform: "uppercase",
    },
  },

  palette: {
    primary: {
      main: "#020655",
      light: "#fff",
    },
    secondary: {
      main: "#090E82",
      light: "#EAE3F1",
    },
    secondaryLight: {
      main: "#FFFFD2",
      contrastText: "#5f2120",
    },

    error: {
      main: "rgb(175, 47, 47)",
    },
    neutral: {
      main: "#014361",
      contrastText: "#fff",
    },
    grey: {
      "100": "#868995",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  custom: {
    pending: {
      dark: "#663c00",
      light: "#fff4e5",
    },
  },
});

export default theme;
