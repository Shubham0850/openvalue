import {
  Box,
  Container,
  Text,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

function AccordionItemComponent({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <AccordionItem border="none" padding={2} width="80%" margin="auto">
      <h2>
        <Box>
          <AccordionButton
            fontSize={{ base: "14px", md: "20px" }}
            fontWeight={{ base: "400", md: "500" }}
          >
            <Box flex="1" textAlign="left">
              {question}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Box>
      </h2>
      <AccordionPanel
        fontSize={{ base: "14px", md: "20px" }}
        fontWeight={{ base: "400", md: "500" }}
        color="#757575"
        pb={4}
      >
        {answer}
      </AccordionPanel>
    </AccordionItem>
  );
}

const FAQ = () => {
  return (
    <Box py={{ base: 8, md: 16 }} className="relative" id="faq">
      <Container maxW={1200} p={{ base: "5vh 0px", md: "10vh 0px" }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
        >
          {/* Left Side */}
          <Box
            flex={{ base: "0 0 100%", md: "0 0 50%" }}
            mb={{ base: 8, md: 0 }}
          >
            <Text
              as="h2"
              fontSize={{ base: "24px", md: "48px" }}
              fontWeight={{ base: "500", md: "600" }}
              mb={{ base: 4, md: 6 }}
              textAlign={{ base: "center", md: "left" }}
            >
            Frequently Asked Questions
            </Text>
            <Text
              fontSize={{ base: "12px", md: "20px" }}
              fontWeight={{ base: "300", md: "400" }}
              color="#757575"
              textAlign={{ base: "center", md: "left" }}
              width={{ base: "72%", md: "100%" }}
              margin="auto"
            >
              {"Got questions? If you don't find what you're looking for, feel free to contact us."}
            </Text>
          </Box>

          {/* Right Side */}
          <Accordion>
            <AccordionItemComponent
              key="question1"
              question="What is asset tokenization?"
              answer="It refers to the process of representing ownership or a fraction of ownership of an asset, such as real estate, artwork, commodities, or financial instruments, as a digital token. "
            />
            <AccordionItemComponent
              key="question2"
              question="What is the secondary market for real-world asset tokenization? "
              answer="The secondary market for real-world asset tokenization is a platform where investors can buy and sell tokenized real-world assets.  "
            />
            <AccordionItemComponent
              key="question3"
              question="How is Tangido different from other platforms?"
              answer="OpenValue stands out by providing a diverse marketplace for top-tier tokenized assets, ensuring transparency through blockchain, instant settlement, and fractional ownership. Offering a wide range of assets, and inviting issuers to connect with a larger community on our secondary market."
            />
            <AccordionItemComponent
              key="question4"
              question="What kind of assets are supported for trading? "
              answer="A: Our platform supports a diverse range of assets for trading, including real estate, debt securities (bonds + t-bills), private credit, precious metals, carbon credit and stocks."
            />{" "}
            <AccordionItemComponent
              key="question5"
              question=" Do I need to complete KYC for investment? "
              answer="Answer: Yes, Know Your Customer (KYC) verification is required for investment on our platform. It helps ensure the security and compliance of our users."
            />{" "}
            <AccordionItemComponent
              key="question6"
              question="Is there any lock-in period on any purchased token asset? "
              answer="No, there is no lock-in period for purchased token assets. Users have the flexibility to sell their assets at any time by placing sell orders on the platform. "
            />
          </Accordion>
        </Flex>
      </Container>

      <Box className="absolute -z-10 top-0 -left-0">
        <img
          src="/gradient/FaqStar.svg"
          alt="hero"
          width="100%"
        />
      </Box>
      <Box className="absolute -z-10 -top-[20%] right-0">
        <img
          src="/gradient/HeaderRight.svg"
          alt="hero"
          width="100%"
        />
      </Box>
      <Box className="absolute -z-10 top-0 left-0">
        <img
          src="/gradient/Left.svg"
          alt="hero"
          width="100%"
        />
      </Box>
    </Box>
  );
};

export default FAQ;
