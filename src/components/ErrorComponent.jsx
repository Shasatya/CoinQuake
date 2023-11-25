import { Alert, Box, AlertIcon } from "@chakra-ui/react";

const ErrorComponent = ({ message }) => {
  return (
    <Box h={"80vh"} w={"100vw"} >
      <Alert
        status="error"
        position={"absolute"}
        bottom={"50%"}
        left={"50%"}
        transform={"translateX(-50%)"}
        w={"15rem"}
      >
        <AlertIcon />
        {message}
      </Alert>
    </Box>
  );
};

export default ErrorComponent;
