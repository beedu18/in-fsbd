function isLeapYear(year) {
	// logic from MS docs
	if(year % 4 !=0) return false;
  if(year % 100 != 0) return true;
  if(year % 400 != 0) return false;
  return true;
}

let year = 2020;
while(year++ < 2030)
  console.log(`isLeapYear(${year}): ${isLeapYear(year)}`);

//***

function factorial(num) {
	if(num % 1 != 0) return null; // whole number check
  if(num < 0) return null;
  if(num <= 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(7));
console.log(factorial(0));
console.log(factorial(-5.2));

//***

function toCelcius(temp) {
	return `${temp}°F is ${(5/9)*(temp - 32)}°C`;
}
console.log(toCelcius(45));

function toFahrenheit(temp) {
	return `${temp}°C is ${(temp*9/5) + 32}°F`;
}
console.log(toFahrenheit(60));
