import { Box } from "@chakra-ui/react";
import CarruselContainer from "@components/Containers/CarruselContainer";

export default function Home() {
  return (
    <>
      <Box height="calc(100vh - 175px)">
        <CarruselContainer />
      </Box>
    </>
  );
}
