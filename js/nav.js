const menu = document.getElementById('menu');
const opciones = document.getElementsByClassName('opciones');
const nav = document.getElementById('navegacion')
let verMenu = true;

function mostrarMenu() {
    verMenu = !verMenu;
    if (verMenu === true && window.innerWidth < 650) {
        // menu Comprimido
        menu.innerHTML = '<i class="fa-solid fa-bars"></i>';
        for (let i = 0; i < opciones.length; i++) {
            opciones[i].classList.add('ocultar');
            opciones[i].style.animationDelay = `${i * 0.1}s`;
            opciones[i].style.transform = `translateX(0)`;
            nav.classList.add('ocultar');
        }
    } 
    if (verMenu === false && window.innerWidth < 650) {
        // menu Completo
        menu.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        for (let i = 0; i < opciones.length; i++) {
            opciones[i].style.animationDelay = `${i * 0.1}s`;
            opciones[i].classList.remove('ocultar');
            opciones[i].style.transform = `translateX(-50vw)`;
            nav.classList.remove('ocultar');
        }
    }
}

menu.addEventListener("click", () => {
    mostrarMenu();
});
