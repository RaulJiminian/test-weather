import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [zipcode, setZipcode] = useState("");
  const [weather, setWeather] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );
    setWeather(resp.data);
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <label htmlFor="zipcode">Zip Code</label>
        <input
          type="text"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
          id="zipcode"
        />
        <button type="submit">Search Weather</button>
      </form>
      <div>
        {weather.name ? (
          <>
            <h2>{weather.name}</h2>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default App;
