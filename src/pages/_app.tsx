import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
