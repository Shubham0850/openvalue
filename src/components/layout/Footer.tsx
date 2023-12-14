import {
  Box,
  Container,
  Text,
  Flex,
  Link,
  Image,
  useBreakpointValue,
  LinkBox,
} from "@chakra-ui/react";

const Footer = () => {
  const style = {
    link: {
      textDecoration: "none",
      opacity: "0.5",
      marginBottom: "4px",
      fontSize: useBreakpointValue({ base: "14px", md: "16px" }),
      color: "#121212",
      fontWeight: useBreakpointValue({ base: 300, md: 400 }),
    },
  };

  const emailAddress = "contact@asvalabs.com";

  const handleClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <Box
      bg="white"
      color="#121212"
      py={{ base: 8, md: 16 }}
      textAlign="left"
      className="relative"
      overflow={"hidden"}
    >
      <Container maxW={1300} p={10}>
        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          justify={{ base: "", md: "space-between" }}
          align={{ base: "", md: "flex-start" }}
          mb={{ base: 3, md: 12 }}
        >
          <Box
            mt={{ base: 8, md: 0 }}
            flex={{ base: "0 0 100%", md: "0 0 40%" }}
            mb={{ base: 8, md: 0 }}
          >
            <Box display={"flex"} flexDir={"column"} gap={1}>
              <Link href="/">
                <Image
                  src="logo.svg"
                  alt="logo"
                  height={{ base: "20px", md: "24px" }}
                />
              </Link>
              <Text fontSize={{ base: "12px", md: "14px" }} fontWeight={400}>
                Secondary Marketplace for Real World Assets
              </Text>
            </Box>
          </Box>

          <Flex
            w={"100%"}
            gap={{ base: "44px", md: "" }}
            justify={"space-between"}
            flexWrap={"wrap"}
          >
            <Flex
              direction="column"
              align={"flex-start"}
              mb={{ base: 5, md: 0 }}
            >
              <Text
                fontSize={"16px"}
                fontWeight={{ base: 400, md: 700 }}
                mb={{ base: "2", md: "4" }}
              >
                About
              </Text>

              <Link
               target="_blank"
                href="https://asvalabs.com/
"
                style={style.link}
              >
                AsvaLabs
              </Link>
            
              <Link onClick={handleClick} target="_blank" style={style.link}>
                Contact Us
              </Link>
            </Flex>
            <Flex
              direction="column"
              align={"flex-start"}
              mb={{ base: 5, md: 0 }}
            >
              <Text
                fontSize={"16px"}
                fontWeight={{ base: 400, md: 700 }}
                mb={{ base: "2", md: "4" }}
              >
                General
              </Text>
              <Link href="#buyers" style={style.link}>
                Buyers
              </Link>
              <Link href="#asset" style={style.link}>
                Asset Owners
              </Link>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfWIJ9wQpTP6IKLhzO25v4mFw276r24AXnYhIO-QbD-H6T-nA/viewform " style={style.link} target="_blank">
                Join Waitlist
              </Link>
            </Flex>
            <Flex
              direction="column"
              align={"flex-start"}
              mb={{ base: 5, md: 0 }}
            >
           
              <Text
                fontSize={"16px"}
                fontWeight={{ base: 400, md: 700 }}
                mb={{ base: "2", md: "4" }}
              >
                Socials
              </Text>
              <Link href="https://twitter.com/Tangidocom " target="_blank" style={style.link}>
                Twitter
              </Link>
              <Link href="https://t.me/AsvaLabsOfficial 
" target="_blank" style={style.link}>
                Telegram
              </Link>
              <Link href="https://www.linkedin.com/company/asvalabsofficial/ 
" target="_blank" style={style.link}>
                Linkedin
              </Link>
              <Link href="https://discord.gg/8R4aUFxp4j 
" target="_blank" style={style.link}>
                Discord
              </Link>
              <Link href="https://asvalabs.medium.com/ " target="_blank" style={style.link}>
                Medium
              </Link>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          gap={1}
          justify={"center"}
          alignItems={"center"}
          fontSize={{ base: "12px", md: "14px" }}
        >
          Developed by{" "}
          <Link href="https://asvalabs.com/" target="_blank">
            {" "}
            <Image
              src="asvalogo.svg"
              alt="ASVALABS Logo"
              height={{ base: "17px", md: "19px" }}
            />
          </Link>
        </Flex>
      </Container>

      <Box className="absolute -z-10 -top-[50%] left-1/2 transform -translate-x-1/2 w-[100%]">
        <img src="/gradient/HeroCenter.svg" alt="hero" width="100%" />
      </Box>
    </Box>
  );
};

export default Footer;
