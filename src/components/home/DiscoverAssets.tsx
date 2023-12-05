import { Container, Text, Flex, Box } from "@chakra-ui/react";

const DiscoverAssets = () => {
  const iconColor = "#ab854c";

  const assetData = [
    {
      image: "/card.png",
      heading: "Debit Securities",
    },
    {
      image: "/creditcard.png",
      heading: "Private Credit",
    },
    {
      image: "/realstate.png",
      heading: "Real Estate",
    },
    {
      image: "/metals.png",
      heading: "Precious Metals",
    },
    {
      image: "/carbon.png",
      heading: "Carbon Credits",
    },
    {
      image: "/collectible.png",
      heading: "Collectible",
    },
  ];

  return (
    <Container maxW={1300} p={{ base: "5vh 0px" }}>
      <Flex direction="column" alignItems="center" textAlign="center">
        <Text
          as="h2"
          fontSize={{ base: "32px", md: "48px" }}
          fontWeight="600"
          mb={{ base: 4, md: 6 }}
          color="#121212"
        >
          Discover Assets
        </Text>
        <Text
          fontSize={{ base: "16px", md: "18px" }}
          fontWeight="300px"
          color="#616161"
          width={{ base: "80%" }}
          mb={{ base: 10 }}
        >
          Open value is a marketplace for top-tier tokenized assets across
          various sectors
        </Text>
        <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
          {assetData.map(({ image, heading }, index) => (
            <Flex
              flexDirection="column"
              alignItems="center"
              key={index}
              width={{ base: "35%", md: "28%" }}
              textAlign="center"
              mb={{ base: 8, md: 10 }}
            >
              <Box padding="8px" borderRadius="7px" mb={2}>
                <img src={image} alt={heading} width="130px" />
              </Box>
              <Text
                fontSize={{ base: "15px", md: "24px" }}
                fontWeight={{ base: "500", md: "600" }}
                color="#000"
                mb={4}
                mt={-10}
              >
                {heading}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default DiscoverAssets;
