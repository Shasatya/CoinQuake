import {
  Button,
  Box,
  Stack,
  HStack,
  Text,
  Heading,
  VStack,
  Input,
} from "@chakra-ui/react";

import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bgColor={"#724cf9"} color={"white"} p={"8"}>
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Heading fontWeight={"bold"}>CoinQuake</Heading>
          <HStack>
            <Button
              height={"50px"}
              width={"50px"}
              fontSize={"2rem"}
              p={"1px"}
              borderRadius={"50%"}
            >
              <FaGithub />
            </Button>
            <Button
              height={"50px"}
              width={"50px"}
              fontSize={"2rem"}
              p={"1px"}
              borderRadius={"50%"}
            >
              <FaInstagram />
            </Button>
            <Button
              height={"50px"}
              width={"50px"}
              fontSize={"2rem"}
              p={"1px"}
              borderRadius={"50%"}
            >
              <FaLinkedin />
            </Button>
            <Button
              height={"50px"}
              width={"50px"}
              fontSize={"2rem"}
              p={"1px"}
              borderRadius={"50%"}
            >
              <FaTwitter />
            </Button>
          </HStack>
        </VStack>

        <VStack>
          <Text
            fontSize={"large"}
            fontWeight={"bold"}
            marginTop={["2rem", "0"]}
          >
            For our Newsletter
          </Text>
          <Input
            placeholder={"Enter your email"}
            bgColor={"white"}
            textAlign={"center"}
          />
          <Button color={"#724cf9"}>SUBSCRIBE</Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
