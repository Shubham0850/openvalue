import { Container, Box, Text, Flex, Grid } from "@chakra-ui/react";
import React from "react";

function RenderReason({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Flex
      flexDirection="column"
      align="center"
      justify="center"
      textAlign="center"
      width="100%"
      gap={{ md: "3" }}
      padding={8}
      
    >
      <Text
        as="h3"
        fontSize={{ base: "20px", md: "26px" }}
        fontWeight={{ base: "500", md: "600" }}
        mb={2}
      >
        {title}
      </Text>
      <Text color="#616161" fontSize={{ base: "12px", md: "16px" }}>
        {description}
      </Text>
    </Flex>
  );
}

function WhyUs() {
  return (
    <Container maxW={1300} py={{ base: "1vh", md: "15vh", lg: "25vh" }} id="whyus">
      <Box textAlign="center" mb={{ base: 6, md: 8 }}>
        <Text
          as="h2"
          fontSize={{ base: "24px", md: "36px", lg: "48px" }}
          fontWeight={{ base: "500", md: "600" }}
          mb={{ base: 4, md: 6 }}
          color="#121212"
        >
          The Tangido Edge
        </Text>
        <Text
          fontSize={{ base: "12px", md: "16px", lg: "18px" }}
          fontWeight="300"
          color="#616161"
          mb={{ base: 6, md: 20 }}
          margin="auto"
          width={{ base: "70%", md: "70%" }}
        >
         We are offering key features to trade tokenized assets efficiently 
        </Text>
      </Box>

      <Box className="relative">
        <Grid
          maxW={800}
          mx="auto"
          gap={{ base: 1, md: 10 }}
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        >
          <RenderReason
            key="data1"
            title="

            Secondary Marketplace
            "
            description="Users can seamlessly trade tokenized assets without constraints of multiple platforms and  geographical boundaries 
            "
          />
          <RenderReason
            key="data2"
            title="Fractional Ownership
            "
            description=" Users can own a piece of typically inaccessible assets.Our platform enables fractional ownership, allowing you to hold a stake in high-value assets."
          />
          <RenderReason
            key="data3"
            title="

            Market flexibility 
            "
            description="Users can buy or sell the tokenized assets without bounds with almost real time settlement and 24/7 open markets. "
          />
          <RenderReason
            key="data4"
            title="
            Transparency 
            "
            description="Transparency is built into the platform designed as all the transactions are recorded on the blockchain database. Thereby providing immutable, censorship-resistant records of transactions."
          />
        </Grid>

        <Box className="absolute -z-10 top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center d-none">
          <img src="/gradient/plus-line.svg" alt="plus-line" width="100%" className="-m-10" />
        </Box>

        <Box className="absolute -z-10 -top-[50%] left-1/2 transform -translate-x-1/2 w-[100%]">
          <img
            src="/gradient/WhyUsCenter.svg"
            alt="hero"
            width="120%"
          />
        </Box>
      </Box>
      <Flex display={{ base: 'flex', md: 'none' }} justifyContent={"center"}  alignItems={"center"}  >
        <svg xmlns="http://www.w3.org/2000/svg" width="777" height="2" viewBox="0 0 777 2" fill="none">
          <path opacity="0.5" d="M1 1L776 1" stroke="url(#paint0_radial_475_2385)" stroke-width="1.5" stroke-linecap="round" />
          <defs>
            <radialGradient id="paint0_radial_475_2385" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(776 1.43883) rotate(179.999) scale(775 937024)">
              <stop stop-color="white" />
              <stop offset="0.463542" stop-color="#74C69D" />
              <stop offset="1" stop-color="white" />
            </radialGradient>
          </defs>
        </svg>
      </Flex>

    </Container>
  );
}

export default WhyUs;
