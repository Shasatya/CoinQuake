import { useRef, useState, useEffect } from "react";

const Player = ({ src, autoPlay }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    const audio = audioRef.current;

    audio.src = src; // Set the source dynamically

    const playPromise = isPlaying ? audio.play() : Promise.resolve();

    playPromise
      .then(() => {
        // Audio playback started
      })
      .catch((error) => {
        console.error("Error playing audio:", error.message);
      });

    return () => {
      audio.pause();
    };
  }, [isPlaying, src]);

  const handleToggle = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} />
      <button onClick={handleToggle}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
};

export default Player;
