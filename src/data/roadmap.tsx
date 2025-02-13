import { milestone } from '../types';
import { technologies } from './technologies'; // Importa los iconos de tecnologías

export const milestones: milestone[] = [
  {
    date: 'Marzo 2018',
    title: 'Inicio de la Carrera de Ingeniería Civil Informática',
    description: 'Comencé mis estudios en la Universidad Católica de Temuco, enfocándome en desarrollo de software y análisis de datos.',
    icon: '🎓',
    technologies: [
      technologies[5].imageUrl, // Python
      technologies[9].imageUrl, // SQL
    ],
  },
  {
    date: 'Junio 2020',
    title: 'Primera Experiencia como Desarrollador Fullstack',
    description: 'Trabajé en CIDLA, desarrollando aplicaciones web con React en el frontend y Django en el backend. Implementé conexiones a bases de datos como MongoDB y MySQL.',
    icon: '💻',
    technologies: [
      technologies[0].imageUrl, // React
      technologies[6].imageUrl, // Django
      technologies[8].imageUrl, // MongoDB
    ],
  },
  {
    date: 'Julio 2023',
    title: 'Prácticas como Automatizador QA en Banco Ripley',
    description: 'Creé scripts automatizados con Selenium, Java y TestNG. Implementé pipelines de CI/CD con Jenkins y trabajé con metodologías ágiles como Scrum.',
    icon: '🤖',
    technologies: [
      technologies[7].imageUrl, // Java
      technologies[14].imageUrl, // Selenium
      technologies[16].imageUrl, // Appium
      technologies[19].imageUrl, // MySQL
      technologies[20].imageUrl, // Jenkins
      technologies[21].imageUrl, // Jira
      technologies[22].imageUrl, // Git
    ],
  },
  {
    date: 'Octubre 2024',
    title: 'Titulado de Ingeniería Civil Informática, mencion Desarrollo de Software',
    description: 'Luego de presentar mi tesis sobre Automatizacion QA para el departamento de informatica para mi universidad (UCT), obtuve mi título profesional en la Universidad Católica de Temuco.',
    icon: '🥳',
    technologies: [

    ],
  },
  {
    date: 'Abril 2024',
    title: 'Analista/Automatizador QA Jr en Inmetrics LATAM',
    description: 'Automaticé pruebas funcionales y de regresión para clientes bancarios usando Selenium, Cypress y Appium. Colaboré en proyectos ágiles utilizando Jira.',
    icon: '📊',
    technologies: [
      technologies[7].imageUrl, // Java
      technologies[14].imageUrl, // Selenium
      technologies[15].imageUrl, // Cypress
      technologies[16].imageUrl, // Appium
      technologies[19].imageUrl, // MySQL
      technologies[20].imageUrl, // Jenkins
      technologies[21].imageUrl, // Jira
      technologies[22].imageUrl, // Git
    ],
  },
  {
    date: 'Abril 2024',
    title: 'Desarrollador Backend en Trivertex SPA',
    description: 'Desarrollé aplicaciones backend con Python, Flask y Django. Implementé conexiones seguras a bases de datos como MariaDB y MongoDB, y trabajé con soluciones en la nube.',
    icon: '🚀',
    technologies: [
      technologies[5].imageUrl, // Python
      technologies[6].imageUrl, // Django
      technologies[8].imageUrl, // MongoDB
      technologies[18].imageUrl, // MariaDB
    ],
  },
];