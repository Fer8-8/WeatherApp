import { useState, useEffect } from "react";
import WeatherForm from "./WeatherForm";
import Info from "./Info";

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    handleSetCity("Mexico");
  }, []);

  useEffect(() => {
    document.title = "Weather | " + weather?.location.name;
  }, [weather]);

  async function loadInfo(city = "London") {
    try {
      const request = await fetch(
        "http://api.weatherapi.com/v1/current.json?key=b5ec0b1c3fbd4c8a9be170507222111&aqi=no&q=" +
          city
      );
      const json = await request.json();
      console.log(json);

      setWeather(json);
    } catch (error) {}
  }

  function handleSetCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className="App">
      <h1>Select a city</h1>
      <WeatherForm OnChangeCity={handleSetCity} />

      <Info weather={weather} />
    </div>
  );
}

export default App;
