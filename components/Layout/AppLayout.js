import React from "react";
import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";
import { Box } from "@chakra-ui/react";

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />

      <Box padding="5%" mt={["104px", "64px"]}>
        {children}
      </Box>

      <Footer />
    </>
  );
};

export default AppLayout;
