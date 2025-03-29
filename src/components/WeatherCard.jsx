import './WeatherCard.css';

const WeatherCard = ({ weather }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold">{weather.name}</h2>
            <img 
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                alt={weather.weather[0].description} 
                className="mx-auto"
            />
            <p className="text-xl">{weather.main.temp}°C</p>
            <p>{weather.weather[0].main}</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind: {weather.wind.speed} km/h</p>
        </div>
    );
};

export default WeatherCard;
