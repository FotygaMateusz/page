import React, { useState, useEffect } from "react";
import "./Music.css";
import Player from "./components/Player";
import song1img from "./images/song1.jpg";
import song2img from "./images/song2.jpg";
import song3img from "./images/song3.jpg";
import song1 from "./songs/song1.mp3";
import song2 from "./songs/song2.mp3";
import song3 from "./songs/song3.mp3";

const Music = (props) => {
  const [songs] = useState([
    {
      title: "Creative Minds",
      artist: "Benjamin Tissot",
      img_src: song1img,
      src: song1,
    },
    {
      title: "Happy Rock",
      artist: "Bensound",
      img_src: song2img,
      src: song2,
    },
    {
      title: "Hey!",
      artist: "Benjamin Tissot",
      img_src: song3img,
      src: song3,
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return props.trigger ? (
    <div className="popup">
      <div className="wrap">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          Back
        </button>
        <div className="Music">
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            nextSongIndex={nextSongIndex}
            songs={songs}
          />
        </div>
      </div>
    </div>
  ) : null;
};

export default Music;
