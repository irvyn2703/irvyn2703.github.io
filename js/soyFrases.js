const frases = [
    "Ing. Ciencias de la Computación",
    "Programador en Python",
    "Frontend",
    "Programador en JavaScript",
    "Backend",
    "Programador en Java",
    "Diseñador de Bases de datos",
    "Programador movil",
    "Irvyn Xicale Cabrera"
];

const textoCambiar = document.getElementById('queSoy');
const nombre = document.getElementById('nombrePrincipal');
const soy = document.getElementsByClassName('soy');

function animarFrase(index) {
    if (index < frases.length - 1) {
        animarTexto(frases[index], function(){
            setTimeout(function(){
                borrarTexto(frases[index], function(){
                    animarFrase(index + 1);
                });
            }, 500);
        });
    }else{
        animarTexto(frases[index], function(){
            nombre.classList.add('ocultar');
            soy[0].classList.add('aparecer');
            //console.log('fin')
        });
    }
}

function animarTexto(frase, callback) {
    let index = 0;
    const timer = setInterval(function() {
        if(index < frase.length){
            textoCambiar.textContent += frase[index];
            index++;
        } else {
            clearInterval(timer);
            if (callback) callback();
        }
    }, 100);
}

function borrarTexto(frase, callback) {
    let index = frase.length - 1;
    const timer = setInterval(function() {
        if(index >= 0){
            textoCambiar.textContent = frase.substring(0, index);
            index--;
        } else {
            clearInterval(timer);
            if (callback) callback();
        }
    }, 25);
}

animarFrase(0);
