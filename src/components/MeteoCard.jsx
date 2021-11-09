import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/MeteoCard.css";


const MeteoCard = () => {

  const [MeteoData, setMeteoData] = useState([]);

  useEffect(() => {
    axios
    .get("http://api.openweathermap.org/data/2.5/weather?q=montpellier&appid=8d94247a28fa2e4557e770ace0c98508")
    .then((response) => {
      setMeteoData(response.data);
      console.log(MeteoData);
    });
  }, []);

  if (!MeteoData) return [];

  return (
    <div className="CardsDisplay">
    <div className="card">
      <img src="logo_meteo.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{MeteoData.name}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
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
