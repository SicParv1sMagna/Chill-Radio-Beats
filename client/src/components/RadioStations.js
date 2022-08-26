import React from 'react';
import '../styles.css'

const RadioStations = ({LoFiGirl, CoffeeShopRadio, ChillHopMusic, ChilloutLounge, AnimeVibe}) => {
    return (
            <div className='radioStations'>   
                <div className='header'>
                    <img className='chillImg' src='../chillImg.png'></img>
                </div>
                <div className='radioStationsContainer'>
                    <div className='radioStations__station__name'>
                        <button className='stationButton' onClick={LoFiGirl}>Lofi Girl</button>
                    </div>        
                    <div className='radioStations__station__name'>
                        <button className='stationButton' onClick={CoffeeShopRadio}>Coffee Shop Radio</button>
                    </div>        
                    <div className='radioStations__station__name'>
                        <button className='stationButton' onClick={ChillHopMusic}>ChillHop Music</button>
                    </div>        
                    <div className='radioStations__station__name'>
                        <button className='stationButton' onClick={ChilloutLounge}>Chillout Lounge</button>
                    </div>        
                    <div className='radioStations__station__name'>
                        <button className='stationButton' onClick={AnimeVibe}>Anime Vibe</button>
                    </div>
                </div>
                <div className='githubIcon'>
                    <a href='https://github.com/SicParv1sMagna'><img className='githubImg' src='../GithubIcon.png'></img></a>
                </div>
            </div>
    );
}

export default RadioStations;