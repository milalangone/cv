// Muestra un mensaje de bienvenida en la consola
console.log("¡Bienvenido a mi CV en línea!");

// Ejemplo de interactividad: mostrar una alerta al hacer clic en un botón
document.addEventListener("DOMContentLoaded", function() {
    const button = document.createElement("button");
    button.textContent = "Haz clic aquí para más información";
    document.getElementById("boton-container").appendChild(button);

    button.addEventListener("click", function() {
        alert("¡Gracias por visitar mi CV!");
    });
});
