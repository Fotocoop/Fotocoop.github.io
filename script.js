// Función para hacer visible la contraseña

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }

  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length)   
% slides.length;
    slides[currentSlide].classList.add('active');   

  }

  // Mostrar la siguiente imagen cada 3 segundos (ajusta el tiempo según necesites)
  setInterval(function() {
    showSlide(currentSlide + 1);
  }, 3000);