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
    <Box py={{ base: 8, md: 16 }}>
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
              Frequent Asked Questions
            </Text>
            <Text
              fontSize={{ base: "12px", md: "20px" }}
              fontWeight={{ base: "300", md: "400" }}
              color="#757575"
              textAlign={{ base: "center", md: "left" }}
              width={{ base: "72%", md: "100%" }}
              margin="auto"
            >
              Got questions? We've got answers. If you don't find what you're
              looking for, feel free to contact us.
            </Text>
          </Box>

          {/* Right Side */}
          <Accordion>
            <AccordionItemComponent
              key="question1"
              question="What is secondary market for real-world 
              asset tokenization? "
              answer="Please refer rwa prd / pitch draft to compose the msg. "
            />
            <AccordionItemComponent
              key="question2"
              question="How OpenValue is different from other platforms? "
              answer="Please refer rwa prd / pitch draft to compose the msg. "
            />
            <AccordionItemComponent
              key="question3"
              question="What kind of assets are supported 
              for trading?"
              answer="Please refer rwa prd / pitch draft to compose the msg. "
            />
            <AccordionItemComponent
              key="question4"
              question="Do i need to do KYC for Investment? "
              answer="Please refer rwa prd / pitch draft to compose the msg. "
            />{" "}
            <AccordionItemComponent
              key="question5"
              question="Is there any lockin period on any 
              purchased token asset? "
              answer="Please refer rwa prd / pitch draft to compose the msg. "
            />{" "}
            <AccordionItemComponent
              key="question6"
              question="Are there regulatory considerations when 
              trading tokenized assets on a
              secondary market? "
              answer="Please refer rwa prd / pitch draft to compose the msg. "
            />
          </Accordion>
        </Flex>
      </Container>
    </Box>
  );
};

export default FAQ;
