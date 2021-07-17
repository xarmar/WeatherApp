export const temperatureConversion = (() => {

    const convertToCelsius = (kelvin) => {
        let celcius = (kelvin - 273.15).toFixed(1);
        return celcius
    }

    const convertToFahrenheit = (celcius) => {
        let fahrenheit = ((celcius * 1.8) + 32).toFixed(1);
        return fahrenheit
    }

    return {
        convertToCelsius,
        convertToFahrenheit
    }

})();