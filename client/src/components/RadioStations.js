import React from 'react';
import '../styles.css'
//https://www.youtube.com/watch?v=WDXPJWIgX-o - Anime Vibe
//https://www.youtube.com/watch?v=-5KAN9_CzSA - Coffee Shop Radio
//https://www.youtube.com/watch?v=rUxyKA_-grg - LoFi Girl
//https://www.youtube.com/watch?v=7NOSDKb0HlU - ChillHop Music
//https://www.youtube.com/watch?v=9UMxZofMNbA - Chillout Lounge

const RadioStations = ({LoFiGirl, CoffeeShopRadio, ChillHopMusic, ChilloutLounge, AnimeVibe}) => {
    return (
            <div className='radioStations'>        
                <div className='radioStations__station__name'>
                    <button onClick={LoFiGirl}>Lofi Girl</button>
                </div>        
                <div className='radioStations__station__name'>
                    <button onClick={CoffeeShopRadio}>Coffee Shop Radio</button>
                </div>        
                <div className='radioStations__station__name'>
                    <button onClick={ChillHopMusic}>ChillHop Music</button>
                </div>        
                <div className='radioStations__station__name'>
                    <button onClick={ChilloutLounge}>Chillout Lounge</button>
                </div>        
                <div className='radioStations__station__name'>
                    <button onClick={AnimeVibe}>Anime Vibe</button>
                </div>
            </div>
    );
}

export default RadioStations;