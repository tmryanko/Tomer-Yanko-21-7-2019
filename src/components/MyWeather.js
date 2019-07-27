import React from 'react';
import CardList from './CardList';
import MyCard from './MyCard';
import '../style/myWeather.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

const MyWeather = ({currentWeather, weather, onClick , iColor, name}) => {

    return (
        <div className= 'myWeather'>
            <div className='myWeatherTop'>
                <MyCard
                name={name}
                degrees={currentWeather.degrees}
                date={currentWeather.date}
                unit={currentWeather.unit}/>
                <div className='myWeatherTopRight'>
                    <FontAwesomeIcon style={{color: iColor}} className='favIcon' icon={faHeart} />
                    <Button onClick={onClick}>Add To Favorites</Button>
                </div>
            </div>
            <h1>{currentWeather.weatherText}</h1>
            <CardList weather={weather} name={name} className='myWeatherBottom'/>
        </div>
    )};


export default MyWeather

