import { Container, Text, Flex } from "@chakra-ui/react";
import { FaRegCreditCard } from "react-icons/fa";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { FaHouseChimney } from "react-icons/fa6";

import { AiFillGolden } from "react-icons/ai";
import { GiAtom } from "react-icons/gi";
import { BiSolidCollection } from "react-icons/bi";

const DiscoverAssets = () => {
  const assetData = [
    {
      icon: <FaRegCreditCard size={40} color="#616161" />,
      heading: "Debit Securities",
    },
    {
      icon: <BsFillCreditCard2FrontFill size={40} color="#616161" />,
      heading: "Private Credit",
    },
    {
      icon: <FaHouseChimney size={40} color="#616161" />,
      heading: "Real Estate",
    },
    {
      icon: <AiFillGolden size={40} color="#616161" />,
      heading: "Precious Metals",
    },
    { icon: <GiAtom size={40} color="#616161" />, heading: "Carbon Credits" },
    {
      icon: <BiSolidCollection size={40} color="#616161" />,
      heading: "Collectible",
    },
  ];

  return (
    <Container maxW={1300} p={{ base: "5vh 0px", md: "15vh 0px" }}>
      <Flex direction="column" alignItems="center" textAlign="center">
        <Text
          as="h2"
          fontSize={{ base: "32px", md: "48px" }}
          fontWeight="600"
          mb={{ base: 4, md: 6 }}
          color="#121212"
        >
          Discover Assets
        </Text>
        <Text
          fontSize={{ base: "16px", md: "18px" }}
          fontWeight="300px"
          color="#616161"
          width={{ base: "80%" }}
          mb={{ base: 10, md: 28 }}
        >
          Explore a variety of tokenized assets across different sectors with
          Open Value.
        </Text>
        <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
          {assetData.map(({ icon, heading }, index) => (
            <Flex
              key={index}
              direction="column"
              align="center"
              width={{ base: "100%", md: "33%" }}
              textAlign="center"
              mb={6}
            >
              {icon}
              <Text fontSize="lg" fontWeight="600" mt={2}>
                {heading}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default DiscoverAssets;
