const { celsiusToFahrenheit } = require('./converters.js');

const celsiusInput = process.argv[2]; 
const fahrenheitValue = celsiusToFahrenheit(celsiusInput);

function fahrenheitToCelsius ( fahrenheit) {
  return 50;
};


console.log(`${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit ${fahrenheitToCelsius}`);


