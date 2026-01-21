document.addEventListener('DOMContentLoaded', function() {
  const portfolioButton = document.getElementById('portfolioButton');
  const portfolioButton2 = document.getElementById('portfolioButton2');
  const portfolioButton3 = document.getElementById('portfolioButton3');

  if (portfolioButton) {
    portfolioButton.addEventListener('click', function() {
      this.style.backgroundColor = (this.style.backgroundColor === 'red') ? 'blue' : 'red';
    });
  }

  if (portfolioButton2) {
    portfolioButton2.addEventListener('click', function() {
      this.style.backgroundColor = (this.style.backgroundColor === 'orange') ? 'purple' : 'orange';
    });
  }

  if (portfolioButton3) {
    portfolioButton3.addEventListener('click', function() {
      this.style.backgroundColor = (this.style.backgroundColor === 'green') ? 'yellow' : 'green';
    });
  }
});
