const sobreMi = document.getElementsByClassName('contenido');
const datos = document.getElementsByClassName('datos');
const titulos = document.getElementsByClassName('encabezado');
const habilidades = document.getElementsByClassName('skills');
const educacion = document.getElementsByClassName('educacion');
const proyectos = document.getElementsByClassName('todos');
const principal = document.getElementById('principal');
// fondo
const montañas = document.getElementsByClassName('montaña');
const arboles = document.getElementsByClassName('arbol');
const sol = document.getElementsByClassName('sol');
const aves = document.getElementsByClassName('ave');

const observador = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                for (let i = 0; i < montañas.length; i++) {
                    montañas[i].classList.add('anim');
                }
                for (let i = 0; i < arboles.length; i++) {
                    arboles[i].classList.add('anim');
                }
                entry.target.classList.add('anim');
                observador.unobserve(entry.target);
            } else {
                entry.target.classList.remove('anim');
            }
        });
    },{
        rootMargin: '-100px 0px 0px 0px',
        threshold: 0.4,
    }
)

const observadorEncabezados = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                sol[0].classList.add('anim');
                entry.target.classList.add('anim');
                observadorEncabezados.unobserve(entry.target);
            } else {
                entry.target.classList.remove('anim');
            }
        });
    },{
        rootMargin: '0px 0px -150px 0px',
        threshold: 1,
    }
)

const observadorPrincipal = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('anim');
                observadorEncabezados.unobserve(entry.target);
            } else {
                entry.target.classList.remove('anim');
            }
        });
    },{
        threshold: 0.2,
    }
)

const observadorFormacion = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                for (let i = 0; i < aves.length; i++) {
                    aves[i].classList.add('anim')
                }
                entry.target.classList.add('anim');
                observadorEncabezados.unobserve(entry.target);
            } else {
                entry.target.classList.remove('anim');
            }
        });
    },{
        rootMargin: '0px 0px -150px 0px',
        threshold: 1,
    }
)

observador.observe(sobreMi[0]);
observador.observe(datos[0]);
observador.observe(educacion[0]);
observador.observe(proyectos[0]);
observadorPrincipal.observe(principal);
for (let i = 0; i < titulos.length; i++) {
    if (i === 1) {
        observadorFormacion.observe(titulos[i]);
    }else{
        observadorEncabezados.observe(titulos[i]);
    }
}
for (let i = 0; i < habilidades.length; i++) {
    observador.observe(habilidades[i]);
}