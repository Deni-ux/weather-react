import React from "react";

import WeatherIcon from "./WeatherIcon";
import "./ForecastDay.css"

export default function ForecastDay(props){
//create a day function in which we'll get the day name

    function day(){
         let date = new Date(props.data.dt*1000);
          let day = date.getDay();
         let days=["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

         
         
         return days[day];
    }
   
    return(
      
        <div className="ForecastDay"  >
         
            <div className="forecast-day">
                {day()}
                 </div> 
             
             <WeatherIcon code={props.data.weather[0].icon} size ={36}/>
             <div className="forecast-temp">
               <span className="forecast-temp-max"> {Math.round(props.data.temp.max)}°</span>  {" "}
               <span className="forecast-temp-min">{Math.round(props.data.temp.min)}°</span> 
             
             </div>
          
        </div>
    )
}