import React from 'react';
import '../styles.css';

const AudioControls = ({start, pause, playPauseBtn, muteBtn, setMuteBtn, volume, setVolume}) => {
    return (
        <div className='audioControls'>
            <div className='volume'>
                <input type="range" min="0" max="1" defaultValue={volume} step="0.01" onChange={(event)=>setVolume(event.target.value)}></input>
            </div>
            <div className='playPause'>
                {playPauseBtn ? (<button onClick={pause}>Pause</button>) : (<button onClick={start}>Play</button>)}
            </div>
            <div className='mute'>
                {muteBtn ? (<button onClick={()=>setMuteBtn(false)}>unmuted</button>) : (<button onClick={()=>setMuteBtn(true)}>muted</button>)}
            </div>
        </div>
            
    );
}

export default AudioControls;