import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}, {props.data.country}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
              </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
          <div className="row mt-4">
            <div className="col text-center">  
             
             <WeatherIcon code={props.data.icon} size={64} />
             </div>
               <div className="col"> 
            <WeatherTemperature celsius={Math.round(props.data.temperature)} /> 
                   
               </div>
                <div className="col-6">
              <ul className="ms-5">
                <li>Feels like: {Math.round(props.data.feelsLike)}°C</li>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {Math.round(props.data.wind)}km/h</li>
                
              </ul>
            </div>
        </div>
</div>
  
      
    );
}