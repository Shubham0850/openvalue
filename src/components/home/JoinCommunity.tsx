import { Container, Box, Text, Flex, Image } from "@chakra-ui/react";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const JoinCommunity = () => {
  const styles = {
    background: {
      backgroundColor: "#121212",
      color: "white",
      borderRadius: "50%",
      padding: "10px",
      margin: "0 2px 4px 2px",
    },
  };

  return (
    <Container
      maxW={1300}
      p={{ base: "5vh 0px", md: "15vh 0px" }}
      className="relative"
    >
      <Box textAlign="center" mb={{ base: 6, md: 10 }}>
        <Text
          as="h2"
          fontSize={{ base: "20px", md: "32px" }}
          fontWeight="500"
          color="#121212"
          px={"46px"}
          margin={"auto"}
          marginBottom={{ base: "50px" }}
        >
          Join our community of tokenization supporters
        </Text>
      </Box>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
        flexWrap="wrap"
        gap={{ base: 4, md: 8 }}
      >
        <Flex gap={{ base: 14, md: 8 }} mb={{ base: "24px", md: "0px" }}>
          <Box style={styles.background}>
            <FaXTwitter style={{ fontSize: "46px", width: "46px" }} />
          </Box>
          <Box style={styles.background}>
            <FaDiscord style={{ fontSize: "46px", width: "46px" }} />
          </Box>
        </Flex>
        <Flex gap={{ base: 14, md: 8 }}>
          <Box style={styles.background}>
            <FaTelegramPlane style={{ fontSize: "46px", width: "46px" }} />
          </Box>
          <Box style={styles.background}>
            <Image src="blog.png" boxSize="46px" />
          </Box>
        </Flex>
      </Flex>

      <Box className="absolute -z-10 -top-[80%] left-1/2 transform -translate-x-1/2 w-[100%]">
        <img src="/gradient/HeroCenter.svg" alt="hero" width="100%" />
      </Box>
    </Container>
  );
};

export default JoinCommunity;
