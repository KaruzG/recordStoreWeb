// Permite hacer scroll una vez la animación de carga haya terminado
let loadingElement = document.getElementById("loadingElement");
let body = document.querySelector("body");

// Quitar scroll
body.style.overflow = "hidden";



loadingElement.addEventListener("animationstart", animationListener, false);
loadingElement.addEventListener("animationend", animationListener, false);

function animationListener(ev) {
    if (ev.type === "animationend") {
        body.style.overflow = "scroll"
    }
}

loadingElement.classList.add("fadeIn")