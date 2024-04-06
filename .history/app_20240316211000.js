const { celsiusToFahrenheit, fahrenheitToCelsius } = require('./converters.js');

const celsiusInput = process.argv[2]; 
const fahrenheitValue = celsiusToFahrenheit(celsiusInput);

function fahrenheitToCelsius ( fahrenheit) {
  return fahrenheit * 2;
};

const fa = fahrenheitToCelsius(celsiusInput)

console.log(`${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit ${fa}`);


