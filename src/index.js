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

// Get API response - Use Async Await
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
            main: `${parsedJson.weather[0].main}`,
            description: `${parsedJson.weather[0].description}`,
            iconCode: `${parsedJson.weather[0].icon}`
        };
        populateForecastDiv(temperatures, weather, parsedJson.name);
        changeBodyBackgroundImage(weather);
    }
    else {
        cityInput.classList.add('invalid');
    }
}

// Populate Div with Forecast
const populateForecastDiv = (temperatures, weather, nameOfCity) => {

    // Remove Previous Child Nodes of Div
    helperfunction.removeChildNodes(forecastDiv);

    // Give user option to choose celsius or fahrenheit
    let chooseUnitsDiv = document.createElement('div');
    chooseUnitsDiv.id = 'chooseUnitsDiv';
    let celsiusOption = document.createElement('p');
    celsiusOption.innerText = 'ºC';
    celsiusOption.id = 'showInCelsius';
    celsiusOption.classList.add('chosenOption');
    let fahrenheitOption = document.createElement('p');
    fahrenheitOption.innerText = 'ºF';
    fahrenheitOption.id = 'showInFahrenheit';

    // Add click listeners for both options
    celsiusOption.addEventListener('click', function() {
        if(!celsiusOption.classList.contains('chosenOption')) {
            celsiusOption.classList.toggle('chosenOption');
            fahrenheitOption.classList.toggle('chosenOption');
            let temperature = document.querySelector('#temperature');
            let minimum = document.querySelector('#minimum');
            let maximum = document.querySelector('#maximum');

            // Populate with correct temperature
            temperature.innerText = temperatureConversion.convertToCelsius(temperatures.temp);
            minimum.innerText = `Min: ${temperatureConversion.convertToCelsius(temperatures.tempMin)}`;
            maximum.innerText = `Max: ${temperatureConversion.convertToCelsius(temperatures.tempMax)}`;
            
            // Give correct suffix
            temperature.classList.add('celsius');
            temperature.classList.remove('fahrenheit');
            minimum.classList.add('celsius');
            minimum.classList.remove('fahrenheit');
            maximum.classList.add('celsius');
            maximum.classList.remove('fahrenheit');
        }
    });

    fahrenheitOption.addEventListener('click', function() {
        if(!fahrenheitOption.classList.contains('chosenOption')) {
            fahrenheitOption.classList.toggle('chosenOption');
            celsiusOption.classList.toggle('chosenOption');
            let temperature = document.querySelector('#temperature');
            let minimum = document.querySelector('#minimum');
            let maximum = document.querySelector('#maximum');

            // Populate with correct temperature
            temperature.innerText = temperatureConversion.convertToFahrenheit(temperatures.temp);
            minimum.innerText = `Min: ${temperatureConversion.convertToFahrenheit(temperatures.tempMin)}`;
            maximum.innerText = `Max: ${temperatureConversion.convertToFahrenheit(temperatures.tempMax)}`;
            
            // Give correct suffix
            temperature.classList.add('fahrenheit');
            temperature.classList.remove('celsius');
            minimum.classList.add('fahrenheit');
            minimum.classList.remove('celsius');
            maximum.classList.add('fahrenheit');
            maximum.classList.remove('celsius');
        }
    });


    helperfunction.appendMultipleNodesToParent(chooseUnitsDiv, celsiusOption, fahrenheitOption);
    forecastDiv.appendChild(chooseUnitsDiv);

    // Create 'cityCard' Div that will contain all the properties of asked Div
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
    let weatherDescriptionDiv = document.createElement('div');
    weatherDescriptionDiv.id = 'weatherDescriptionDiv';
    let weatherDescription = document.createElement('p');
    weatherDescription.innerText = weather.description;
    weatherDescription.id = 'description';
    let weatherIcon = document.createElement('img');
    weatherIcon.src = `http://openweathermap.org/img/w/${weather.iconCode}.png`;
    helperfunction.appendMultipleNodesToParent(weatherDescriptionDiv, weatherDescription, weatherIcon);
    cityCard.appendChild(weatherDescriptionDiv);

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

// Set Backgroud Image based on Weather
const changeBodyBackgroundImage = (weather) => {

        // Change Backgroud Image Based On main weather
        if(weather.main === 'Clear') {
            document.body.classList.remove(...document.body.classList);
            document.body.classList.add('clear');
        }
        else if (weather.main === 'Clouds') {
            document.body.classList.remove(...document.body.classList);
            document.body.classList.add('clouds');
        }
        else if (weather.main === 'Rain') {
            document.body.classList.remove(...document.body.classList);
            document.body.classList.add('rain');
        }
        else if (weather.main === 'Mist') {
            document.body.classList.remove(...document.body.classList);
            document.body.classList.add('mist');
        }
        else {
            document.body.classList.remove(...document.body.classList);
        }
}