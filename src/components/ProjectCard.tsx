import React from 'react';

interface ProjectCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  projectUrl?: string;
  technologies?: string[]; // Nuevo prop para los iconos de tecnologías
  isDarkMode: boolean; // Recibe isDarkMode como prop
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  projectUrl, 
  technologies = [], // Valor por defecto para evitar errores
  isDarkMode
}) => {
  return (
    <a href={projectUrl} className="block cursor-pointer">
      <div className={`shadow-lg rounded-lg p-4 hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full flex flex-col ${
        isDarkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-800"
      }`}>
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          
          {/* Descripción con altura fija y scroll si es necesario */}
          <div className={`mb-4 overflow-y-auto max-h-24 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            {description}
          </div>
          
          {/* Sección para los iconos de tecnologías */}
          <div className="flex space-x-2 mt-auto">
            {technologies.map((tech, index) => (
              <img 
                key={index} 
                src={tech} 
                alt={`Tech ${index}`} 
                className="w-6 h-6" 
              />
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;