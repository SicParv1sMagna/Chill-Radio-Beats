import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import RadioStations from './components/RadioStations';
import AudioControls from './components/AudioControls';

function App() {
  const [playPauseBtn, setPlayPauseBtn] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [muteBtn, setMuteBtn] = useState(false);
  const [station, setStation] = useState("LoFiGirl");
  const [video, setVideo] = useState("https://www.youtube.com/watch?v=WDXPJWIgX-o");
  const [playVideo, setPlayVideo] = useState(false);

  const start = () => {
    setPlayPauseBtn(true);
    setPlayVideo(true);
    console.log('video has been started');
  }

  const pause = () => {
    setPlayPauseBtn(false);
    setPlayVideo(false);
    console.log('video has been paused');
  }

  const LoFiGirl = () => {
    setPlayPauseBtn(true);
    setPlayVideo(true);
    setStation("LoFiGirl");
    setVideo("https://www.youtube.com/watch?v=WDXPJWIgX-o");
    console.log("LoFiGirl");
    start();
  }

  const CoffeeShopRadio = () => {
    setPlayPauseBtn(true);
    setPlayVideo(true);
    setStation("CoffeeShopRadio");
    setVideo("https://www.youtube.com/watch?v=-5KAN9_CzSA");
    console.log("CoffeeShopRadio");
    start();
  }

  const ChillHopMusic = () => {
    setPlayPauseBtn(true);
    setPlayVideo(true);
    setStation("ChillHopMusic");
    setVideo("https://www.youtube.com/watch?v=7NOSDKb0HlU");
    console.log("ChillHopMusic");
    start();
  }

  const ChilloutLounge = () => {
    setPlayPauseBtn(true);
    setPlayVideo(true);
    setStation("ChilloutLounge");
    setVideo("https://www.youtube.com/watch?v=9UMxZofMNbA");
    console.log("ChilloutLounge");
    start();
  }

  const AnimeVibe = () => {
    setPlayPauseBtn(true);
    setPlayVideo(true);
    setStation("AnimeVibe");
    setVideo("https://www.youtube.com/watch?v=WDXPJWIgX-o");
    console.log("AnimeVibe");
    start();
  }

  return (
    <div className="App">
      <ReactPlayer url={video}
        volume={volume}
        playing={playPauseBtn}
        muted={muteBtn}
      />
    <div className='interfaceContwatch'>
      <div className='radioContainer'>
        <RadioStations
          LoFiGirl={LoFiGirl}
          CoffeeShopRadio={CoffeeShopRadio}
          ChillHopMusic={ChillHopMusic}
          ChilloutLounge={ChilloutLounge}
          AnimeVibe={AnimeVibe}
        />
      </div>
      <div className='audioControlsContainer'>
        <AudioControls
          start={start}
          pause={pause}
          playPauseBtn={playPauseBtn}
          muteBtn={muteBtn}
          setMuteBtn={setMuteBtn}
          volume={volume}
          setVolume={setVolume}
        />
      </div>
    </div>
    </div>
  );
}

export default App;
