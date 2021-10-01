import React , {useState} from "react";

import FormattedDate from "./FormattedDate";

import axios from "axios";

import "./Weather.css";

export default function Weather(props){
//boolean used with a conditional rendering
 

  //create a new state with weather data which is going to be a  whole object - by default an empty one, that is going to set all the info we want
  const [weather, setWeather] = useState({loaded: false})
  //this is an object that has a key false by default
function handleResponse(response){
  
  setWeather({
    loaded: true,
    temperature:response.data.main.temp,
    humidity:response.data.main.humidity,
    wind: response.data.wind.speed,
    date: new Date(response.data.dt * 1000),
    city: response.data.name,
    description:response.data.weather[0].description,
    iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
    
  });
}

if (weather.loaded) {
   return(
        <div className="Weather">
 <form class="search-form">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                autoFocus="on"
                autoComplete="off"
                className="form-control shadow-sm"
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
             <h1>{weather.city}</h1>
          <ul>
            <li>
              <FormattedDate date={weather.date} />
              </li>
            <li className="text-capitalize">{weather.description}</li>
          </ul>
          <div className="row">
            <div className="col-6">
             
                <img
                  src={weather.iconUrl}
                  alt={weather.description}
                  className=" "
                />
                
                   <span className="temperature" id="temperature">
           {Math.round(weather.temperature)}
          </span>
          <span className="units">
            <a href="https://" id="celsius-link">
              °C
            </a>{" "}
            |
            <a href="https://" id="fahrenheit-link">
              °F
            </a>
          </span>
                 </div>  
               
                <div className="col-6">
              <ul className="ms-5">
                
                <li>Humidity: {weather.humidity}%</li>
                <li>Wind: {Math.round(weather.wind)}km/h</li>
              </ul>
            </div>
        </div>
</div>
        
    );
} else {
  const apiKey = "b2694a5d8f39bb351277f910bc5d27c4";
  
 const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);

return "Loading..";
//use a loading spinner

}

  
   
}