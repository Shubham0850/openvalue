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
import { FaChevronRight } from "react-icons/fa";

const FAQ = () => {
  return (
    <Box py={{ base: 8, md: 16 }} bg="gray.100">
      <Container maxW={1300}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
        >
          {/* Left Side */}
          <Box
            flex={{ base: "0 0 100%", md: "0 0 40%" }}
            mb={{ base: 8, md: 0 }}
          >
            <Text
              as="h2"
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="bold"
              mb={{ base: 4, md: 6 }}
            >
              Frequently Asked Questions
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }}>
              Got questions? We've got answers. If you don't find what you're
              looking for, feel free to contact us.
            </Text>
          </Box>

          {/* Right Side */}
          <Accordion allowToggle flex={{ base: "0 0 100%", md: "0 0 55%" }}>
            {/* Question 1 */}
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    What is Openvalue?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Openvalue is a platform that provides access to top-tier
                tokenized assets across various sectors, including real estate,
                private credit, precious metals, carbon credits, and stocks.
              </AccordionPanel>
            </AccordionItem>

            {/* Question 2 */}
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    How can I invest in tokenized assets?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                To invest in tokenized assets on Openvalue, you can create an
                account, browse available assets, and follow the investment
                process outlined on the platform.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      </Container>
    </Box>
  );
};

export default FAQ;
