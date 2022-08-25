import React, { useState } from 'react';
import RadioStations from './components/RadioStations';
import AudioControls from './components/AudioControls';

function App() {
  const [playPauseBtn, setPlayPauseBtn] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [muteBtn, setMuteBtn] = useState(false);
  const [station, setStation] = useState("LoFiGirl");
  const [video, setVideo] = useState("https://www.youtube.com/watch?v=WDXPJWIgX-o");
  const [playVideo, setPlayVideo] = useState(false);

  const start = () => {
    setPlayPauseBtn(true);
    setPlayVideo(true);
  }

  const pause = () => {
    setPlayPauseBtn(false);
    setPlayVideo(false);
  }

  const LoFiGirl = () => {
    setPlayPauseBtn(true);
    setPlayVideo(true);
    setStation("LoFiGirl");
    setVideo("https://www.youtube.com/watch?v=WDXPJWIgX-o");
    console.log("LoFiGirl");
  }

  const CoffeeShopRadio = () => {
    setPlayPauseBtn(true);
    setPlayVideo(true);
    setStation("CoffeeShopRadio");
    setVideo("https://www.youtube.com/watch?v=-5KAN9_CzSA");
    console.log("CoffeeShopRadio");
  }

  const ChillHopMusic = () => {
    setPlayPauseBtn(true);
    setPlayVideo(true);
    setStation("ChillHopMusic");
    setVideo("https://www.youtube.com/watch?v=7NOSDKb0HlU");
    console.log("ChillHopMusic");
  }

  const ChilloutLounge = () => {
    setPlayPauseBtn(true);
    setPlayVideo(true);
    setStation("ChilloutLounge");
    setVideo("https://www.youtube.com/watch?v=9UMxZofMNbA");
    console.log("ChilloutLounge");
  }

  const AnimeVibe = () => {
    setPlayPauseBtn(true);
    setPlayVideo(true);
    setStation("AnimeVibe");
    setVideo("https://www.youtube.com/watch?v=WDXPJWIgX-o");
    console.log("AnimeVibe");
  }

  return (
    <div className='interfaceContainer'>
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
        <AudioControls />
      </div>
    </div>
  );
}

export default App;
