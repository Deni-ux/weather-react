import React, {useState} from "react";

export default function WeatherTemperature(props){
    //we need to update data in each reload and/or convert units
    const[unit, setUnit]=useState("celsius");

    function convertToFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
          return (
        <div className="WeatherTemperature">
            <span className="temperature" id="temperature">
           {Math.round(props.celsius)}
          </span>
          <span className="units">
             
              °C|
            <a href="https://" onClick={convertToFahrenheit} id="fahrenheit-link">
              °F
            </a>
          </span>
        </div>
    );
    }
    else {
        let fahrenheit = (props.celsius * 9)/5 +32;
        return (<div className="WeatherTemperature">
            <span className="temperature" id="temperature">
           {Math.round(fahrenheit)}
          </span>
          <span className="units">
            <a href="https://" onClick={showCelsius} id="celsius-link">
              °C
            </a>
            |°F
            
          </span>
        </div>);
    }

  
}