// Store a default name in a variable
var userName = "Sophia";

// Find the input, button, and message paragraph in the page
var nameInput = document.getElementById("nameInput");
var button = document.getElementById("welcomeButton");
var message = document.getElementById("message");

// When the button is clicked, show a fun personalized message below it
button.addEventListener("click", function() {
  // Get the name the user typed in the input field
  var enteredName = nameInput.value;

  // Use the typed name if it exists; otherwise fall back to userName
  var displayName = enteredName ? enteredName : userName;

  // Create a fun greeting message with string concatenation
  message.textContent = "Welcome, " + displayName + "! Get ready for a great day!";
});

// Log a message in the browser console for debugging
console.log("Default user name is " + userName + ".");

