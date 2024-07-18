import React, { useState, useEffect } from 'react';

// Replace with your actual API key
const API_KEY = 'f380628a027cad9a50342c73fb353fe4';

const WeatherDisplay = () => {
  const [weatherData, setWeatherData] = useState({
    today: null,
    tomorrow: null,
  });
  const [position, setPosition] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      alert("Error while locating your error");
    }
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${position.latitude}&lon=${position.longitude}&appid=${API_KEY}`
      );
      const data = await response.json();

      // Extract today's and tomorrow's weather
      const todayData = data.list.slice(0, 8);
      const tomorrowData = data.list.slice(8, 16);

      setWeatherData({
        today: {
          temperature: Math.round(todayData[0].main.temp - 273.15),
          description: todayData[0].weather[0].description,
        },
        tomorrow: {
          temperature: Math.round(tomorrowData[0].main.temp - 273.15),
          description: tomorrowData[0].weather[0].description,
        },
      });
    } catch (error) {
      alert('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const handleRefresh = () => {
    fetchWeatherData();
  };

  return (
    <div>
      <div className="weather-entry">
        <h3>Today</h3>
        <p>
          Temperature: {weatherData.today?.temperature}°C
        </p>
        <p>Description: {weatherData.today?.description}</p>
        {weatherData.today?.description === 'heavy rain' && (
          <div className="rain-warning">Heavy Rain Expected</div>
        )}
      </div>

      <div className="weather-entry">
        <h3>Tomorrow</h3>
        <p>
          Temperature: {weatherData.tomorrow?.temperature}°C
        </p>
        <p>Description: {weatherData.tomorrow?.description}</p>
        {weatherData.tomorrow?.description === 'heavy rain' && (
          <div className="rain-warning">Heavy Rain Expected</div>
        )}
      </div>

      <button onClick={handleRefresh} className='btn system-button'>Refresh</button>
    </div>
  );
};

export default WeatherDisplay;