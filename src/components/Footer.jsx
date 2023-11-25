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
  const buttons = [
    { id1: 1, btn: <FaGithub />, link: "https://github.com/Shasatya" },
    {
      id1: 3,
      btn: <FaLinkedin />,
      link: "https://www.linkedin.com/in/satyam-sharma-49707023b",
    },
    {
      id1: 5,
      btn: <FaInstagram />,
      link: "https://www.instagram.com/u_200109",
    },
    { id1: 7, btn: <FaTwitter />, link: "#" },
  ];
  return (
    <Box bgColor={"#724cf9"} color={"white"} p={"5"}>
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Heading fontWeight={"bold"}>CoinQuake</Heading>
          <HStack>
            {buttons.map((i) => (
              <a href={i.link} target="{_blank}" key={i.id1}>
                <Button
                  height={"50px"}
                  width={"50px"}
                  fontSize={"2rem"}
                  p={"1px"}
                  borderRadius={"50%"}
                  transition={"all 0.3s"}
                  css={{
                    "&:hover": { transform: "scale(1.1)" },
                  }}
                >
                  {i.btn}
                </Button>
              </a>
            ))}
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
          <Button color={"#724cf9"} borderRadius={"5px"}>
            {" "}
            SUBSCRIBE
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
