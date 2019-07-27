import React from 'react';
import MyCard from './MyCard';
import '../style/cardList.sass';

const CardList = ({weather, name}) => {
    const list = weather.map((val,i) => {
        return <MyCard 
        key={i}
        degrees={val.Temperature.Maximum.Value} 
        date={val.Date} 
        unit ={val.Temperature.Maximum.Unit}
        name={name}
        /> 
    })
    return (
        <div className='cardlist' >{list}</div>
    )};


export default CardList;