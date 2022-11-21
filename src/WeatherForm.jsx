import React, { useState } from "react";

export default function WeatherForm({ OnChangeCity }) {
  const[city, setCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    OnChangeCity(city);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="City"
        onChange={(e) => setCity(e.target.value)}
      ></input>

      <button>Search</button>
    </form>
  );
}
