import { Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      my="2"
      leftIcon={<ArrowBackIcon />}
      onClick={() => router.back()}
      variant="link"
    >
      Volver
    </Button>
  );
};

export default BackButton;
