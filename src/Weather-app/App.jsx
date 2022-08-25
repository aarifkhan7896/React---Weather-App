import React, { useState } from 'react'
import Header from './Header'
import "./App.css"
import Card from './Card'

const App = () => {
    const [input, setInput] = useState();
    const [weather, setWeather] = useState();

  const changeHandler = (e)=>{
    setInput(e.target.value);
  }

  const clickHandler = (e)=>{
    e.preventDefault();
    
    fetch(`http://api.weatherapi.com/v1/current.json?key=ff19bff5841a489591e101607211304&q=${input}&aqi=no`)
    .then(res=>res.json())
    .then((json)=>{
        console.log(json);
        setWeather(json);
    });
  }
  return (
   <>
   <Header/>
   <div className="container">
        <form>
            <input type="text" name="weather" id="weather" placeholder='Enter location...' onChange={changeHandler} />
            <input type="submit" value="Search" onClick={clickHandler} />
        </form>
        {weather && (
            <Card name={weather.location.name} country={weather.location.country} icon={weather.current.condition.icon} temp={weather.current.temp_c} />
        )}
   </div>
   </>
  )
}

export default App