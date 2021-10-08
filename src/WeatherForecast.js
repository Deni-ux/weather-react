import React, {useState, useEffect} from "react";

import ForecastDay from "./ForecastDay";

import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast(props){
    //coordinates - property from the outside world-
    //display forecast needs useStates: if we have the data loaded show the forecast if/else
    //each component has to return sth 
    let [loaded, setLoaded ] = useState(false);
    let [forecast, setForecast]=useState(null); //to access response data

    
    useEffect(()=> {
      setLoaded(false);
    }, [props.coordinates]);
    //if the props.coordinates []change 


    function handleResponse (response){
        setForecast(response.data.daily);
        setLoaded(true);
     }
  //create a new component to maintain each day data ForecastDay
  //to show dat for 5 days need to loop - map()
    if (loaded) {

      return (
        <div className="WeatherForecast">
          
            <div className ="row">

              {forecast.map(function(dailyForecast, index){

                if (index < 6) {
                   return( 
                           <div className ="col" key={index}>  
                             <ForecastDay data={dailyForecast} />

                              </div>

                );
                } else {
                  return null;
                }
               
              })}
            
            </div>
        </div>
    );
    } else { 

    let apiKey="b2694a5d8f39bb351277f910bc5d27c4";
    
    let longitude = props.coordinates.lon;
    let latitude =props.coordinates.lat;

    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;    
           
        
    }

  

    
}
