import { Container, Box, Text, Flex, Input } from "@chakra-ui/react";
import { MdMailOutline } from "react-icons/md";
import { useState } from "react";
import axios from "axios";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = () => {
    setLoading(true);
    // Step 3: Handle form submission
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "" || !regex.test(String(email).toLowerCase())) {
      setMessage("Please enter a valid email");
      return;
    }

    const formData = new FormData();
    formData.append("api_key", "AghazFUFk4uDrDUsquEg");
    formData.append("email", email);
    formData.append("list", "ThA5aF2Lf06cHT892osZxndQ");

    axios
      .post("https://sendy.asvalabs.com/subscribe", formData, {
        headers: { "Content-type": "application/x-www-form-urlencoded" },
      })
      .then((response) => {
        const resData = response.data;
        if (resData.includes(`You're already subscribed!`)) {
          setMessage(`You're already subscribed!`);
        }
        if (resData.includes(`You're subscribed!`)) {
          setMessage(`You're subscribed!`);
        }
        setEmail("");
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setMessage("Something went wrong!");
      });
  };

  return (
    <Container maxW={1300} p={{ base: "5vh 0px", md: "15vh 0px" }}>
      <Box textAlign="center" mb={{ base: 6, md: 10 }}>
        <Text
          as="h2"
          fontSize={{ base: "20px", md: "36px" }}
          fontWeight={{ base: 500, md: 600 }}
          color="#121212"
          width={{ base: "80%", md: "100%" }}
          margin="auto"
        >
          Stay In the Loop
        </Text>
        <Text
          width={{ base: "80%", md: "100%" }}
          fontSize={{ base: "12px", md: "16px" }}
          margin="auto"
          color="#616161"
          mt={4}
        >
          Get the latest feed about platform updates, tokenization and financial
          markets information.
        </Text>
      </Box>
      <Flex
        p={10}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: 4, md: 8 }}
      >
        <Flex
          width={"100%"}
          align={{ base: "center", md: "center" }}
          border="1px solid rgba(97, 97, 97, 0.5)"
          borderRadius="5px"
          p={2}
          maxWidth={{ base: "100%", md: "500px" }}
          mb={{ base: 4, md: 0 }}
        >
          <MdMailOutline size="30px" color="#BDBDBD" />
          <Input
            padding={2}
            variant="unstyled"
            placeholder="Email Address"
            ml={2}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fontSize={{ base: "14px", md: "14px" }}
          />
        </Flex>
        <button onClick={handleSubscribe} className="thin-button">
          {" "}
          {loading ? "Submitting..." : "Sign Up"}
        </button>
      </Flex>
      <Text color="#1F1F1F" textAlign={"center"}>
        {message}
      </Text>
    </Container>
  );
};

export default Newsletter;
