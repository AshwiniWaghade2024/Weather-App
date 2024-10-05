import React from 'react';
import clearSky from './images/clear-sky.png';
import fewClouds from './images/few-clouds.png';
import scatteredClouds from './images/scattered-clouds.png';
import brokenClouds from './images/broken-clouds.png';
import showerRain from './images/shower-rain.png';
import rain from './images/rain.png';
import thunderstorm from './images/thunderstorm.png';
import snow from './images/snow.png';
import mist from './images/mist.png';

const weatherIcons = {
  "Clear": clearSky,
  "Few clouds": fewClouds,
  "Scattered clouds": scatteredClouds,
  "Broken clouds": brokenClouds,
  "Shower rain": showerRain,
  "Rain": rain,
  "Thunderstorm": thunderstorm,
  "Snow": snow,
  "Mist": mist,
};

function WeatherDisplay({ weather }) {
  const weatherCondition = weather.weather[0].description; 
  const icon = weatherIcons[weatherCondition] || clearSky;

  return (
    <div className="weather-display">
      <h2>{weather.name}</h2>
      <img src={icon} alt={weatherCondition} style={{ width: '100px', height: '100px' }} /> {}
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
      <p>{weatherCondition}</p>
    </div>
  );
}

export default WeatherDisplay;
