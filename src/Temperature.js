import React from "react";

import './styles.css';

export default class Temperature extends React.Component {
  render = () => {
    return (
        <div className="Temperature">
            <div class="float-left">
          <span class="temperature" id="temperature">
            19
          </span>
          <span class="units">
            <a href="https://" id="celsius-link">
              °C
            </a>{" "}
            |
            <a href="https://" id="fahrenheit-link">
              °F
            </a>
          </span>
        </div>
        </div>
    );
} 
}