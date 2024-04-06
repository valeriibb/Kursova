const { celsiusToFahrenheit } = require('./converters.js');

const celsiusInput = process.argv[2]; 
const fahrenheitValue = celsiusToFahrenheit(celsiusInput);

function fahrenheitToCelsius ( fahrenheit) {
  return fahrenheit * 2;
};

const fa = fahrenheitToCelsius(10)

console.log(`${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit ${fa}`);


