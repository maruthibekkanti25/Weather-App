const apiKey = "d17d1b17d5afef637a8f575f9388debf";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
var weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404 || response.status == 400 ){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data = (await response.json());
        console.log(data);
        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) +"°C";
        document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
        document.querySelector(".wind").innerHTML= data.wind.speed + "Kmph";
        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "res/images/clouds.png";
        }
        else if(data.weather[0].main == "Clear") {
            weatherIcon.src = "res/images/clear.png";
        }
        else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "res/images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "res/images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "res/images/mist.png";
        }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";

    }
}
searchButton.addEventListener("click", function(){
    checkWeather(searchBox.value);
});