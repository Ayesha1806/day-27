// Store the data
localStorage.setItem('firstName', 'John');
localStorage.setItem('lastName', 'Doe');
localStorage.setItem('age', '25');
localStorage.setItem('country', 'USA');
localStorage.setItem('city', 'New York');

// Retrieve the data
const firstName = localStorage.getItem('firstName');
const lastName = localStorage.getItem('lastName');
const age = localStorage.getItem('age');
const country = localStorage.getItem('country');
const city = localStorage.getItem('city');

// Log the retrieved data to the console
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(country);
console.log(city);
