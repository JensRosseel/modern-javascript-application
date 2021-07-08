import { generateWeatherCard } from "/scripts/generateWeatherCard.js";
(()=>{
    
    document.getElementById("submit").addEventListener("click", function(){
        generateWeatherCard();
    })
})();