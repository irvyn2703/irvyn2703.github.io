const apiUrl = 'https://x8ki-letl-twmt.n7.xano.io/api:ybZg4AS_/portafolio_7ebf031092264b5a9c89d65eee775662';
const contenedorProyectos = document.getElementById('misProyectos');
const contenedorEdu = document.getElementById('contEdu');
let contProyect = '';
let contEdu = '';
let tipo = true;

document.addEventListener('DOMContentLoaded', () => {
  // Realizar la petición GET
  fetch(apiUrl)
    .then(response => {
      // Verificar si la respuesta es exitosa
      if (!response.ok) {
        throw new Error('Error en la petición: ' + response.statusText);
      }
      // Convertir la respuesta a JSON
      return response.json();
    })
    .then(data => {
      // Manejar los datos recibidos
      // console.log(data);
      for (let i = 0; i < data.length; i++) {
        // proyectos
        if (data[i].Tipo === 'Proyecto') {
          // console.log(data[i]);
          contProyect += `
          <div class="proyecto">
              <img src="./img/${data[i].Imagen}" alt="">
              <div class="contenido">
                  <div class="nombre">${data[i].Titulo}</div>
                  <div class="dependencia">${data[i].subtitulo}</div>
                  <div class="descripcion">
                      ${data[i].Descripcion}
                  </div>
                  <div class="fecha">
                      ${data[i].Fecha}
                  </div>
              </div>
          </div>
          `;
        }

        // Estudios
        if (data[i].Tipo === 'Estudio') {
          // console.log(data[i]);
          if (tipo === true) {
            contEdu += `
            <div class="bachiller">
                <div class="fecha">
                    <div>${data[i].Titulo}</div>
                    <div>${data[i].Fecha}</div>
                </div>
                <div class="insticucion">${data[i].subtitulo}</div>
                <div class="descripcion">${data[i].Descripcion}</div>
            </div>
            `;
            tipo = false;
          }else{
            contEdu += `
            <div class="universidad">
                <div class="fecha">
                    <div>${data[i].Fecha}</div>
                    <div>${data[i].Titulo}</div>
                </div>
                <div class="insticucion">${data[i].subtitulo}</div>
                <div class="descripcion">${data[i].Descripcion}</div>
            </div>
            `;
            tipo = true;
          }
        }         
      }
      contenedorEdu.innerHTML = contEdu;
      contenedorProyectos.innerHTML = contProyect;
    })
    .catch(error => {
      // Manejar los errores
      console.error('Hubo un problema con la petición:', error);
    });

});
