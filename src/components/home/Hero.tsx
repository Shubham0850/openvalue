import { Box, Heading, Text, Button, Container, Flex } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box color="#121212" py={{ base: 8, md: 16 }}>
      <Container maxW="1300" p={{ base: "5vh 0px", md: "15vh 0px" }}>
        <Flex
          align="center"
          justify="center"
          flexDirection="column"
          textAlign="center"
        >
          <Heading
            as="h1"
            width={{ base: "90%", md: "70%" }}
            fontSize={{ base: "2xl", md: "64px" }}
            mb={{ base: 4, md: 4 }}
            fontWeight="600"
          >
            Explore Institutional Grade Real-world Assets
          </Heading>
          <Text
            fontSize={{ base: "md", md: "18px" }}
            width={{ base: "90%", md: "55%" }}
            mb={{ base: 8, md: 8 }}
          >
            Open value is a marketplace for top-tier tokenized assets across
            various sectors like real estate, debit securities (bonds +
            T-bills), private credit – precious metals, carbon credits, and
            stocks.
          </Text>
          <button className="opposite-button">Invest Now</button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
