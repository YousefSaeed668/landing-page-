import { chakra, HTMLChakraProps, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

export const Logo: React.FC<HTMLChakraProps<"svg">> = (props) => {
  const color = useColorModeValue("#231f20", "#fff");
  return (
    <Image
      src="/static/screenshots/logo.svg"
      width={60}
      height={60}
      alt="wavyi"
    />
  );
};
