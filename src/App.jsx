import { useState } from 'react'
import './App.css'

function App() {
  const [locationName, setLocationName] = useState("")
  const [coordinates, setCoordinates] = useState({})
  const [weatherData, setWeatherData] = useState([])
  const apiKey = "21005c691121a25e5407d92ff66a0f2e";

  const apiRequest = (name) => {
    fetch (`http://api.openweathermap.org/geo/1.0/direct?q=${name}&appid=${apiKey}`)
    .then((res) => res.json())
    .then((data) => {
      setCoordinates({latitude: data[0].lat, longitude: data[0].lon})
    })
  }

  return (
    <>
      <header>
        <p>Stormy Weather</p>
        <input
          type="text"
          placeholder="enter name or Zip code"
          id=""
          onChange={(e) => {
            setLocationName(e.target.value)
          }}
        />
        <button onClick={() => apiRequest(locationName)}>Search</button>
      </header>
      <main>
        <h2>Location Name</h2>
        <div>
          <h3>Weather Now</h3>
          <p>Temperature</p>
        </div>
      </main>
    </>
  );
}

export default App
