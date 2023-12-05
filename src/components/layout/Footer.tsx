import { Box, Container, Text, Flex, Link, Image } from "@chakra-ui/react";

const Footer = () => {
  const style = {
    link: {
      textDecoration: "none",

      marginBottom: "4px",
      fontSize: "16px",
      color: "#616161",
    },
  };

  return (
    <Box bg="white" color="#121212" py={{ base: 8, md: 16 }} textAlign="left" className="relative" overflow={"hidden"}>
      <Container maxW={1300} p={10}>
        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          justify={{ base: "", md: "space-between" }}
          align={{ base: "", md: "flex-start" }}
          mb={{ base: 8, md: 12 }}
        >
          <Box
            mt={{ base: 8, md: 0 }}
            flex={{ base: "0 0 100%", md: "0 0 40%" }}
            mb={{ base: 8, md: 0 }}
          >
            <Box textAlign="center">
              <Text fontSize={{ base: "24px", md: "36px" }}>Openvalue</Text>
              <Text fontSize={{ base: "14px", md: "14px" }}>
                Developed by{" "}
                <Image
                  src="asvalogo.svg"
                  alt="ASVALABS Logo"
                  margin="auto"
                  marginTop="10px"
                />
              </Text>
            </Box>
          </Box>
          <Flex direction="column" align={"flex-start"} mb={{ base: 5, md: 0 }}>
            <Text
              fontSize={"16px"}
              fontWeight={"600"}
              mb={{ base: "2", md: "4" }}
            >
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
          <Flex direction="column" align={"flex-start"} mb={{ base: 5, md: 0 }}>
            <Text
              fontSize={"16px"}
              fontWeight={"600"}
              mb={{ base: "2", md: "4" }}
            >
              General
            </Text>
            <Link href="#" style={style.link}>
              Issuers
            </Link>
            <Link href="#" style={style.link}>
              Invest
            </Link>
          </Flex>
          <Flex direction="column" align={"flex-start"} mb={{ base: 5, md: 0 }}>
            <Text
              fontSize={"16px"}
              fontWeight={"600"}
              mb={{ base: "2", md: "4" }}
            >
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

      <Box className="absolute -top-[50%] left-1/2 transform -translate-x-1/2 w-[100%]">
        <img
          src="/gradient/HeroCenter.svg"
          alt="hero"
          width="100%"
        />
      </Box>
    </Box>
  );
};

export default Footer;
