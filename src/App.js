import React, { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';
import './App.css';  

const API_KEY = '51a136b75cbe3eaee3601de9a2323f44'; 

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const getWeather = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName},IN&appid=${API_KEY}&units=metric`
    );
    
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
        setError('');
      } else {
        setError('City not found');
      }
    } catch (error) {
      setError('Error fetching data');
    }
  };

  const handleSearch = (cityName) => {
    setWeatherData(null); 
    setError(''); 
    getWeather(cityName);
  };
  

  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weatherData && <WeatherDisplay weather={weatherData} />}
    </div>
  );
}

export default App;
