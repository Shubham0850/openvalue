import { Box, Heading, Text, Button, Container, Flex } from "@chakra-ui/react";
import Link from "next/link";

const Hero = () => {
  return (
    <Box color="#121212" py={{ base: 8, md: "11vh" }} className="relative">
      <Container maxW="1300">
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
            Buy and Sell Institutional Grade Real-World Assets
          </Heading>
          <Text
            fontSize={{ base: "14px", md: "18px" }}
            width={{ base: "74%", md: "58%" }}
            mb={{ base: "70px", md: 8 }}
          >
            Tangido is a secondary marketplace to trade real-world assets .
            Users can buy, and sell tokenized Assets across a wide range of
            classes and sectors ranging from private credit, fixed debt
            instruments, real estate, precious metals, collectibles, and carbon
            credits
          </Text>
          <Link
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSfWIJ9wQpTP6IKLhzO25v4mFw276r24AXnYhIO-QbD-H6T-nA/viewform "
            }
            target="_blank"
          >
            <button className="opposite-button ">Join Waitlist</button>
          </Link>
        </Flex>

        <Box className="absolute -z-10 top-0 left-1/2 transform -translate-x-1/2">
          <img src="/gradient/HeroCenter.svg" alt="hero" width="100%" />
        </Box>
        <Box className="absolute -z-10 top-0 right-0">
          <img src="/gradient/HeaderRight.svg" alt="hero" width="100%" />
        </Box>
        <Box className="absolute -z-10 -top-[15%] left-0 w-[100%]">
          <img src="/gradient/HeaderBottom.svg" alt="hero" width="100%" />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
