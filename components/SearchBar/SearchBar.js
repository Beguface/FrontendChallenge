import React from "react";

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
} from "@chakra-ui/react";
import { SearchIcon, SettingsIcon } from "@chakra-ui/icons";

const SearchBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const buttonRef = React.useRef();
  return (
    <>
      <InputGroup mt={["2"]} ml={["0", "6"]} maxW={["sm", "40%"]}>
        <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
        <Box
          d="flex"
          as="button"
          ref={buttonRef}
          alignItems="center"
          border="1px solid"
          borderRadius="0.375rem"
          outline="0"
          borderColor="inherit"
          height="10"
          pl="10"
          pr="4"
          width="100%"
          onClick={onOpen}
        >
          Buscar
        </Box>
      </InputGroup>

      <Drawer isOpen={isOpen} onClose={onClose} placement="top">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />

            <DrawerBody mt="50px">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.300" />}
                />
                <Input
                  type="text"
                  placeholder="Pizza, hamburguesas, hot dog..."
                />
              </InputGroup>
              <InputGroup mt="4">
                <InputLeftElement
                  pointerEvents="none"
                  children={<SettingsIcon color="gray.300" />}
                />
                <Input type="text" placeholder="Algun lugar..." />
              </InputGroup>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Volver
              </Button>
              <Button>Buscar</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default SearchBar;
