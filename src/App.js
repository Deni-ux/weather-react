import React from 'react';

import Weather from './Weather';



import './App.css';



 export default function App() {
  return (
    <div className="App">
      <div className="container">
        
         
         <Weather defaultCity="London" />
          
            
          
        
       <footer className="text-center text-light">
         This project was coded by{" "} 
         <a href="https://github.com/Deni-ux" className="text-decoration-none link-warning">Denisa Haka </a> 
          {" "}and is {" "} <a
            href="https://github.com/Deni-ux/weather-react"
            className="text-decoration-none link-warning"
            >open-sourced on GitHub</a> 
            {" "}and  <a href="https://hardcore-payne-6669fe.netlify.app/" className="text-decoration-none link-warning">hosted on Netlify</a>
        </footer>
      </div>
      </div>
    
  );
}

 

  



  


