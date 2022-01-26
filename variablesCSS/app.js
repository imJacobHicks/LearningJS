// Creating a node list of all inputs with the class of "controls" in our HTML
const inputs = document.querySelectorAll('.controls input') 

function handleUpdate() {
    // dataset contains all data from attributed defined in HTML with data-
    const suffix = this.dataset.sizing || ''; // "or nothing" is || ''
    // concatenating values style as a set property value with its value and a suffix (if used)
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Listening for changes made on screen
inputs.forEach(input => input.addEventListener('change', handleUpdate));
// Listening for changes made with mouse moves
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
