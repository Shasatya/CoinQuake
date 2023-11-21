import {
  Box,
  Button,
  Heading,
  Image,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/react";
import bg from "../assets/bg.png";
import { motion } from "framer-motion";

const Home = () => {
  const options = [
    {
      image:
        "https://img.freepik.com/free-vector/data-points-concept-illustration_114360-2194.jpg?w=996&t=st=1700594965~exp=1700595565~hmac=fafc31dae3c6ba216a1fe9ebf3c860c07d76f22644c871f0025978996e6e71ea",
      heading: "Live Data",
      text: "CoinQuake provides you crypto data ",
    },
    {
      image:
        "https://img.freepik.com/free-vector/worldwide-delivery-service-global-navigation-ordering-system-world-tourism-idea_335657-323.jpg?w=996&t=st=1700594776~exp=1700595376~hmac=863ea86f5e8fc49fc24bbbace6b8cf57bbf2b8ba03c5ff0e3783d0f1e0d22e84",
      heading: "Easy Usage",
      text: "dfsfdf fdsfsdf fsdfsdf",
    },
    {
      image:
        "https://img.freepik.com/free-vector/cyber-defense-logo-with-checkmark-trust-your-digital-business_1017-44245.jpg?w=996&t=st=1700594667~exp=1700595267~hmac=ca88dfd88322c357c1499da1ddfda2d65e24caf27703df34b5ac63e7a0a7c2ad",
      heading: "Trusted Across",
      text: "dfsfdf fdsfsdf fsdfsdf",
    },
  ];
  return (
    <>
      <Box
        bgImage={bg}
        bgSize={"cover"}
        bgPosition={"center"}
        h={"60vh"}
        position={"relative"}
      >
        <Box position={"absolute"} top={"35%"} left={["5%", "10%"]}>
          <Heading color={"white"}>
            {" "}
            Lets Invest in Crypto <br />
            Bro{" "}
          </Heading>

          <motion.div
            animate={{
              translateY: "20px",
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Button borderRadius={"1rem"} mt={"10px"} color={"#724cf9"}>
              Get Started &#8599;
            </Button>
          </motion.div>
        </Box>
      </Box>

      <Box>
        <Heading textAlign={"center"} my={"6"} color={"#724cf9"}>
          Why CoinQuake?
        </Heading>

        <HStack
          wrap={"wrap"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"5"}
        >
          {options.map((i) => (
            <VStack
              key={i.heading}
              h={"64"}
              w={"60"}
              shadow={"lg"}
              borderRadius={"1rem"}
              border={"1px solid #724cf9"}
            >
              <Box
                h={"60%"}
                w={"100%"}
                borderRadius={"1rem 1rem 0 0"}
                borderBottom={"1px solid #724cf9"}
                overflow={"hidden"}
              >
                <Image
                  src={i.image}
                  h={"100%"}
                  w={"100%"}
                  borderRadius={"1rem 1rem 0 0"}
                  objectFit={"cover"}
                  transition={"all ease 0.3s"}
                  css={{
                    "&:hover": { transform: "scale(1.2)" },
                  }}
                />
              </Box>
              <Text fontWeight={"bold"} fontSize={"larger"} color={"#724cf9"}>
                {i.heading}
              </Text>
              <Text fontSize={"medium"} p={"0 1rem"}>
                {i.text}
              </Text>
            </VStack>
          ))}
        </HStack>
      </Box>

      <Box
        bgColor={"#724cf9"}
        margin={"3rem auto"}
        p={"4"}
        maxW={"30rem"}
        borderEndStartRadius={"2rem"}
        borderTopEndRadius={"2rem"}
      >
        <Heading textAlign={"center"} color={"white"}>
          About Us
        </Heading>
        <Text color={"white"} mt={"3"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
          obcaecati deserunt. Cum placeat quam nemo quos, odit provident dolores
          eligendi amet sint illo aspernatur corporis molestias veritatis
          distinctio. Minus magni sunt, inventore reiciendis necessitatibus sed
          dolor, facere adipisci, at sint id incidunt ducimus ratione explicabo
          totam hic nulla. Nostrum, debitis.
        </Text>
      </Box>
    </>
  );
};

export default Home;
