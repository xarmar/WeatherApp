require('./styles.scss');
import { configApi } from "./config";

// Get API response
const getApiResponseByCity = async (city) => {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${configApi.apiKey}`);
        let parsedJson = await response.json();
        getWeatherDetails(parsedJson);
    }
    catch(error) {
        console.log(error);
    }
}

// Get weather details from parsedJson
const getWeatherDetails = (parsedJson) => {
    if(parsedJson.main !== undefined && parsedJson.weather !== undefined) {
        let temperatures = {
            temp: `${parsedJson.main.temp}`,
            temp_min: `${parsedJson.main.temp_min}`,
            temp_max: `${parsedJson.main.temp_max}`
        };
        let weather = {
            status: `${parsedJson.weather[0].main}`,
            description: `${parsedJson.weather[0].description}`
        };
        console.log(temperatures);
        console.log(weather);
    }
}

const submitButton = document.querySelector('#submitButton');
const cityInput = document.querySelector('input');

// Live Validity Check for Input. Only accepts alphabetic characters
cityInput.addEventListener('input', function() {
    if(cityInput.validity.patternMismatch) {
        cityInput.classList.add('invalid');
    }
    else {
        cityInput.classList.remove('invalid');
    }
});

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    getApiResponseByCity(cityInput.value);
    
})