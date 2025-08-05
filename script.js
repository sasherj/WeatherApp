
const apiKey = "d02ddcf274d281c0ea607087430e0593";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();


    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }
    else {

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + " °C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "Images/cloudy.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "Images/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "Images/fog.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "Images/heavy-rain.png"
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "Images/snow.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "Images/sun.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "Images/fog.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "Images/fog.png"
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
searchBtn.addEventListener("click", () => {

    checkWeather(searchBox.value);

})
