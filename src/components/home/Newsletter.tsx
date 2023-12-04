import { Container, Box, Text, Flex, Input, Button } from "@chakra-ui/react";
import { CiMail } from "react-icons/ci";

const Newsletter = () => {
  return (
    <Container maxW={1300} p={{ base: "5vh 0px", md: "15vh 0px" }}>
      <Box textAlign="center" mb={{ base: 6, md: 10 }}>
        <Text
          as="h2"
          fontSize={{ base: "28px", md: "36px" }}
          fontWeight="600"
          color="#121212"
        >
          Subscribe Our Newsletter
        </Text>
        <Text fontSize={{ base: "md", md: "16px" }} color="#616161" mt={4}>
          Get the latest feed about Platform updates, tokenization, and General
          web3 and Financial markets information. 
        </Text>
      </Box>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: 4, md: 8 }}
      >
        <Flex
          align="center"
          border="1px solid rgba(97, 97, 97, 0.5)"
          borderRadius="5px"
          p={2}
          mb={{ base: 4, md: 0 }}
        >
          <CiMail size="20px" color="#616161" />
          <Input
            variant="unstyled"
            placeholder="Email Address"
            ml={2}
            fontSize={{ base: "sm", md: "14px" }}
          />
        </Flex>
        <button className="thin-button">Sign Up</button>
      </Flex>
    </Container>
  );
};

export default Newsletter;
