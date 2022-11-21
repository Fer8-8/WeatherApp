import React from "react";

export default function Info({ weather }) {
  if (weather === null) {
    return <h1>Cargando</h1>;
  }
  return (
    <div>
      <h1>{weather.location.name}</h1>
      <br />
      <div className="Info">
        <h2 className="condition">{weather.current.condition.text}</h2>
        <img src={"http:" + weather.current.condition.icon} />

        <div className="SInfo">
          <h2 className="degrees">{weather.current.temp_c} degrees
          </h2>
          <h2 className="humidity">{weather.current.humidity} humidity</h2>
          <h2 className="wind">Wind speed {weather.current.wind_kph} km/h</h2>
        </div>
      </div>
    </div>
  );
}
