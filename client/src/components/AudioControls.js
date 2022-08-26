import React from 'react';
import '../styles.css';

const AudioControls = ({start, pause, playPauseBtn, muteBtn, setMuteBtn, volume, setVolume}) => {
    return (
        <div className='audioControls'>
            <div className='controlsContainer'>
                <div className='volume'>
                    <input className='volumeInput' type="range" min="0" max="1" defaultValue={volume} step="0.01" onChange={(event)=>setVolume(event.target.value)}></input>
                </div>
                <div className='playPause'>
                    {playPauseBtn ? (<button className='pauseBtn' onClick={pause}><img className='pauseImg' src='../pauseImg.png'></img></button>) : (<button className='playBtn' onClick={start}><img className='playImg' src='../playImg.png'></img></button>)}
                </div>
                <div className='mute'>
                    {muteBtn ? (<button className='mutedOn' onClick={()=>setMuteBtn(false)}><img className='muted' src='../soundOff.png'></img></button>) : (<button className='mutedOff' onClick={()=>setMuteBtn(true)}><img className='unMuted' src='../soundOn.png'></img></button>)}
                </div>
            </div>
        </div>
    );
}

export default AudioControls;