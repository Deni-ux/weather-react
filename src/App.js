import React from 'react';

import Weather from './Weather';



import './App.css';



 export default function App() {
  return (
    <div className="App">
      <div className="container">
        
         
         <Weather defaultCity="London" />
          
            
          
        
       <footer>
         This project was coded by{" "} 
         <a href="https://github.com/Deni-ux" className="text-decoration-none">Denisa Haka </a> 
          {" "}and is {" "} <a
            href="https://github.com/Deni-ux/weather-react"
            className="text-decoration-none opensource "
            >open-sourced on GitHub</a>
        </footer>
      </div>
      </div>
    
  );
}

 

  



  


