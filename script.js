(()=>{
    document.getElementById("submit").addEventListener("click", function(){
        let counter;
        const userCity = document.getElementById("userCity").value;
        let weather_charts = document.querySelector('.weather-charts');
        weather_charts.innerHTML = '';

        const initCounter = () => {
            let date = new Date();
            counter = date.getDay();
        }

        const initDay = () => {
            switch(counter){
                case 1:
                    return 'Monday';
                case 2:
                    return 'Tuesday';
                case 3:
                    return 'Wednesday';
                case 4:
                    return'Thursday';
                case 5:
                    return 'Friday';
                case 6:
                    return 'Saturday';
                case 7:
                    return 'Sunday';
            }
        }

        initCounter();

        fetch('https://api.openweathermap.org/data/2.5/forecast?q='+userCity+'&units=metric&appid=ee5e6fca7948d3d060f7ae93a6118e21')
            .then(response => response.json())
            .then(data => {
                let day = 0
                let weather = data;
                let html = '';
                
                const generateWeatherCard = () => {
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

                weather_charts.innerHTML += '<div class="city">Weather in '+weather.city.name+'</div>';
                generateWeatherCard();
                weather_charts.innerHTML += html;
                
            });
    })
})();