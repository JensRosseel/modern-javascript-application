import { generateWeatherCard } from "./generateWeatherCard.js";
(()=>{
    
    document.getElementById("submit").addEventListener("click", function(){
        generateWeatherCard();
    })
})();