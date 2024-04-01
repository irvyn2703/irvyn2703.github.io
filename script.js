/*const menu = document.getElementById('menu');
const opciones = document.getElementsByClassName('opciones');
let verMenu = false;

function mostrarMenu() {
    verMenu = !verMenu;
    if (verMenu === true && window.innerWidth < 650) {
        menu.innerHTML = '<i class="fa-solid fa-bars"></i>';
        for (let i = 0; i < opciones.length; i++) {
            opciones[i].style.display = 'none';
        }
    } 
    if (verMenu === false && window.innerWidth < 650) {
        menu.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        for (let i = 0; i < opciones.length; i++) {
            opciones[i].style.display = 'block';
        }
    }
}

menu.addEventListener("click", () => {
    mostrarMenu();
});
*/