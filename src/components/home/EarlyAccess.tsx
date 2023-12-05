import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

const EarlyAccess = () => {
  return (
    <Box
      p={{ base: "5vh 0px", md: "15vh 0px" }}
      bgGradient="linear-gradient(31deg, hsla(151, 40%, 70%, 1) 30%, hsla(46, 65%, 69%, 1) 100%)"
      color="white"
      py={{ base: 8, md: 16 }}
      textAlign="center"
    >
      <Container maxW={{ base: "100%", md: "1300px" }}>
        <Text
          as="h2"
          fontSize={{ base: "2xl", md: "48px" }}
          fontWeight="600"
          width={{ base: "100%", md: "80%" }}
          margin="auto"
          mb={{ base: 4, md: 8 }}
          color="black"
        >
          A platform to buy and sell modernized Financial Assets
        </Text>
        <button className="thin-button">Get early access</button>
      </Container>
    </Box>
  );
};

export default EarlyAccess;
