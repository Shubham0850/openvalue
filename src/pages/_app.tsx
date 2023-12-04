import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
