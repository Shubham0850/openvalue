import { Box, Container, Text, Flex, Link, Image,useBreakpointValue  } from "@chakra-ui/react";

const Footer = () => {
  const style = {
    link: {
      textDecoration: "none",
     opacity:'0.5',
      marginBottom: "4px",
      fontSize: "14px",
      color: "#121212",
      fontWeight: useBreakpointValue({ base: 300, md: 400 }),

    },
  };

  const emailAddress = 'contact@asvalabs.com'; 

  const handleClick = () => {
    window.location.href = `mailto:${emailAddress}`;
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
  

          <Flex direction="column" w={'50%'} align={"flex-start"} mb={{ base: 5, md: 0 }}>
            <Text
              fontSize={"16px"}
              fontWeight={{base:400,md:700}}
              mb={{ base: "2", md: "4" }}
            >
              About
            </Text>
          
           
            <Link href="https://asvalabs.com/
" style={style.link}>
              AsvaLabs
            </Link>
            <Link href="https://asvalabs.notion.site/asvalabs/Asva-Labs-Careers-62d6bbac59854e3d8ad3bd97c2fceabc 
" style={style.link}>
              We are Hiring!
            </Link>
            <Link  onClick={handleClick} style={style.link}>
              Contact Us
            </Link>
          </Flex>
          <Flex direction="column" w={'50%'} align={"flex-start"} mb={{ base: 5, md: 0 }}>
            <Text
              fontSize={"16px"}
              fontWeight={{base:400,md:700}}
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
            <Link href="#" style={style.link}>
              Join Waitlist
            </Link>
          </Flex>
          <Flex direction="column" w={'50%'}  align={"flex-start"} mb={{ base: 5, md: 0 }}>
            <Text
              fontSize={"16px"}
              fontWeight={{base:400,md:700}}
              mb={{ base: "2", md: "4" }}
            >
             Socials
            </Text>
            <Link href="#" style={style.link}>
              Twitter
            </Link>
            <Link href="#" style={style.link}>
              Telegram
            </Link>
            <Link href="#" style={style.link}>
              Linkedin
            </Link>
            <Link href="#" style={style.link}>
              Discord
            </Link>
            <Link href="#" style={style.link}>
              Medium
            </Link>
          </Flex>

        </Flex>
      </Container>

      <Box className="absolute -z-10 -top-[50%] left-1/2 transform -translate-x-1/2 w-[100%]">
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
