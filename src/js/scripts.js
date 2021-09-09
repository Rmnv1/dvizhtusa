document.addEventListener("DOMContentLoaded", function(event) { 
  // Якорные ссылки
  document.querySelectorAll('.anchor').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });

});