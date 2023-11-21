import { HStack, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack
      p={1}
      px={2}
      shadow={"base"}
      bgColor={"#724cf9"}
      justifyContent={"space-between"}
      borderBottom={"1px solid #fff"}
    >
      <Box>
        <Button variant={"unstyled"} color={"white"}>
          <Link to="/">HOME</Link>
        </Button>
      </Box>

      <Box>
        <Button variant={"unstyled"} color={"white"}>
          <Link to="/exchanges">EXCHANGE</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"} marginLeft={"4"}>
          <Link to="/coins">COINS</Link>
        </Button>
      </Box>
    </HStack>
  );
};

export default Header;
