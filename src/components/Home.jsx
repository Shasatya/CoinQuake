import {
  Box,
  Button,
  Heading,
  Image,
  HStack,
  VStack,
  Text,
  Input,
  FormLabel,
  Stack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bg from "../assets/img/bg.png";
import bg2 from "../assets/img/bg2.jpg";

const Home = () => {
  const updateOptions = [
    {
      image:
        "https://image.cnbcfm.com/api/v1/image/107338325-1700733050281-gettyimages-1757393178-arriens-techillu231101_npQEj.jpeg?v=1700828131&w=740&h=416&ffmt=webp&vtcrop=y",
      text: "$115 million stolen from two crypto firms linked to Justin Sun after hack",
    },
    {
      image:
        "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=717/https://s3.cointelegraph.com/uploads/2023-11/5e194d3d-9a8c-4a58-956c-9007f3c5f4cf.jpg",
      text: "‘Strap yourselves in’ — Bull market coming early 2024, say crypto exchange heads",
    },
    {
      image:
        "https://www.coindesk.com/resizer/9ABz2oynL9T7D0wGIySUij5CVu0=/2112x1188/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/YJKVVHZBQ5FXTPRG3VLYIHZ3JQ.jpg",
      text: "Hong Kong Investment Firm Victory Securities Obtains Retail Crypto Trading License",
    },
    {
      image:
        "https://www.aljazeera.com/wp-content/uploads/2022/11/2018-10-04T160030Z_421009281_RC1114386580_RTRMADP_3_MALTA-CRYPTOCURRENCY.jpg?resize=770%2C513&quality=80",
      text: "Binance crypto exchange founder to step down amid US illicit finance probe",
    },
    {
      image:
        "https://www.livemint.com/lm-img/img/2023/11/20/600x338/im-889351_1700486665835_1700486691461.jpg",
      text: "Company Led by Former NYSE President Buys Crypto News Site CoinDesk",
    },
    {
      image:
        "https://crypto.news/app/uploads/2023/06/crypto-news-elon-musk-front-view-portrait-blurry-background-day-light-low-poly-sty-v5.1.jpg.webp",
      text: "Fake Elon Musk YouTube streams lead to $165k crypto scam",
    },
  ];

  const membershipOptions = [
    {
      image:
        "https://img.freepik.com/free-vector/product-quality-concept-illustration_114360-7301.jpg?w=996&t=st=1701020262~exp=1701020862~hmac=e771b5a767d8bd238b0d71cbc6bcf47acd2ac024e22febff76ce6660a8627660",
      heading: "Expert Analysis",
    },
    {
      image:
        "https://img.freepik.com/free-vector/strategic-consulting-concept-illustration_114360-8994.jpg?w=996&t=st=1701010031~exp=1701010631~hmac=46b2a494b30146df6f26d5ba80cd2d5f552e328a89a96b2fbbab231bc032be4f",
      heading: "1 on 1 Sessions",
    },
    {
      image:
        "https://img.freepik.com/premium-vector/specialist-trader-who-buys-sells-cryptocurrencies-mines-blockchain-coins-bitcoin_519070-386.jpg?semt=ais",
      heading: "Portfolio",
    },
    {
      image:
        "https://img.freepik.com/premium-vector/24-hour-open-service-background-communication-vector_647881-704.jpg?semt=sph",
      heading: "24Hrs Service",
    },
    {
      image:
        "https://img.freepik.com/free-vector/attention-attraction-important-announcement-warning-information-sharing-latest-news-loudspeaker-megaphone-bullhorn-with-exclamation-mark-vector-isolated-concept-metaphor-illustration_335657-2809.jpg?w=996&t=st=1701019999~exp=1701020599~hmac=25b988b25ec16c8f5c3535c6e036e068f2a787a125a25a5d76f38a0af3cb0c1f",
      heading: "Latest Trends",
    },

    {
      image:
        "https://img.freepik.com/free-vector/connected-world-concept-illustration_114360-4240.jpg?w=996&t=st=1701020343~exp=1701020943~hmac=d2c94d6730754a80d1919c8fa6501aaebb36d508ae29924bfdb971f6f2d4b987",
      heading: "Community",
    },
  ];

  const aboutOptions = [
    {
      id: 1,
      text: " Welcome to CoinQuake , your go-to source for reliable and comprehensive information about the world of cryptocurrencies and blockchain technology. At CoinQuake , we strive to empower individuals with the knowledge they need to navigate the exciting and dynamic landscape of digital assets.",
    },
    {
      id: 2,
      text: "Our mission is to demystify the complexities of the cryptocurrency space and make it accessible to everyone, from beginners to experienced enthusiasts. We believe in the transformative potential of blockchain technology and aim to be a trusted resource that helps users make informed decisions in the ever-evolving crypto ecosystem.",
    },
    {
      id: 3,
      text: "Thank you for choosing CoinQuake as your trusted source for cryptocurrency information. We're excited to be part of your crypto journey!",
    },
  ];

  const contactOptions = [
    {
      label1: "First Name",
      placeholder1: "Jon",
      type1: "text",
      label2: "Last Name",
      placeholder2: "Doe",
      type2: "text",
    },
    {
      label1: "Email",
      placeholder1: "abc@xyz.com",
      type1: "email",
      label2: "Phone",
      placeholder2: "1234567890",
      type2: "number",
    },
    {
      label1: "Country",
      placeholder1: "Select",
      type1: "text",
      label2: "State",
      placeholder2: "Select",
      type2: "text",
    },
  ];

  const whyOptions = [
    {
      image:
        "https://img.freepik.com/free-vector/data-points-concept-illustration_114360-2194.jpg?w=996&t=st=1700594965~exp=1700595565~hmac=fafc31dae3c6ba216a1fe9ebf3c860c07d76f22644c871f0025978996e6e71ea",
      heading: "Live Data",
    },
    {
      image:
        "https://img.freepik.com/free-vector/worldwide-delivery-service-global-navigation-ordering-system-world-tourism-idea_335657-323.jpg?w=996&t=st=1700594776~exp=1700595376~hmac=863ea86f5e8fc49fc24bbbace6b8cf57bbf2b8ba03c5ff0e3783d0f1e0d22e84",
      heading: "Easy Usage",
    },
    {
      image:
        "https://img.freepik.com/free-vector/cyber-defense-logo-with-checkmark-trust-your-digital-business_1017-44245.jpg?w=996&t=st=1700594667~exp=1700595267~hmac=ca88dfd88322c357c1499da1ddfda2d65e24caf27703df34b5ac63e7a0a7c2ad",
      heading: "Trusted",
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
          <Heading color={"white"} letterSpacing={"1.5px"}>
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
            <Button
              borderRadius={"1rem"}
              mt={"10px"}
              bgColor={"#fff"}
              color={"#724cf9"}
            >
              <Link to="/coins">Get Started &#8599;</Link>
            </Button>
          </motion.div>
        </Box>
      </Box>

      <Box>
        <Heading
          textAlign={"center"}
          my={"6"}
          color={"#724cf9"}
          letterSpacing={"1.5px"}
        >
          Updates
        </Heading>

        <HStack
          wrap={"wrap"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={["5", "10"]}
          px={["0", "40"]}
        >
          {updateOptions.map((i) => (
            <HStack
              key={i.image}
              h={"20"}
              w={["300px", "345px"]}
              shadow={"lg"}
              transition={"all ease 0.3s"}
              css={{
                "&:hover": { transform: "translateX(6%)", cursor: "pointer" },
              }}
            >
              <Image
                src={i.image}
                h={"100%"}
                w={"30%"}
                objectFit={"cover"}
                transition={"all ease 0.3s"}
              />

              <Text w={"80%"} fontSize={"medium"} fontWeight={"300"}>
                {i.text}
              </Text>
            </HStack>
          ))}
        </HStack>
      </Box>

      <Box
        shadow={"lg"}
        borderRadius={["1px", "2rem"]}
        maxWidth={"40rem"}
        m={"4rem auto"}
        p={"4"}
        px={["0.1rem", "3rem"]}
      >
        <Heading color={"#724cf9"} textAlign={"center"} letterSpacing={"1.5px"}>
          Start Learning
        </Heading>
        <Text
          p={"4"}
          fontSize={"medium"}
          fontWeight={"300"}
          letterSpacing={"0.8px"}
        >
          Feel free to become a part of our exclusive membership program, where
          youll have the opportunity to delve deep into the intricate world of
          crypto market trends, gaining valuable knowledge and staying ahead of
          the curve in this dynamic and evolving industry.
        </Text>
        <HStack
          wrap={"wrap"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"5"}
        >
          {membershipOptions.map((i) => (
            <VStack key={i.heading}>
              <Box
                h={"8rem"}
                w={"8rem"}
                shadow={"lg"}
                borderRadius={"1rem"}
                border={"1px solid #fff"}
                overflow={"hidden"}
                transition={"all ease 0.3s"}
                css={{
                  "&:hover": {
                    border: "1px solid #724cf9",
                  },
                }}
              >
                <Image
                  src={i.image}
                  h={"100%"}
                  w={"100%"}
                  borderRadius={"1rem 1rem 0 0"}
                  objectFit={"cover"}
                />
              </Box>
              <Text
                fontWeight={"400"}
                fontSize={"medium"}
                color={"#724cf9"}
                mt={"-1"}
                letterSpacing={"0.8px"}
              >
                {i.heading}
              </Text>
            </VStack>
          ))}
        </HStack>
        <Box textAlign={"center"} mt={"8"}>
          <Button
            bgColor={"#fff"}
            color={"#724cf9"}
            shadow={"lg"}
            borderRadius={"1rem"}
            border={"1px solid #724cf9"}
          >
            {" "}
            Register Now
          </Button>
        </Box>
      </Box>

      <Box
        bgImage={[bg2]}
        bgSize={"cover"}
        bgPosition={["right", "center"]}
        py={"4"}
        my={"12"}
      >
        <Box
          background={"rgba( 255, 255, 255, 0.1 )"}
          boxShadow={"0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"}
          backdropFilter={"blur( 4px )"}
          border={"1px soild rgba( 255, 255, 255, 0.18 )"}
          margin={"3rem 0"}
          p={["4", "8"]}
          maxW={"30rem"}
          borderRadius={"0 2rem 2rem 0"}
        >
          <Heading textAlign={"center"} color={"white"} letterSpacing={"1.5px"}>
            About CoinQuake
          </Heading>
          {aboutOptions.map((i) => (
            <Text
              key={i.id}
              color={"white"}
              mt={"6"}
              fontWeight={"300"}
              letterSpacing={"1px"}
            >
              {i.text}
            </Text>
          ))}
        </Box>

        <Box
          background={"rgba( 255, 255, 255, 0.1 )"}
          boxShadow={"0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"}
          backdropFilter={"blur( 4px )"}
          border={"1px soild rgba( 255, 255, 255, 0.18 )"}
          maxW={"30rem"}
          margin={[
            "1rem 0rem 2rem auto",
            "2rem 0rem 2rem auto",
            "4rem 0rem 2rem auto",
            "-16rem 0rem 2rem auto",
          ]}
          p={"8"}
          borderRadius={"2rem 0 0 2rem"}
        >
          <VStack>
            <Heading mb={"3"} mt={"-5"} color={"#fff"} letterSpacing={"1.5px"}>
              Contact
            </Heading>

            {contactOptions.map((i) => (
              <Stack direction={["column", "row"]} key={i.label1} mt={"2"}>
                <Box>
                  <FormLabel htmlFor="name" color={"#fff"}>
                    {i.label1}
                  </FormLabel>
                  <Input
                    placeholder={i.placeholder1}
                    background={"rgba( 255, 255, 255, 0.1 )"}
                    boxShadow={"0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"}
                    backdropFilter={"blur( 4px )"}
                    border={"1px soild rgba( 255, 255, 255, 0.18 )"}
                    _placeholder={{ color: "#fff" }}
                  />
                </Box>
                <Box>
                  <FormLabel htmlFor="name" color={"#fff"}>
                    {i.label2}
                  </FormLabel>
                  <Input
                    placeholder={i.placeholder2}
                    background={"rgba( 255, 255, 255, 0.1 )"}
                    boxShadow={"0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"}
                    backdropFilter={"blur( 4px )"}
                    border={"1px soild rgba( 255, 255, 255, 0.18 )"}
                    _placeholder={{ color: "#fff" }}
                  />
                </Box>
              </Stack>
            ))}

            <Button
              borderRadius={"5px"}
              mt={"16px"}
              mb={"-1rem"}
              color={"#724cf9"}
              bgColor={"#fff"}
              w={["255px", "full"]}
            >
              Submit
            </Button>
          </VStack>
        </Box>
      </Box>

      <Box mb={"12"}>
        <Heading
          textAlign={"center"}
          my={"6"}
          color={"#724cf9"}
          letterSpacing={"1.5px"}
        >
          Why CoinQuake?
        </Heading>

        <HStack
          wrap={"wrap"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"5"}
        >
          {whyOptions.map((i) => (
            <Box
              key={i.heading}
              h={"64"}
              w={"60"}
              shadow={"lg"}
              borderRadius={"1rem"}
              border={"1px solid #724cf9"}
              overflow={"hidden"}
              position={"relative"}
              transition={"all ease 0.3s"}
              css={{
                "&:hover": {
                  transform: "rotate3d(0.5,1,0,30deg)",
                },
              }}
            >
              <Image
                src={i.image}
                h={"100%"}
                w={"100%"}
                borderRadius={"1rem 1rem 0 0"}
                objectFit={"cover"}
              />
              <Text
                fontWeight={"400"}
                fontSize={"larger"}
                color={"#724cf9"}
                position={"absolute"}
                bottom={"0%"}
                left={"50%"}
                transform={"translate(-50%)"}
                letterSpacing={"1px"}
              >
                {i.heading}
              </Text>
            </Box>
          ))}
        </HStack>
      </Box>
    </>
  );
};

export default Home;
