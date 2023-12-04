import { Container, Box, Text, Flex } from "@chakra-ui/react";
import { FaDiscord, FaTelegramPlane, FaBloggerB } from "react-icons/fa";
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
    <Container maxW={1300} p={{ base: "5vh 0px", md: "15vh 0px" }}>
      <Box textAlign="center" mb={{ base: 6, md: 10 }}>
        <Text
          as="h2"
          fontSize={{ base: "28px", md: "32px" }}
          fontWeight="500"
          color="#121212"
        >
          Join our community of tokenization supporters
        </Text>
      </Box>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap={{ base: 4, md: 8 }}
      >
        <Box style={styles.background}>
          <FaXTwitter style={{ fontSize: "30px", width: "30px" }} />
        </Box>
        <Box style={styles.background}>
          <FaDiscord style={{ fontSize: "30px", width: "30px" }} />
        </Box>
        <Box style={styles.background}>
          <FaTelegramPlane style={{ fontSize: "30px", width: "30px" }} />
        </Box>
        <Box style={styles.background}>
          <FaBloggerB style={{ fontSize: "30px", width: "30px" }} />
        </Box>
      </Flex>
    </Container>
  );
};

export default JoinCommunity;
