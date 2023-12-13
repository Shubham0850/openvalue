import {
  Container,
  Text,
  Flex,
  Box,
  Grid,
  useBreakpointValue,
} from "@chakra-ui/react";

const DiscoverAssets = () => {
  const iconColor = "#ab854c";
  const borderStyle = useBreakpointValue({
    base: { border: "none" },
    md: { border: "1px solid #E5E5E5" },
  });

  const assetData = [
    {
      image: "/card.png",
      heading: "Private Credit",
      description:
        "Access to tokenized private debt assets such as trade receivables, SMEs, and mortgage instruments. ",
    },
    {
      image: "/creditcard.png",
      heading: "Real Estate",
      description:
        "Explore the world of real estate investment without traditional barriers, with access to tokenized commercial and residential properties.",
    },
    {
      image: "/realstate.png",
      heading: "Precious Metals      ",
      description:
        "Secure your portfolio against inflation, invest in tokenized gold and other precious metals without worrying about storage or security.",
    },
    {
      image: "/metals.png",
      heading: "Bonds",
      description:
        "Broaden your investment horizons with access to high-quality bonds from reputable institutions worldwide, adding a stable component to your portfolio.",
    },
    {
      image: "/carbon.png",
      heading: "Carbon Credits",
      description:
        "Invest in the future of our planet with carbon credits, contributing to environmental sustainability while diversifying your portfolio.",
    },
    {
      image: "/collectible.png",
      heading: "Collectibles",
      description:
        "Indulge in the unique market of collectibles like tokenized art, pop culture icons, and sports memorabilia.",
    },
  ];

  return (
    <div className="relative ">
      <Container
        maxW={1300}
        p={{ base: "5vh 46px" }}
        className="relative "
        id="discoverAssets"
      >
        <Grid alignItems="center" textAlign="center">
          <Text
            as="h2"
            fontSize={{ base: "24px", md: "48px" }}
            fontWeight={{ base: 500, md: 600 }}
            mb={{ base: 4, md: 6 }}
            color="#121212"
          >
            Discover Assets Beyond
          </Text>
          <Text
            fontSize={{ base: "12px", md: "18px" }}
            fontWeight="300px"
            color="#616161"
            mb={{ base: 10 }}
          >
            Out-of-the-box platform democratizing access to exclusive
            opportunities
          </Text>
          <Grid
            mx="auto"
            gap={{ base: 2, md: 10 }}
            templateColumns={{ base: "1fr 1fr", md: "1fr 1fr 1fr" }}
          >
            {assetData.map(({ image, heading, description }, index) => (
              <Flex
                flexDirection="column"
                key={index}
                width="100%"
                rounded={10}
                textAlign={"left"}
                style={borderStyle}
              >
                <Box mb={2} className="flex md:justify-start justify-center ">
                  <img src={image} alt={heading} width={"100px"} />
                </Box>
                <Box padding={{ base: "14px", md: "25px" }}>
                  <Text
                    className="flex md:justify-start justify-center text-center"
                    fontSize={{ base: "15px", md: "24px" }}
                    fontWeight={{ base: "500", md: "600" }}
                    color="#000"
                    mb={{ base: 0, md: 4 }}
                    mt={-10}
                  >
                    {heading}
                  </Text>
                  <Text fontSize={{ base: "0", md: "16px" }} color="#616161">
                    {description}
                  </Text>
                </Box>
              </Flex>
            ))}
          </Grid>
        </Grid>
      </Container>
      <Box className="absolute -z-10 -top-[80px] -right-[0px] overflow-hidden lg:flex hidden">
        <img
          src="/gradient/DiscoveredRightStarts.svg"
          alt="hero"
          width="100%"
          height="auto"
        />
      </Box>
    </div>
  );
};

export default DiscoverAssets;
