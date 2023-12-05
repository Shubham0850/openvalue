import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

const EarlyAccess = () => {
  return (
    <Box
      p={{ base: "5vh 0px" }}
      m={{ base: "8vh 0px", md: "20vh 0" }}
      bgGradient="linear-gradient(31deg, hsla(151, 40%, 70%, 1) 30%, hsla(46, 65%, 69%, 1) 100%)"
      color="white"
      py={{ base: 8, md: 16 }}
      textAlign="center"
    >
      <Container
        maxW={{ base: "100%", md: "1300px" }}
        p={{ base: "5vh 0px", md: "0px" }}
      >
        <Text
          as="h2"
          fontSize={{ base: "28px", md: "48px" }}
          fontWeight="600"
          width={{ base: "75%", md: "80%" }}
          margin="auto"
          mb={{ base: 10, md: 8 }}
          color="black"
        >
          A Platform To Buy And Sell Modernized Financial Assets
        </Text>
        <button className="thin-button">Get early access</button>
      </Container>
    </Box>
  );
};

export default EarlyAccess;
