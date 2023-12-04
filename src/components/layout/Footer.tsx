import { Box, Container, Text, Flex, Link } from "@chakra-ui/react";

const Footer = () => {
  const style = {
    link: {
      textDecoration: "none",

      marginBottom: "4px",
      fontSize: "14px",
      color: "#616161",
    },
  };

  return (
    <Box bg="white" color="#121212" py={{ base: 8, md: 16 }} textAlign="left">
      <Container maxW={1300}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "flex-start" }}
          mb={{ base: 8, md: 12 }}
        >
          <Box
            flex={{ base: "0 0 100%", md: "0 0 40%" }}
            mb={{ base: 8, md: 0 }}
          >
            <Box textAlign="center">
              <Text fontSize={{ base: "2xl", md: "36px" }}>Openvalue</Text>
              <Text fontSize="sm">Developed by</Text>
              <Text fontSize={{ base: "2xl", md: "30px" }}>ASVALABS</Text>
            </Box>
          </Box>
          <Flex direction="column" align={{ base: "center", md: "flex-start" }}>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              About
            </Text>
            <Link href="#" style={style.link}>
              Team
            </Link>
            <Link href="#" style={style.link}>
              Partners & Backers
            </Link>
            <Link href="#" style={style.link}>
              Mediakit
            </Link>
            <Link href="#" style={style.link}>
              We are Hiring!
            </Link>
            <Link href="#" style={style.link}>
              Contact Us
            </Link>
          </Flex>
          <Flex direction="column" align={{ base: "center", md: "flex-start" }}>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              General
            </Text>
            <Link href="#" style={style.link}>
              Issuers
            </Link>
            <Link href="#" style={style.link}>
              Invest
            </Link>
          </Flex>
          <Flex direction="column" align={{ base: "center", md: "flex-start" }}>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Legal
            </Text>
            <Link href="#" style={style.link}>
              TnC
            </Link>
            <Link href="#" style={style.link}>
              Privacy Policy
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
