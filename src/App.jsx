import { useState } from 'react'
import './App.css'
import WeatherItem from './components/WeatherItem'
import SearchItem from './components/SearchItem'

function App() {
  const [locationName, setLocationName] = useState("")
  const [weatherData, setWeatherData] = useState("")
  const apiKey = "";

  const apiRequest = (name) => {
    fetch (`http://api.openweathermap.org/geo/1.0/direct?q=${name}&appid=${apiKey}`)
    .then((res) => res.json())
    .then((data) => {
            setLocationName("Location not found");
      if(data.length !== 0){
      setLocationName(data[0].name)
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${apiKey}&units=metric`
      )
      .then((res) => res.json())
      .then((data) => {
        if(data.cod === 200){
          console.log(data)
          setWeatherData(data);
        }
      })
      return
      }

    })
  }

  return (
    <>
      <SearchItem 
        apiRequest={apiRequest} 
      />
      <WeatherItem weatherData={weatherData} locationName ={locationName}/>
    </>
  );
}

export default App
