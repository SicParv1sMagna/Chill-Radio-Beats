import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import RadioStations from './components/RadioStations';
import AudioControls from './components/AudioControls';
import '../src/styles.css';

function App() {
  const [playPauseBtn, setPlayPauseBtn] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [muteBtn, setMuteBtn] = useState(false);
  const [video, setVideo] = useState("https://www.youtube.com/watch?v=rUxyKA_-grg");

  const start = () => {
    setPlayPauseBtn(true);
    console.log('video has been started');
  }

  const pause = () => {
    setPlayPauseBtn(false);
    console.log('video has been paused');
  }

  const LoFiGirl = () => {
    setPlayPauseBtn(true);
    setVideo("https://www.youtube.com/watch?v=rUxyKA_-grg");
    console.log("LoFiGirl");
    start();
  }

  const CoffeeShopRadio = () => {
    setPlayPauseBtn(true);
    setVideo("https://www.youtube.com/watch?v=-5KAN9_CzSA");
    console.log("CoffeeShopRadio");
    start();
  }

  const ChillHopMusic = () => {
    setPlayPauseBtn(true);
    setVideo("https://www.youtube.com/watch?v=7NOSDKb0HlU");
    console.log("ChillHopMusic");
    start();
  }

  const ChilloutLounge = () => {
    setPlayPauseBtn(true);
    setVideo("https://www.youtube.com/watch?v=9UMxZofMNbA");
    console.log("ChilloutLounge");
    start();
  }

  const AnimeVibe = () => {
    setPlayPauseBtn(true);
    setVideo("https://www.youtube.com/watch?v=WDXPJWIgX-o");
    console.log("AnimeVibe");
    start();
  }

  return (
    <div className="App">
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
      <div className='youtubeLink'>
          <a className='youtubeContainer' href={video}>
            <img className='youtubeImg' src='../youtubeImg.png' alt='youtubeImg'></img>
          </a>
      </div>
    </div>
      <ReactPlayer
          url={video}
          volume={volume}
          playing={playPauseBtn}
          muted={muteBtn}
          className='react-player'
          height='1050px'
          width='1650px'
        />
    </div>
  );
}

export default App;
