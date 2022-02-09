const panels = document.querySelectorAll('.panel');

// create function to "open" the flex box larger with event listener
function toggleOpen() {
    this.classList.toggle('open');
}

// Create function to activate transition with even listener
function toggleActive(e) {
    // property names are different on Safari and Chrome, so we include any property with the name flex
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

// Listen for click from user to add class of click
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
// Listen for click again to add transitionend as active class
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));