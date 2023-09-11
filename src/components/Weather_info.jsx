import React from 'react';

const WeatherInfo = ({ error, weatherIcon, temperature, cityName }) => {
  return (
    <div className="weather_info">
      
      <img src={weatherIcon} alt="weather_icon" className="icon" />
      <h1 className="temperature">{temperature}</h1>
      <h2 className="cityName">{cityName}</h2>
    </div>
  );
};

export default WeatherInfo;