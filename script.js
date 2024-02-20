const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberCheckbox = document.getElementById('checkbox');
const existingButton = document.getElementById('existing');

// On page load, check if there are stored login details
if (localStorage.getItem('username') && localStorage.getItem('password')) {
  // Populate the input fields with the stored login details

  // Show the "Login as existing user" button
	existingButton.style.visibility = "visible"
}


// Add an event listener to the form on submit
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the form from submitting

  const username = usernameInput.value;
  const password = passwordInput.value;

  // Check if the "remember me" checkbox is checked
  if (rememberCheckbox.checked) {
    // Store the username and password in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  } else {
    // Remove the stored username and password from local storage
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  // TODO: Add your login logic here
	alert(`Logged in as ${usernameInput.value}`)

  // Show the "Login as existing user" button
	existingButton.style.display = "block"
});