// Wait for the HTML document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the button element by its ID
    const colorButton = document.getElementById('colorButton');

    // Add an event listener to the button for the 'click' event
    colorButton.addEventListener('click', function() {
        // Change the button's background color when clicked
        if (this.style.backgroundColor === 'red') {
            this.style.backgroundColor = 'blue';
        } else {
            this.style.backgroundColor = 'red';
        }
    });
});