// Permite hacer scroll una vez la animación de carga haya terminado
let loadingElement = document.getElementById("loadingElement");
let body = document.querySelector("body");
let loadingCircle = document.getElementById("loadingCircle");

// Quitar scroll
body.style.overflow = "hidden";



loadingElement.addEventListener("animationstart", animationListener, false);
loadingElement.addEventListener("animationend", animationListener, false);

function animationListener(ev) {
    if (ev.type === "animationend") {
        console.log("a");
        body.style.overflow = "scroll"
        loadingCircle.style.display = "none"
    }
}

loadingElement.classList.add("fadeIn")