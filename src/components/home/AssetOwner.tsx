import { Container, Box, Text, Flex } from "@chakra-ui/react";
import React from "react";

const reasons = [
  {
    title: "Access to Broad Assets",
    description:
      "Retail investors can gain access to alternative investments having sustainable returns backed by real assets ",
  },
  {
    title: "Fractionalization",
    description:
      "Investors can own a fractional asset and be an owner in assets that typically are inaccessible without fractionalization. // reword ",
  },
  {
    title: "Transparency",
    description:
      "All the transactions are recorded on the blockchain, making it fully transparent and immutable of ownership. ",
  },
  {
    title: "Instant Settlement ",
    description:
      "Harness the power of DLT technologies to get instant settlements along with high liquidity and lower fees. ",
  },
];

function AssetOwner() {
  return (
    <Container maxW={1300} p={{ base: "5vh 0px", md: "15vh 0px" }}>
      <Box textAlign="center" mb={{ base: 6, md: 8 }}>
        <Text
          as="h2"
          fontSize={{ base: "24px", md: "36px" }}
          fontWeight="600"
          mb={{ base: 10, md: 28 }}
          color="#121212"
        >
          We provide liquidation to Asset owners 
        </Text>
      </Box>
      <Flex justifyContent="center" alignItems="flex-start" flexWrap="wrap">
        {reasons.map((reason, index) => (
          <Box key={index} width={{ base: "100%", md: "48%" }} mb={14} px={4}>
            <Flex
              flexDirection="column"
              align="center"
              justify="center"
              textAlign="center"
              width={{ base: "90%", md: "48%" }}
              margin="auto"
            >
              <Text
                as="h3"
                fontSize={{ base: "22px", md: "25px" }}
                fontWeight="600"
                mb={2}
              >
                {reason.title}
              </Text>
              <Text color="#616161">{reason.description}</Text>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Container>
  );
}

export default AssetOwner;
