import React from 'react';
import MyCard from './MyCard';
import '../style/cardList.sass';

const FavCardList = ({weather, handleGoHome}) => {
    const list = weather.map((val,i) => {
        return <MyCard 
        key={i}
        {...val.currentWeather}
        name={val.cityName}
        loc='fav'
        id={val.key}
        handleGoHome={(id, name) => {handleGoHome(id, name)}}
        /> 
    })
    return (
        <div className='cardlist'  >{list}</div>
    )};


export default FavCardList;