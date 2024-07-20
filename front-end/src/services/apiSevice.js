import axios from 'axios';

const API_BASE_URL = 'http://localhost:5208';

export const getWeatherForecast = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/weatherforecast`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather forecast:', error);
    throw error;
  }
};
