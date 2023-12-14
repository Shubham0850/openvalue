import { Box, Container, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const EarlyAccess = () => {
  return (
    <Box
      p={{ base: "5vh 0px" }}
      m={{ base: "4vh 0px", md: "20vh 0" }}
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
          A Platform To Buy And Sell modernized Financial Assets
        </Text>
        <Link
          href={
            "https://docs.google.com/forms/d/e/1FAIpQLSfWIJ9wQpTP6IKLhzO25v4mFw276r24AXnYhIO-QbD-H6T-nA/viewform "
          }
          target="_blank"
        >
          <button className="thin-button" >Get Early Access</button>
        </Link>
        
      </Container>
    </Box>
  );
};

export default EarlyAccess;
