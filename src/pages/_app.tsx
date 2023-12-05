import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Poppins,  sans-serif",
    heading: "Poppins,  sans-serif",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
