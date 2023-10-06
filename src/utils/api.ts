import axios from 'axios';

const apiKey = process.env.OPENWEATHERMAP_API_KEY;
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

export async function getWeatherData(city: string) {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        q: city,
        appid: apiKey,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}