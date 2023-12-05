import { Container, Text, Flex, Box } from "@chakra-ui/react";
import { FaRegCreditCard } from "react-icons/fa";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { FaHouseChimney } from "react-icons/fa6";

import { AiFillGolden } from "react-icons/ai";
import { GiAtom } from "react-icons/gi";
import { BiSolidCollection } from "react-icons/bi";

const DiscoverAssets = () => {
  const iconColor = "#ab854c";

  const assetData = [
    {
      icon: <FaRegCreditCard size={25} color={iconColor} />,
      heading: "Debit Securities",
    },
    {
      icon: <BsFillCreditCard2FrontFill size={25} color={iconColor} />,
      heading: "Private Credit",
    },
    {
      icon: <FaHouseChimney size={25} color={iconColor} />,
      heading: "Real Estate",
    },
    {
      icon: <AiFillGolden size={25} color={iconColor} />,
      heading: "Precious Metals",
    },
    {
      icon: <GiAtom size={25} color={iconColor} />,
      heading: "Carbon Credits",
    },
    {
      icon: <BiSolidCollection size={25} color={iconColor} />,
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
          Open value is a marketplace for top tier tokenized assets across
          various sectors
        </Text>
        <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
          {assetData.map(({ icon, heading }, index) => (
            <Flex
              key={index}
              direction="column"
              align="center"
              width={{ base: "100%", md: "33%" }}
              textAlign="center"
            >
              <Text
                background="radial-gradient(circle, hsla(156, 5%, 21%, 1) 21%, hsla(60, 11%, 5%, 1) 100%)"
                padding="8px"
                borderRadius="7px"
              >
                {icon}
              </Text>

              <Text
                fontSize="24px"
                fontWeight="600"
                mt={2}
                color="#000"
                mb={16}
              >
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
