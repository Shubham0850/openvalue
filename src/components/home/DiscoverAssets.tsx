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
      heading: "Debit Securities",
      description:
        "Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus mattis etiam.",
    },
    {
      image: "/creditcard.png",
      heading: "Private Credit",
      description:
        "Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus mattis etiam.",
    },
    {
      image: "/realstate.png",
      heading: "Real Estate",
      description:
        "Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus mattis etiam.",
    },
    {
      image: "/metals.png",
      heading: "Precious Metals",
      description:
        "Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus mattis etiam.",
    },
    {
      image: "/carbon.png",
      heading: "Carbon Credits",
      description:
        "Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus mattis etiam.",
    },
    {
      image: "/collectible.png",
      heading: "Collectible",
      description:
        "Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus mattis etiam.",
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
            fontWeight="600"
            mb={{ base: 4, md: 6 }}
            color="#121212"
          >
            Discover Assets
          </Text>
          <Text
            fontSize={{ base: "12px", md: "18px" }}
            fontWeight="300px"
            color="#616161"
            mb={{ base: 10 }}
          >
            Open value is a marketplace for top-tier tokenized assets across
            various sectors
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
