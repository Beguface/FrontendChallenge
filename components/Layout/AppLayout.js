import React from "react";
import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";
import { Box } from "@chakra-ui/react";

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box>{children}</Box>
      <Footer />
    </>
  );
};

export default AppLayout;
