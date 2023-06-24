import { Box, Image } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Box
      mt={"50px"}
      style={{ width: "100vw", height: "100vh", background: "black" }}
    >
      <Image
        style={{
          margin: "auto",
          justifyContent: "center",
          alignContent: "center",
        }}
        src="https://freefrontend.com/assets/img/css-loaders/loading.gif"
      />
    </Box>
  );
};

export default Loading;
