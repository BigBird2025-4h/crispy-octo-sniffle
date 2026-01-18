document.addEventListener('DOMContentLoaded', function() {
    const colorButton = document.getElementById('colorButton');

    colorButton.addEventListener('click', function() {
        // We check the inline style. If it's red, turn it blue; otherwise, turn it red.
        if (this.style.backgroundColor === 'red') {
            this.style.backgroundColor = 'blue';
        } else {
            this.style.backgroundColor = 'red';
        }
    });
});
