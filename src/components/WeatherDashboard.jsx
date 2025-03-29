import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import ErrorMessage from './ErrorMessage';
import Loader from './Loader';
import SearchHistory from './SearchHistory';
import ThemeToggle from './ThemeToggle';
import axios from 'axios';
import './WeatherDashboard.css'; // Importing external CSS file

const API_KEY = 'b75ac67a96341ca552bab82fa72f49fe';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const WeatherDashboard = () => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [history, setHistory] = useState([]);

    const fetchWeather = async (city) => {
        setLoading(true);
        setError('');
        setWeather(null);
        try {
            const response = await axios.get(`${BASE_URL}`, {
                params: { q: city, appid: API_KEY, units: 'metric' },
            });
            setWeather(response.data);
            updateHistory(city);
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
        }
        setLoading(false);
    };

    const updateHistory = (city) => {
        setHistory((prev) => {
            const newHistory = [city, ...prev.filter((item) => item !== city)].slice(0, 5);
            localStorage.setItem('searchHistory', JSON.stringify(newHistory));
            return newHistory;
        });
    };

    useEffect(() => {
        const savedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        setHistory(savedHistory);
    }, []);

    return (
        <div className="dashboard">
            <div className="header">
                <h1>Weather Dashboard</h1>
                <ThemeToggle />
            </div>
            <SearchBar onSearch={fetchWeather} />
            <SearchHistory history={history} onSearch={fetchWeather} />
            {loading && <Loader />}
            {error && <ErrorMessage message={error} />}
            {weather && <WeatherCard weather={weather} />}
        </div>
    );
};

export default WeatherDashboard;
