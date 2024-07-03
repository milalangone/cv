// Muestra un mensaje de bienvenida en la consola
console.log("Bienvenido a mi CV en línea");

// Ejemplo de interactividad: mostrar una alerta al hacer clic en un botón
document.addEventListener("DOMContentLoaded", function() {

    const Button_Home = document.getElementById("Button_Home");
    const Button_Projects = document.getElementById("Button_Projects");
    const Button_Experience = document.getElementById("Button_Experience");
    const Button_Education = document.getElementById("Button_Education");
    const Button_Contact = document.getElementById("Button_Contact");

    const homeSection = document.getElementById("home");
    const projectsSection = document.getElementById("projects");
    const experienceSection = document.getElementById("experience");
    const educationSection = document.getElementById("education");
    const contactSection = document.getElementById("contact");

    Button_Home.addEventListener("click", function() {
        toggleSection(homeSection);
    });

    Button_Projects.addEventListener("click", function() {
        toggleSection(projectsSection);
    });

    Button_Experience.addEventListener("click", function() {
        toggleSection(experienceSection);
    });
    Button_Education.addEventListener("click", function() {
        toggleSection(educationSection);
    });

    Button_Contact.addEventListener("click", function() {
        toggleSection(contactSection);
    });

    function toggleSection(section) {
        // Oculta todas las secciones
        const allSections = document.querySelectorAll(".cv-section");
        allSections.forEach(sec => sec.classList.remove("show"));

        // Muestra la sección específica
        section.classList.add("show");
    }
});
