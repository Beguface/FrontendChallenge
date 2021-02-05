import CarruselContainer from "@components/Containers/CarruselContainer";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Box height="calc(100vh - 175px)">
        <CarruselContainer title="Busqueda mas reciente" />
      </Box>
    </>
  );
}
