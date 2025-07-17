import { useState } from "react";

const useEducationAndProjects = () => {
  const staticData = [
    {
      Tipo: "Estudio",
      Titulo: "Bachiller",
      subtitulo:
        "Centro de Estudios Tecnológicos industrial y de servicios No.67",
      Descripcion: "Egresado como Técnico en Programación.",
      Imagen: "",
      Fecha: "2015 - 2018",
    },
    {
      Tipo: "Estudio",
      Titulo: "Universidad",
      subtitulo: "Benemérita Universidad Autónoma de Puebla",
      Descripcion: "Licenciatura en Ingeniería en Ciencias de la Computación.",
      Imagen:
        "https://imgs.search.brave.com/lLDN91on1iKNyBh54BNAkmZ10EP9lsy8pe8iHokszjE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzM5LzEvYnVhcC1i/ZW5lbWVyaXRhLXVu/aXZlcnNpZGFkLWF1/dG9ub21hLWRlLXB1/ZWJsYS1sb2dvLXBu/Z19zZWVrbG9nby0z/OTc2NTcucG5nP3Y9/MTk1NzkxMzIzMDU3/NDA5MDg0MA",
      Fecha: "2019 - 2025",
    },
    {
      Tipo: "Proyecto",
      Titulo: "Desarrollo Frontend",
      subtitulo: "Finloop",
      Descripcion:
        "Fue mi primer acercamiento al desarrollo profesional, donde tuve la oportunidad de poner en práctica mis conocimientos adquiridos en la universidad y desarrollar nuevas habilidades clave para el entorno laboral. Mis responsabilidades fueron desarrollar interfaces, crear componentes reutilizables, usar control de versiones (Git), consumir endpoints, entre otras.",
      Imagen: "",
      Fecha: "React, React admin",
    },
    {
      Tipo: "Proyecto",
      Titulo: "Checkmark",
      subtitulo: "Desarrollo y publicación de una app",
      Descripcion:
        "Desarrollo de las primeras versiones de la app incluyendo desarrollo de interfaz de usuario y servicios necesarios en la API.",
      Imagen: "loboHack.jpg",
      Fecha: "React native, php",
    },
    {
      Tipo: "Proyecto",
      Titulo: "Freinet",
      subtitulo: "Desarrollo de app movil",
      Descripcion:
        "Desarrollo app movil para la gestion de la asistencia de los alumnos.",
      Imagen: "loboHack.jpg",
      Fecha: "React native, supabase",
    },
    {
      Tipo: "Proyecto",
      Titulo: "Bio Collector",
      subtitulo: "Facultad de Biología BUAP",
      Descripcion:
        "Desarrollo de una aplicación móvil para la recolección de datos en campo. Mis responsabilidades fueron crear componentes reutilizables, interfaz responsiva, consultas a base de datos y backend con MVC.",
      Imagen: "BioCollector.jpg",
      Fecha: "React Native, SQLite",
    },
    {
      Tipo: "Proyecto",
      Titulo: "Identificador de leucemia",
      subtitulo: "Facultad de Ciencias de la Computación BUAP",
      Descripcion:
        "Desarrollo de un programa en Python para la identificación de leucemia mediante una red neuronal convolucional.",
      Imagen: "Detector de leucemia.jpg",
      Fecha: "Python",
    },
    {
      Tipo: "Proyecto",
      Titulo: "Hackathon Morelos",
      subtitulo: "Tec de Monterrey",
      Descripcion:
        '"YO TE AYUDO" - aplicación web que mejora la comunicación entre personas y cuidadoras especializadas. Mis responsabilidades fueron crear la interfaz, consumir endpoints y apoyar en backend.',
      Imagen: "hackMorelos.jpeg",
      Fecha: "JavaScript, Java (Spring Boot)",
    },
    {
      Tipo: "Proyecto",
      Titulo: "Lobo Hackathon",
      subtitulo: "BUAP - Primer lugar 🏆",
      Descripcion:
        "Implementación de un chatbot en WhatsApp que automatiza la gestión de notas, eventos y tareas usando la API de Notion. Fui responsable del consumo correcto de las APIs.",
      Imagen: "loboHack.jpg",
      Fecha: "JavaScript, Java (Spring Boot)",
    },
  ];

  const [education] = useState(
    staticData.filter((item) => item.Tipo === "Estudio")
  );
  const [projects] = useState(
    staticData.filter((item) => item.Tipo !== "Estudio")
  );
  const [isLoading] = useState(false);

  return { education, projects, isLoading };
};

export default useEducationAndProjects;
