import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import ContextProviderWrapper from "../context/contextProvider";
import theme from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProviderWrapper>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ContextProviderWrapper>
  );
}
