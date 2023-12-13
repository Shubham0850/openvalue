import {
  Box,
  Container,
  Flex,
  Image,
  Link,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";

import { RxHamburgerMenu } from "react-icons/rx";

import React from "react";

const styles = {
  deskLink: {
    fontSize: "20px",
    fontWeight: "500",
    _hover: {
      textDecoration: "none",
    },
  },

  mobLink: {
    fontSize: "22px",
    fontWeight: "500",
    textAlign: "center",
    _hover: {
      textDecoration: "none",
    },
  },

  mobRow: {
    margin: "20px auto",
    marginBottom: "25px",
    width: "80%",
    height: "2px",
    borderRadius: "10px",
    backgroundColor: "rgba(94, 59, 238, 0.45)",
  },
};

function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLinkClick = () => {
    {
      onClose();
    }
  };

  return (
    <>
      <Box
        bg="rgba(19, 19, 19, 0.03)"
        boxShadow="0px -1px 1px 0px rgba(0, 0, 0, 0.10) inset"
      >
        <Container maxW={1200}>
          <Flex
            as={"nav"}
            justify="space-between"
            alignItems="center"
            py={4}
            wrap="wrap"
            color="#121212"
          >
            {/* Logo */}
            <Link href="/">
              <Image
                src="logo.svg"
                alt="logo"
                height={{ base: "27px", md: "34px" }}
              />
            </Link>

            {/* Hamburger icon for mobile */}
            <Box display={{ base: "block", md: "none" }} onClick={onOpen}>
              <RxHamburgerMenu size={24} color="#121212" />
            </Box>

            {/* Navbar links for larger screens */}
            <Flex
              align="center"
              display={{ base: "none", md: "flex" }}
              gap={{ base: "20px", lg: "94px", md: "50px" }}
            >
              {/* Your navigation links */}
              <Link href="#whyus" sx={styles.deskLink}>
                Features
              </Link>
              <Link href="#discoverAssets" sx={styles.deskLink}>
                MarketPlace
              </Link>
              <Link href="#faq" sx={styles.deskLink}>
                FAQs
              </Link>
            </Flex>

            {/* Drawer for mobile */}
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>
                  <Link
                    href="#"
                    height="40px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    marginTop="1rem"
                  >
                    <Image src="logo.svg" alt="logo" height="40px" />
                  </Link>
                </DrawerHeader>
                <DrawerBody>
                  {/* Your navigation links */}
                  <Flex flexDirection="column">
                    <Link
                      href="#whyus"
                      sx={styles.mobLink}
                      onClick={handleLinkClick}
                    >
                      Features
                    </Link>
                    <hr style={styles.mobRow} />
                    <Link
                      href="#discoverAssets"
                      sx={styles.mobLink}
                      onClick={handleLinkClick}
                    >
                      MarketPlace
                    </Link>
                    <hr style={styles.mobRow} />
                    <Link
                      href="#faq"
                      sx={styles.mobLink}
                      onClick={handleLinkClick}
                    >
                      FAQs
                    </Link>
                    <hr style={styles.mobRow} />
                    <Link href="#" sx={styles.mobLink}>
                      <button className="btn-outline">Join Waitlist</button>
                    </Link>
                  </Flex>
                </DrawerBody>
              </DrawerContent>
            </Drawer>

            {/* Contact Button */}
            <Box display={{ base: "none", md: "block" }}>
              <Link href="#">
                <button className="btn-outline">Join Waitlist</button>
              </Link>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default Nav;
