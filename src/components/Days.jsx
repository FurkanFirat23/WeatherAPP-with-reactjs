import axios from "axios";
import React, { useEffect } from "react";
import { useWeather } from "../context/WeatherContext";

function Days() {
  const { city, days, weatherData, setWeatherData, darkMode } = useWeather();
  useEffect(() => {
    const getData = () => {
      axios(
        `https://api.openweathermap.org/data/2.5/weather?city=${city.latitude}&lon=${city.longitude}&TR&key=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => setWeatherData(res.data.daily))
        .catch((err) => console.log(err));
    };
    getData();
    localStorage.setItem("darkMode", darkMode);
  }, [city, setWeatherData, darkMode]);

  return (
    <div className="days-container">
      {weatherData.map((item, index) => {
        return (
          <div className="day" key={index}>
            <div className="day-title">
              <span>{days[new Date(item.dt * 1000).getDay()]}</span>
            </div>
            <img
              className="day-img"
              src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
              alt={item.weather[0].description}
              title={item.weather[0].description}
            />
            <div className="day-deg">
              <span className="tmp-high">
                {Math.round(item.temp["max"])}
                &deg;
              </span>
              <span>
                {Math.round(item.temp["min"])}
                &deg;
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Days;
