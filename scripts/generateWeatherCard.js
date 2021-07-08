import { initCounter } from './initCounter.js';
import { initDay } from './initDay.js';
export const generateWeatherCard = () => {
    const userCity = document.getElementById("userCity").value;
    let weather_charts = document.querySelector('.weather-charts');
    weather_charts.innerHTML = '';
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+userCity+'&units=metric&appid=ee5e6fca7948d3d060f7ae93a6118e21')
            .then(response => response.json())
            .then(data => {
                let counter = initCounter();
                let weather = data;
                let day = 0
                let html = '';
                weather_charts.innerHTML += '<div class="city">Weather in '+weather.city.name+'</div>';
                for(let i = 0; i<40; i+=8){
    
                    day = initDay(counter);
                    
                    let insert = '<div class="weather-card"><div class="day">'+day+'</div><div class="temp">'+Math.round(weather.list[i].main.temp)+' &#176;C </div><div class="feels-like">Feels like: '+Math.round(weather.list[i].main.feels_like)+' &#176;C</div><div class="weather">'+weather.list[i].weather[0].description+'</div><div class="humidity">Humidity: '+weather.list[i].main.humidity+'%</div><div class="wind">Wind speed: '+weather.list[i].wind.speed+' m/s</div></div>';
            
                    html += insert;
                    if(counter == 7){
                        counter = 1;
                    }else{
                        counter++;
                    }
                }
                weather_charts.innerHTML += html;
                
            });
    
}