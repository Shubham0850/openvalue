import { Container, Box, Text, Flex } from "@chakra-ui/react";
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
      width={{ base: "73%", md: "25%" }}
      gap={{ md: "3" }}
      mt="20px"
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
    <Container maxW={1300} py={{ base: "9vh", md: "15vh", lg: "25vh" }}>
      <Box textAlign="center" mb={{ base: 6, md: 8 }}>
        <Text
          as="h2"
          fontSize={{ base: "24px", md: "36px", lg: "48px" }}
          fontWeight={{ base: "500", md: "600" }}
          mb={{ base: 4, md: 6 }}
          color="#121212"
        >
          Why Us?
        </Text>
        <Text
          fontSize={{ base: "12px", md: "16px", lg: "18px" }}
          fontWeight="300"
          color="#616161"
          mb={{ base: 6, md: 10, lg: 28 }}
          margin="auto"
          width={{ base: "70%", md: "70%" }}
        >
          Open value is a marketplace for top-tier tokenized assets across
          various sectors.
        </Text>
      </Box>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        gap={{ md: "20", base: "10" }}
        marginBottom={{ base: "40px", md: "80px" }}
      >
        <RenderReason
          key="data1"
          title="Access to Broad Assets"
          description="Retail investors can gain access to alternative investments having sustainable returns backed by real assets"
        />
        {/* Vertical Line */}
        {/* <Box
          height="50%"
          width="2px"
          bg="gray.400"
          display={{ base: "none" }}
        /> */}
        <RenderReason
          key="data2"
          title="Fractionalization"
          description="Investors can own a fractional asset and be an owner in assets that typically are inaccessible without fractionalization. // reword "
        />
      </Flex>
      {/* Horizontal Line */}
      <Box
        width="40%"
        height="1px"
        margin="auto"
        bg="gray.400"
        marginBottom={{ md: "80px" }}
        display={{ base: "none", md: "block" }}
      />
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        gap={{ md: "20", base: "10" }}
      >
        <RenderReason
          key="data3"
          title="Transparency"
          description="All the transactions are recorded on the blockchain, making it fully transparent and immutable of ownership."
        />
        {/* Vertical Line */}
        {/* <Box
          height="100%"
          width="2px"
          bg="black"
          display={{ base: "none", md: "block" }}
        /> */}
        <RenderReason
          key="data4"
          title="Instant Settlement"
          description="Harness the power of DLT technologies to get instant settlements along with high liquidity and lower fees."
        />
      </Flex>
    </Container>
  );
}

export default WhyUs;
