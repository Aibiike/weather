import React from 'react';

const Weather = ({weather}) => {
    console.log(weather)
    return (
                <div className='d-flex justify-content-between align-items-center mt-3'>
                   <div>
                       <div className='name'>Город: {weather.name}</div>
                       <img className='img' src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt=""/>
                   </div>
                    <div>
                        <div className='temp'>Температура: {weather.main.temp}</div>
                        <div className='wind'>Скорость ветра: {weather.wind.speed}</div>
                        <div className='humidity'>Влажность воздуха: {weather.main.humidity}</div>
                        <div className='ressure'>Давление: {weather.main.pressure}</div>
                    </div>
                </div>
    );
};

export default Weather;