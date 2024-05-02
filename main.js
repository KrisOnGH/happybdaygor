// Add // Get the text field element
const textField = document.getElementById('text-field');

// Create an array of the two strings to alternate between
const strings = ['( •̀ ω •́ )✧', '✧( •̀ ω •́ )'];

// Set the initial string
textField.textContent = strings[0];

// Create a function to change the text field every second
function changeText() {
  // Get the current string
  const currentString = textField.textContent;

  // Find the index of the current string in the array
  const currentIndex = strings.indexOf(currentString);

  // Get the next string in the array
  const nextIndex = (currentIndex + 1) % strings.length;
  const nextString = strings[nextIndex];

  // Set the text field to the next string
  textField.textContent = nextString;
}

// Call the changeText function every second
setInterval(changeText, 1000);
