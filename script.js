document.addEventListener('DOMContentLoaded', function() {
    const portfolioButton = document.getElementById('portfolioButton');
    const portfolioButton2 = document.getElementById('portfolioButton2');
    const portfolioButton3 = document.getElementById('portfolioButton3');

    portfolioButton.addEventListener('click', function() {
        if (this.style.backgroundColor === 'red') {
            this.style.backgroundColor = 'blue';
        } else {
            this.style.backgroundColor = 'red';
        });
}
    
    portfolioButton2.addEventListener('click', function() {
        if (this.style.backgroundColor === 'orange') {
            this.style.backgroundColor = 'blue';
        } else {
            this.style.backgroundColor = 'orange'
        });
}
    
    portfolioButton3.addEventListener('click', function() {
        if (this.style.backgroundColor === 'green') {
            this.style.backgroundColor = 'yellow';
        } else {
            this.style.backgroundColor = 'green';
        }):
}
});
