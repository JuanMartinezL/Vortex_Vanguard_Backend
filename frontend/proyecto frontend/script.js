// Validación del formulario
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const loginButton = document.querySelector("button");

    // Función para mostrar mensajes de error
    function showError(input, message) {
        const errorElement = document.createElement("p");
        errorElement.classList.add("error-message");
        errorElement.style.color = "red";
        errorElement.innerText = message;
        input.parentNode.insertBefore(errorElement, input.nextSibling);
    }

    // Elimina mensajes de error previos
    function clearErrors() {
        const errors = document.querySelectorAll(".error-message");
        errors.forEach(error => error.remove());
    }

    // Validación de email con expresión regular
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Evento de envío del formulario
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Previene el envío por defecto del formulario
        clearErrors(); // Limpiar mensajes de error

        let valid = true;

        // Validar que el campo de correo electrónico no esté vacío y tenga formato correcto
        if (emailInput.value === "") {
            showError(emailInput, "El correo electrónico es obligatorio.");
            valid = false;
        } else if (!validateEmail(emailInput.value)) {
            showError(emailInput, "Introduce un correo electrónico válido.");
            valid = false;
        }

        // Validar que el campo de contraseña no esté vacío
        if (passwordInput.value === "") {
            showError(passwordInput, "La contraseña es obligatoria.");
            valid = false;
        }

        // Si todo es válido, puedes enviar el formulario
        if (valid) {
            // Aquí puedes añadir el código para enviar los datos al servidor
            alert("Formulario enviado correctamente.");
        }
    });
});