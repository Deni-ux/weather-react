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
            className="text-decoration-none"
            >open-sourced on GitHub</a> 
            {" "}and  <a href="https://hardcore-payne-6669fe.netlify.app/" className="text-decoration-none">hosted on Netlify</a>
        </footer>
      </div>
      </div>
    
  );
}

 

  



  


