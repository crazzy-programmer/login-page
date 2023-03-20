// Get the form element and add an event listener for the submit event
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  // Get the values of the username and password fields
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  // Check if the fields are empty
  if (username === '' || password === '') {
    alert('Please enter your username and password.');
  } else {
    // If the fields are not empty, log the values to the console
    console.log(`Username: ${username}\nPassword: ${password}`);
    // You can add more code here to submit the form data to a server or redirect the user to another page.
  }
});
