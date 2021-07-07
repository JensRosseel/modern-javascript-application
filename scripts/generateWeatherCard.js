const generateWeatherCard = () => {
    let day = 0
    for(let i = 0; i<40; i+=8){
    
        day = initDay();
        
        let insert = '<div class="weather-card"><div class="day">'+day+'</div><div class="temp">'+Math.round(weather.list[i].main.temp)+' &#176;C </div><div class="feels-like">Feels like: '+Math.round(weather.list[i].main.feels_like)+' &#176;C</div><div class="weather">'+weather.list[i].weather[0].description+'</div><div class="humidity">Humidity: '+weather.list[i].main.humidity+'%</div><div class="wind">Wind speed: '+weather.list[i].wind.speed+' m/s</div></div>';

        html += insert;
        if(counter == 7){
            counter = 1;
        }else{
            counter++;
        }
    }
}