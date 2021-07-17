require('./styles.scss');
import { configApi } from "./config";
import { helperfunction } from "./helperFunctions";
import { temperatureConversion } from "./temperatureConversion";


const submitButton = document.querySelector('#submitButton');
const cityInput = document.querySelector('input');
const forecastDiv = document.querySelector('#forecastDiv');

// Live Validity Check for Input. Only accepts alphabetic characters and spaces
cityInput.addEventListener('input', function() {
    if(cityInput.validity.patternMismatch || cityInput.validity.valueMissing) {
        cityInput.classList.add('invalid');
    }
    else {
        cityInput.classList.remove('invalid');
    }
});

// Submit Button - Prevent Default
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    if(cityInput.validity.valueMissing) {
        cityInput.classList.add('invalid');
    }
    else {
        getApiResponseByCity(cityInput.value);
        cityInput.value = '';
    }
    
})

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
            tempMin: `${parsedJson.main.temp_min}`,
            tempMax: `${parsedJson.main.temp_max}`
        };
        let weather = {
            description: `${parsedJson.weather[0].description}`
        };
        populateForecastDiv(temperatures, weather, parsedJson.name);
    }
}

// Populate Div with Forecast
const populateForecastDiv = (temperatures, weather, nameOfCity) => {

    helperfunction.removeChildNodes(forecastDiv);

    // Give user option to choose celsius or fahrenheit
    let chooseUnitsDiv = document.createElement('div');
    chooseUnitsDiv.id = 'chooseUnitsDiv';
    let celsiusOption = document.createElement('p');
    celsiusOption.innerText = 'ºC';
    let fahrenheitOption = document.createElement('p');
    fahrenheitOption.innerText = 'ºF';
    helperfunction.appendMultipleNodesToParent(chooseUnitsDiv, celsiusOption, fahrenheitOption);
    forecastDiv.appendChild(chooseUnitsDiv);

    // Create Div that will contain all the properties of asked Div
    let cityCard = document.createElement('div');
    cityCard.id = 'cityCard';
    forecastDiv.appendChild(cityCard);

    // Creates Div and h2 element with city name i.e: 'Barcelona'
    let cityDiv = document.createElement('div');
    cityDiv.id = 'city';
    let cityName = document.createElement('h2');
    cityName.innerText = nameOfCity;
    cityDiv.appendChild(cityName);
    cityCard.appendChild(cityDiv);

    // Creates a Div and p element with description i.e: 'Clear skies'
    let weatherDescription = document.createElement('p');
    weatherDescription.innerText = weather.description;
    weatherDescription.id = 'description';
    cityCard.appendChild(weatherDescription);

    // Creates a Div and p element with current temperature i.e: '24ºC'
    let currentTemperatureP = document.createElement('p');
    let currentCelcius = temperatureConversion.convertToCelsius(temperatures.temp);
    currentTemperatureP.innerText = currentCelcius;
    currentTemperatureP.id = 'temperature';
    currentTemperatureP.classList.add('celcius');
    cityCard.appendChild(currentTemperatureP);

    // Creates a Div and p element with min temperature i.e: '20ºC'
    let minTemperatureP = document.createElement('p');
    let minCelcius = temperatureConversion.convertToCelsius(temperatures.tempMin);
    minTemperatureP.innerText = `Min: ${minCelcius}`;
    minTemperatureP.id = 'minimum';
    minTemperatureP.classList.add('celcius');
    cityCard.appendChild(minTemperatureP);

    // Creates a Div and p element with max temperature i.e: '30ºC'
    let maxTemperatureP = document.createElement('p');
    let maxCelcius = temperatureConversion.convertToCelsius(temperatures.tempMax);
    maxTemperatureP.innerText = `Max: ${maxCelcius}`;
    maxTemperatureP.id = 'maximum';
    maxTemperatureP.classList.add('celcius');
    cityCard.appendChild(maxTemperatureP);

}