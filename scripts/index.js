import { initCounter } from "/initCounter.js";
import { generateWeatherCard } from "/generateWeatherCard";
(()=>{
    
    document.getElementById("submit").addEventListener("click", function(){
        let weather_charts = document.querySelector('.weather-charts');
        weather_charts.innerHTML = '';

        initCounter();

        generateWeatherCard();
    })
})();