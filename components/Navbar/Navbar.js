import React from "react";
import Image from "next/image";
import { Box, Flex } from "@chakra-ui/react";
import SearchBar from "@components/SearchBar/SearchBar";

const Navbar = () => {
  return (
    <Flex
      justify={["space-around", "center"]}
      align="center"
      flexWrap="wrap"
      width="100%"
      px={["4", "5%"]}
      py="3"
      borderBottom="1px #E2E8F0 solid"
      pos="fixed"
      top="0"
      bg="#ffffff"
    >
      <Box pos={["relative", "absolute"]} left={["0", "5%"]}>
        <Image src="/logo-original.svg" alt="logo" width={122} height={34} />
      </Box>
      <SearchBar />
    </Flex>
  );
};

export default Navbar;
