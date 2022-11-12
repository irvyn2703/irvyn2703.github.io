let animado = document.querySelectorAll(".animado");
function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animado.length; i++ ) {
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado - 500 < scrollTop) {
            animado[i].style.opacity = 1;
        }
    }
}

window.addEventListener('scroll', mostrarScroll);
window.addEventListener('load', mostrarScroll);


/* equipo */
let Bapex = document.getElementById('apexBoton');
let Blol = document.getElementById('lolBoton');
let Bfifa = document.getElementById('fifaBoton');
let Bover = document.getElementById('overBoton');
let tapex = document.getElementById('carouselExampleCaptions');
let tlol = document.getElementById('carouselExampleCaptions2');
let tfifa = document.getElementById('carouselExampleCaptions3');
let tover = document.getElementById('carouselExampleCaptions4');
let fondo = document.querySelectorAll(".imgFondo");

Bapex.addEventListener('click', () => {
    tapex.classList.remove('d-none');
    tlol.classList.add('d-none');
    tfifa.classList.add('d-none');
    tover.classList.add('d-none');
    fondo[0].classList.remove('d-none');
    fondo[1].classList.add('d-none');
    fondo[2].classList.add('d-none');
    fondo[3].classList.add('d-none');
});

Blol.addEventListener('click', () => {
    tapex.classList.add('d-none');
    tlol.classList.remove('d-none');
    tfifa.classList.add('d-none');
    tover.classList.add('d-none');
    fondo[0].classList.add('d-none');
    fondo[1].classList.remove('d-none');
    fondo[2].classList.add('d-none');
    fondo[3].classList.add('d-none');
});

Bfifa.addEventListener('click', () => {
    tapex.classList.add('d-none');
    tlol.classList.add('d-none');
    tfifa.classList.remove('d-none');
    tover.classList.add('d-none');
    fondo[0].classList.add('d-none');
    fondo[1].classList.add('d-none');
    fondo[2].classList.remove('d-none');
    fondo[3].classList.add('d-none');
});

Bover.addEventListener('click', () => {
    tapex.classList.add('d-none');
    tlol.classList.add('d-none');
    tfifa.classList.add('d-none');
    tover.classList.remove('d-none');
    fondo[0].classList.add('d-none');
    fondo[1].classList.add('d-none');
    fondo[2].classList.add('d-none');
    fondo[3].classList.remove('d-none');
});