import { Box, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      justify="center"
      align="center"
      height="50px"
      borderTop="1px #E2E8F0 solid"
    >
      <footer>
        <Box as="span" fontWeight="semibold">
          Made with 💙 @beguface
        </Box>
      </footer>
    </Flex>
  );
};

export default Footer;
