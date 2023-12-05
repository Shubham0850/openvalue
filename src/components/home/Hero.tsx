import { Box, Heading, Text, Button, Container, Flex } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box color="#121212" py={{ base: 8, md: "11vh" }} className="relative">
      <Container maxW="1300" >
        <Flex
          align="center"
          justify="center"
          flexDirection="column"
          textAlign="center"
        >
          <Heading
            as="h1"
            width={{ base: "90%", md: "70%" }}
            fontSize={{ base: "28px", md: "64px" }}
            mb={{ base: 4, md: 4 }}
            fontWeight="600"
            mt={{ base: "154px" }}
          >
            Explore Institutional Grade Real-world Assets
          </Heading>
          <Text
            fontSize={{ base: "14px", md: "18px" }}
            width={{ base: "74%", md: "58%" }}
            mb={{ base: "70px", md: 8 }}
          >
            Open value is a marketplace for top-tier tokenized assets across
            various sectors like real estate, debit securities (bonds +
            T-bills), private credit – precious metals, carbon credits, and
            stocks.
          </Text>
          <button className="opposite-button">Invest Now</button>
        </Flex>

        <Box className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <img
            src="/gradient/HeroCenter.svg"
            alt="hero"
            width="100%"
          />
        </Box>
        <Box className="absolute top-0 right-0">
          <img
            src="/gradient/HeaderRight.svg"
            alt="hero"
            width="100%"
          />
        </Box>
        <Box className="absolute -top-[15%] left-0 w-[100%]">
          <img
            src="/gradient/HeaderBottom.svg"
            alt="hero"
            width="100%"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
