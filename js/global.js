// Function to detect touch support
function isTouchDevice() {
  return ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
}

// Get the HTML element you want to modify (e.g., the <body> element)
const targetElement = document.getElementById('touch-detector'); // Or document.getElementById('yourElementId');

// Check if the device is touch-enabled
if (isTouchDevice()) {
  // Add the 'touch-device' class to the target element
  targetElement.classList.add('touch');
}