import { Button } from "@chakra-ui/react";
import { useState } from "react";
import ReactHowler from "react-howler";

import music from "../assets/aud/bgmusic.mp3";

import { FaPlay, FaPause } from "react-icons/fa";

const Player = () => {
  const [button, setButton] = useState(false);
  const [playing, setPlaying] = useState(false);

  const toggleClick = () => {
    setButton(!button);
    setPlaying(!playing);

    if (button === true) {
      setPlaying(!playing);
    } else {
      setPlaying(!playing);
    }
  };

  return (
    <Button
      position={"fixed"}
      zIndex={"10"}
      bottom={"2rem"}
      right={"2rem"}
      height={"3rem"}
      width={"3rem"}
      borderRadius={"50%"}
      border={"1px solid #FDB427"}
      bgColor={"#FDB427"}
      transition={"all ease 0.3s"}
      css={{
        "&:hover": {
          backgroundColor: "#fff",
          color: "#724CF9",
          border: "1px solid #724CF9",
        },
      }}
      onClick={toggleClick}
    >
      <ReactHowler src={[music]} playing={playing} loop={true} />
      {button ? <FaPause /> : <FaPlay />}
    </Button>
  );
};

export default Player;
