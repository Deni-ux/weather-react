import React from "react";
import FormattedDate from "./FormattedDate";
export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
              </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
          <div className="row">
            <div className="col-6">
             
                <img
                  src={props.data.iconUrl}
                  alt={props.data.description}
                  className=" "
                />
                
                   <span className="temperature" id="temperature">
           {Math.round(props.data.temperature)}
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
                
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {Math.round(props.data.wind)}km/h</li>
              </ul>
            </div>
        </div>
</div>
  
      
    );
}