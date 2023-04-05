// Create the student object
const student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  skills: ['JavaScript', 'HTML', 'CSS'],
  country: 'USA',
  enrolled: true
};

// Store the student object in localStorage
localStorage.setItem('student', JSON.stringify(student));

// Retrieve the student object from localStorage
const storedStudent = JSON.parse(localStorage.getItem('student'));

// Log the retrieved student object to the console
console.log(storedStudent);
