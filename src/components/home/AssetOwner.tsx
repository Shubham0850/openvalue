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
      align={{ base: "start", md: "start" }}
      justify="center"
      textAlign={{ base: "start", md: "start" }}
      margin={{ base: "auto", md: "0" }}
      width={{ base: "98%", md: "22%" }}
      gap={{ md: "3", base: "2" }}
      mt="20px"
    >
      <Flex gap={4} align="center" marginLeft="-35px">
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
          fontSize={{ base: "18px", md: "22px" }}
          fontWeight={{ base: "400", md: "600" }}
        >
          {title}
        </Text>
      </Flex>

      <Text
        color="#616161"
        fontSize={{ base: "14px", md: "14px" }}
        fontWeight={{ base: "400", md: "400" }}
      >
        {description}
      </Text>
    </Flex>
  );
}

function AssetOwner() {
  return (
    <Container maxW={1300} p={{ base: "5vh 0px", md: "15vh 0px" }} id="asset">
      <Box textAlign="center">
        <Text
          as="h2"
          fontSize={{ base: "24px", md: "36px" }}
          fontWeight="600"
          color="#121212"
          width={{ base: "73%" }}
          margin={"auto"}
        >
          We Unlock Asset Issuers Navigate New Distribution Channels
        </Text>
      </Box>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        mb={{ base: "1px", md: "60px" }}
        mt={"30px"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="777"
          height="2"
          viewBox="0 0 777 2"
          fill="none"
        >
          <path
            opacity="0.5"
            d="M1 1L776 1"
            stroke="url(#paint0_radial_475_2385)"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <defs>
            <radialGradient
              id="paint0_radial_475_2385"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(776 1.43883) rotate(179.999) scale(775 937024)"
            >
              <stop stop-color="white" />
              <stop offset="0.463542" stop-color="#74C69D" />
              <stop offset="1" stop-color="white" />
            </radialGradient>
          </defs>
        </svg>
      </Flex>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems="start"
        gap={{ md: "20", base: "10" }}
        p={{ base: 10, md: 0 }}
      >
        <RenderReason
          key="data1"
          title="Early Liquidation: "
          description="We enable asset issuers to list their tokenized assets on our marketplace before maturity, providing an avenue for early liquidation and capital generation."
        />

        <RenderReason
          key="data2"
          title="Price Discovery:"
          description="Our platform facilitates the creation of new markets for illiquid assets through tokenization. This leads to improved liquidity, easier trading access, and more accurate price discovery."
        />

        <RenderReason
          key="data2"
          title="Global Investor Access:"
          description="Our user-friendly onboarding process and global reach provide asset issuers with a diverse investor base, optimal pricing, and compliance assurance.
          "
        />
      </Flex>
    </Container>
  );
}

export default AssetOwner;
