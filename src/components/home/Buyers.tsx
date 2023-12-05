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
      align={{ base: "center", md: "start" }}
      justify="center"
      textAlign={{ base: "center", md: "start" }}
      margin={{ base: "auto", md: "0" }}
      width={{ base: "73%", md: "22%" }}
      gap={{ md: "3", base: "2" }}
      mt="20px"
    >
      <Flex gap={4} align="center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <circle opacity="0.6" cx="10" cy="10" r="10" fill="#74C69D" />
        </svg>
        <Text
          as="h3"
          fontSize={{ base: "20px", md: "22px" }}
          fontWeight={{ base: "500", md: "600" }}
        >
          {title}
        </Text>
      </Flex>

      <Text
        color="#616161"
        fontSize={{ base: "12px", md: "14px" }}
        fontWeight={{ base: "400", md: "400" }}
      >
        {description}
      </Text>
    </Flex>
  );
}

function Buyers() {
  return (
    <Container maxW={1300} p={{ base: "5vh 0px", md: "15vh 0px" }}>
      <Box textAlign="center" mb={{ base: 6, md: 8 }}>
        <Text
          as="h2"
          fontSize={{ base: "24px", md: "36px" }}
          fontWeight="600"
          mb={{ base: 10, md: 14 }}
          color="#121212"
        >
          We offer wide range of asset class to Buyers
        </Text>
      </Box>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems="start"
        gap={{ md: "20", base: "10" }}
      >
        <RenderReason
          key="data1"
          title="Accessibility"
          description="Retails get access to diversified assets tokenized assets and build portfolio."
        />

        <RenderReason
          key="data2"
          title="Diversification"
          description="Asset diversification helps spread investment risk across different asset classes, reducing the overall portfolio volatility. "
        />

        <RenderReason
          key="data2"
          title="inflation resistance Assets"
          description="Many of assets like realestate , precious metals, bonds have stable returns compared to other assets. "
        />
      </Flex>
    </Container>
  );
}

export default Buyers;
