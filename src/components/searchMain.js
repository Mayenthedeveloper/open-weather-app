import React, { useEffect, useState } from "react";
import "../components/style.css";
import WeatherDetails from "./WeatherDetails";

function SearchMain() {
  const [searchTerm, setSearchTerm] = useState("mumbai");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=7de7fa9260b5868611bd72e03d263222`;

      let res = await fetch(url);
      let data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weatherType } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { sunset, country } = data.sys;
      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherType,
        name,
        speed,
        country,
        sunset,
      };
      setTempInfo(myNewWeatherInfo);

      //console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  //api.openweathermap.org/data/2.5/weather?q={city name}&appid=7de7fa9260b5868611bd72e03d263222

  useEffect(() => {
    getWeatherInfo();
  }, []);

  //useEffect
  //Async
  //Promises
  //Try and Catch

  //useEffect(() => {}, [searchTerm]);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search city..."
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="searchButton" onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>
      {/* //this the weatherdeatails page */}
      <WeatherDetails {...tempInfo} />
    </>
  );
}

export default SearchMain;
