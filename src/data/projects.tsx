import { categoryProjects } from "../types";
import { technologies } from './technologies';

export const projects: categoryProjects[] = [
  {
    title: 'Cart Store Web',
    description: 'Desarrollo de una aplicación web para la gestión de un carrito de compras. Implementé funcionalidades clave como agregar, eliminar y modificar la cantidad de productos, asegurando una experiencia de usuario fluida y responsive.',
    imageUrl: 'cart-store.png',
    projectUrl: 'https://cart-aplicatio-figure-store.netlify.app/',
    technologies: [
      technologies[0].imageUrl, // React
      technologies[10].imageUrl, // Node.js
      technologies[11].imageUrl, // Html
      technologies[12].imageUrl, // CSS
      technologies[13].imageUrl, // Tailwind CSS
    ],
  },
  {
    title: 'Tips Web',
    description: 'Creación de una aplicación web para gestionar tips o consejos. Utilicé Redux y Redux Toolkit para el manejo del estado, permitiendo agregar, eliminar y modificar tips de manera eficiente.',
    imageUrl: 'tips-app.png',
    projectUrl: 'https://chilean-tips-web.netlify.app/',
    technologies: [
      technologies[0].imageUrl, // React
      technologies[10].imageUrl, // Node.js
      technologies[11].imageUrl, // Html
      technologies[12].imageUrl, // CSS
      technologies[13].imageUrl, // Tailwind CSS
    ],
  },
  {
    title: 'Expenses Control Web',
    description: 'Desarrollo de una aplicación web para el control de gastos personales. Implementé el manejo del estado utilizando useContext y useReducer, permitiendo agregar, eliminar y modificar gastos de manera intuitiva.',
    imageUrl: 'expense-app.png',
    projectUrl: 'https://expenses-control-fatorresdz.netlify.app/',
    technologies: [
      technologies[0].imageUrl, // React
      technologies[10].imageUrl, // Node.js
      technologies[11].imageUrl, // Html
      technologies[12].imageUrl, // CSS
      technologies[13].imageUrl, // Tailwind CSS
    ],
  },
];