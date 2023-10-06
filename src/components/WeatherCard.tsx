import React from 'react';

interface WeatherCardProps {
  city: string;
  temperature: number;
  weatherDescription: string;
  pressure: number;
  windSpeed: number;
  feelsLike: number;
  humidity: number;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  city,
  temperature,
  weatherDescription,
  pressure,
  windSpeed,
  feelsLike,
  humidity,
}) => {
  return (
    <div>
      <h1>Weather in {city}</h1>
      <p>Temperature: {temperature}°C</p>
      <p>Weather: {weatherDescription}</p>
      <p>Pressure: {pressure} hPa</p>
      <p>Wind Speed: {windSpeed} m/s</p>
      <p>Feels Like: {feelsLike}°C</p>
      <p>Humidity: {humidity}%</p>
    </div>
  );
};

export default WeatherCard;