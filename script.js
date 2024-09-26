// Función para hacer visible la contraseña

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }