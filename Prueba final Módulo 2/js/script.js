let primeraImagen = document.querySelector('.interactiva');
let segundaImagen = document.querySelector('.interactiva')

function pasarImagen(segundaImagen) {
    primeraImagen.src = segundaImagen;
}

function regresarImagen(primeraImagen) {
    segundaImagen.src = primeraImagen;
}