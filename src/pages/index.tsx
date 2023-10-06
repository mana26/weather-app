import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchWeather = async (city: string) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}`
  );
  return response.data;
};

const Home: React.FC = () => {
  const [city, setCity] = useState<string>(''); // State to store the selected city

  const { data, isLoading, isError } = useQuery(['weather', city], () =>
    fetchWeather(city)
  );

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleReload = () => {
    // Refetch weather data
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter a city"
        value={city}
        onChange={handleCityChange}
      />
      <button onClick={handleReload}>Reload</button>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error fetching weather data.</div>}
      {data && (
        <div className="weather-info">
          <h2>{data.name} Weather</h2>
          <p>Temperature: {data.main.temp}°C</p>
          <p>Weather: {data.weather[0].description}</p>
          <p>Pressure: {data.main.pressure} hPa</p>
          <p>Wind Speed: {data.wind.speed} m/s</p>
          <p>Feels Like: {data.main.feels_like}°C</p>
          <p>Humidity: {data.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default Home;