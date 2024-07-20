import React, { useEffect, useState } from 'react';
import { getWeatherForecast } from '../services/apiSevice';

function App() {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getWeatherForecast();
                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="App">
            <h1>Weather Forecast</h1>
            <ul>
                {weatherData.map((forecast, index) => (
                    <li key={index}>
                        {
                            //@ts-ignore
                            forecast.date} - {forecast.temperatureC}°C - {forecast.summary}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
