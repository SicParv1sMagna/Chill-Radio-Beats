import React from 'react';

const AudioControls = () => {
    return (
        <div className='audioControlsContainer'>
            <div className='audioControls'>
                <div className='playPause'>playPause</div>
                <div className='volume'>volume</div>
                <div className='mute'>mute</div>
            </div>
        </div>
    );
}

export default AudioControls;