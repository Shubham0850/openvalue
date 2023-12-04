import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

const EarlyAccess = () => {
  return (
    <Box
      p={{ base: "5vh 0px", md: "15vh 0px" }}
      bgGradient="linear(to-r, #6495ED, #DAA520)"
      color="white"
      py={{ base: 8, md: 16 }}
      textAlign="center"
    >
      <Container maxW={{ base: "100%", md: "1300px" }}>
        <Text
          as="h2"
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="bold"
          width={{ base: "100%", md: "60%" }}
          margin="auto"
          mb={{ base: 4, md: 8 }}
        >
          A platform to buy and sell modernized Financial Assets
        </Text>
        <button className="thin-button">Get early access</button>
      </Container>
    </Box>
  );
};

export default EarlyAccess;
