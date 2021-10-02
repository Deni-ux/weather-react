import React , {useState} from "react";


import WeatherInfo from "./WeatherInfo";

import axios from "axios";

import "./Weather.css";

export default function Weather(props){
  //create a new state with weather data which is going to be a  whole object - by default an empty one, that is going to set all the info we want
  const [weather, setWeather] = useState({loaded: false})
  //this is an object that has a key false by default

  const [city, setCity] =useState(props.defaultCity);
function handleResponse(response){
  
  setWeather({
    loaded: true,
    temperature:response.data.main.temp,
    humidity:response.data.main.humidity,
    wind: response.data.wind.speed,
    date: new Date(response.data.dt * 1000),
    city: response.data.name,
    description:response.data.weather[0].description,
    icon:response.data.weather[0].icon
    
  });
}

function search(){
  //city
   const apiKey = "b2694a5d8f39bb351277f910bc5d27c4";
  
 const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event){
  event.preventDefault();
  //search for a city using api call
  search();
}

//store the value of the input in a state
function updateCity(event){
  setCity(event.target.value);
}


if (weather.loaded) {
   return(
        <div className="Weather">
 <form className="search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                autoFocus="on"
                autoComplete="off"
                className="form-control shadow-sm"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-primary shadow-sm"
              />
            </div>
          </div>
        </form> 

        <WeatherInfo data = {weather} />
        
          
</div>
        
    );
} else {
 
search();
return "Loading..";
//use a loading spinner

}

  
   
}