import React from "react";

import "./styles.css";

export default class SearchEngine extends React.Component {
  render = () => {
    return (
      <div className="WeatherApp">
        <form class="search-form">
          <div class="row">
            <div class="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                autofocus="on"
                autocomplete="off"
                class="form-control shadow-sm"
              />
            </div>
            <div class="col-3">
              <input
                type="submit"
                value="Search"
                class="form-control btn btn-primary shadow-sm"
              />
            </div>
          </div>
        </form>
      </div>
    );
  };
}