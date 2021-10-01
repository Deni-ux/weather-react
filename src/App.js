import React from 'react';


import SearchEngine from './SearchEngine';
import Temperature from './Temperature';
import './styles.css';


 export default function App() {
  return (
    <div className="WeatherApp">
      <div class="container">
        <div class="weather-app">
          <SearchEngine />
          <h1>Sydney NSW, Australia</h1>
          <ul>
            <li>Wednesday 22:00</li>
            <li>Partly Cloudy</li>
          </ul>
          <div class="row">
            <div class="col">
             
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Cloudy icon"
                  class="weather-icon"
                /> </div>
                <div class="col">
                   <Temperature />
                </div>
        
            <div class="col-6">
              <ul>
                <li>Precipitation: 0%</li>
                <li>Humidity: 77%</li>
                <li>Wind: 8 km/h</li>
              </ul>
            </div>
          </div>
        </div>
       <p class="text-center">
          <a
            href="https://github.com/Deni-ux/weather-react"
            class="text-decoration-none opensource "
            >Open-source</a> code 
          by <a href="https://github.com/Deni-ux" class="text-decoration-none">Denisa Haka </a> 
        </p>
      </div>
      
    </div>
  );
}

 

  



  


