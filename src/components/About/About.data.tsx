import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaPhp } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";


export const dataAbout = [
  {
    id: 0,
    text: "Skills"
  },
  {
    id: 1,
    text: "Experiencia"
  },
  {
    id: 2,
    text: "Estudios"
  }
];
export const dataCounter = [
  {
    id: 0,
    endCounter: 10,
    text: "Años de experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 80,
    text: "Clientes satisfechos",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 220,
    text: "Proyectos finalizados",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 3,
    endCounter: 30,
    text: "Premios ganadores",
    lineRight: false,
    lineRightMobile: false,
  },
];
export const dataAboutList = [
  {
    id: 1,
    experience: [
      {
        title: "Programador C#, Cusco Informático, Cusco",
        date: "nov. 2019 - feb. 2020",
        data: `Dominio sólido en la creación de formularios y aplicaciones mediante C#, junto con la
        capacidad de establecer conexiones efectivas con bases de datos SQL. He creado
        interfaces intuitivas y sistemas de gestión de datos eficientes, asegurando una
        experiencia de usuario fluida y un manejo confiable de la información.`
      },
      {
        title: "Programador Front-end React, LAPTOP PRO, Cusco",
        date: "ago. 2022 - mar. 2023",
        data: `Colaboré en el desarrollo de interfaces dinámicas y formularios utilizando React.js,
        asegurando una integración efectiva a través de API REST PHP. Mi enfoque contribuyó a
        mejorar la experiencia del usuario y la funcionalidad del sistema de manera integral.`
      },
    ]
  },
  {
    id: 2,
    studies: [
      {
        title: "Carrera Tecnica Profesional Instituto Superior Tecnológico Tupac Amaru, Cusco",
        date: "abril. 2018 - diciembre. 2020",
        data: `Me formé en el Instituto Superior Tecnológico Tupac Amaru, donde adquirí
        conocimientos en el desarrollo de sistemas informáticos, incluyendo aplicaciones web,
        móviles y de escritorio. Además, obtuve experiencia en redes informáticas y reparación
        de computadoras, lo que me proporciona una base completa en tecnología de la
        información.`
      }
    ]
  }
];

export const dataAboutSkills = [
  {
    title: "HTML5",
    icon: <FaHtml5 size="50" />
  },
  {
    title: "CSS3",
    icon: <FaCss3Alt size="50" />,
  },
  {
    title: "JavaScript",
    icon: <SiJavascript size="50" />
  },
  {
    title: "Typescript",
    icon: <SiTypescript size="50" />,
  },
  {
    title: "React JS",
    icon: <FaReact size="50" />,
  },
  {
    title: "Github",
    icon: <FaGithub size="50" />,
  },
  {
    title: "PHP",
    icon: <FaPhp size="50" />,
  }
];
