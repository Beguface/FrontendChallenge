import React from "react";
import Image from "next/image";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Flex
      justify={["space-around", "flex-start"]}
      align="center"
      flexWrap="wrap"
      width="100%"
      px="4"
      py="3"
      borderBottom="1px #E2E8F0 solid"
    >
      <Image src="/logo-original.svg" alt="logo" width={122} height={34} />
      <InputGroup mt={["2"]} ml={["0", "6"]} maxW={["90%", "40%"]}>
        <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
        <Input type="text" placeholder="Buscar" />
      </InputGroup>
    </Flex>
  );
};

export default Navbar;
