export const temperatureConversion = (() => {

    const convertToCelsius = (kelvin) => {
        let celcius = (kelvin - 273.15).toFixed(1);
        return celcius
    }

    const convertToFahrenheit = (kelvin) => {
        let fahrenheit = ((kelvin * 1.8) - 459.67).toFixed(1);
        return fahrenheit
    }

    return {
        convertToCelsius,
        convertToFahrenheit
    }

})();