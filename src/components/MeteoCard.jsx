import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/MeteoCard.css";


const MeteoCard = () => {

  //Meteo Data : recupération des donnés via api OpenWeatherMap
  const [MeteoData, setMeteoData] = useState();
  const [Icons, setIcons] = useState();
  const [Description, setDescription] = useState();


  useEffect(() => {
    axios
    .get("http://api.openweathermap.org/data/2.5/weather?q=brest&appid=8d94247a28fa2e4557e770ace0c98508&lang=fr&units=metric")
    .then((response) => {
      setMeteoData(response.data);
      setIcons(response.data.weather.map((elm) => (
         elm.icon
      )));
      setDescription(response.data.weather.map((elm) => (
        elm.description
     )));
    
    
    });
  }, []);

  if (!MeteoData) return [];

  return (

    <div className="CardsDisplay">
    <div className="card">

      <div className="tutu">
      <img className="weather" src={`http://openweathermap.org/img/wn/${Icons}@2x.png`} class="card-img-top" alt="..." />
      <h3>{Math.floor(MeteoData.main.temp)+"°C"}</h3>
      
      </div>
      {/* <h3 className="description">{Description}</h3> */}
      <div class="card-body">
        <h5 class="card-title">{MeteoData.name}, {Description}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">
          Card link
        </a>
        <a href="#" class="card-link">
          Another link
        </a>
      </div>
    </div>
    </div>
  );
};

export default MeteoCard;
