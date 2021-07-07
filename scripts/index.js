import initCounter from "./initCounter.js";
import initDay from "./initDay";
import generateWeatherCard from "./generateWeatherCard";
(()=>{
    
    document.getElementById("submit").addEventListener("click", function(){
        let counter;
        const userCity = document.getElementById("userCity").value;
        let weather_charts = document.querySelector('.weather-charts');
        weather_charts.innerHTML = '';

        initCounter();

        fetch('https://api.openweathermap.org/data/2.5/forecast?q='+userCity+'&units=metric&appid=ee5e6fca7948d3d060f7ae93a6118e21')
            .then(response => response.json())
            .then(data => {
                let weather = data;
                let html = '';
                
                weather_charts.innerHTML += '<div class="city">Weather in '+weather.city.name+'</div>';
                generateWeatherCard();
                weather_charts.innerHTML += html;
                
            });
    })
})();