# Weather Dashboard Web App

## Tech Stack Used
- React.js
- CSS (External Stylesheet)
- OpenWeatherMap API
- React Hooks

## Setup Instructions

### 1. Clone the Repository
```sh
git clone <repository-url>
cd weather-dashboard
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Get OpenWeatherMap API Key
- Sign up at [OpenWeatherMap](https://openweathermap.org/) and generate an API key.
- Create a `.env` file in the root of the project and add:
```env
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

### 4. Start the Development Server
```sh
npm start
```

## API Integration Details

- **API Used**: OpenWeatherMap API ([Docs](https://openweathermap.org/api))
- **Endpoints**:
  - `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}` (Current Weather)
  - `https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}` (5-day Forecast)
- **Response Format**: JSON
- **Rate Limits**:
  - Free tier: 60 requests per minute
  - Higher limits available with paid plans

