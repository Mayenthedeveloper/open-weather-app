import React, { useEffect, useState } from "react";
import "../components/style.css";
import WeatherDetails from "./WeatherDetails";

function SearchMain() {
  const [searchTerm, setSearchTerm] = useState("mumbai");

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=7de7fa9260b5868611bd72e03d263222`;

      let res = await fetch(url);
      let data = await res.json(data);
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

  useEffect(() => {}, [searchTerm]);

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
        </div>
        <button className="searchButton" onClick={getWeatherInfo}>
          Search
        </button>
      </div>
      <WeatherDetails />
    </>
  );
}

export default SearchMain;
