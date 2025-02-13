import React from "react";
import Slider from "react-slick";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

interface ProjectCarouselProps {
  isDarkMode: boolean; // Recibe isDarkMode como prop
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ isDarkMode }) => {
  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center p-6 ${
        isDarkMode
          ? "bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800" 
          : "bg-gradient-to-r from-blue-300 via-blue-500 to-blue-600" 
      }`}
    >
      <h2 className={`text-center text-4xl font-bold mb-8 ${
        isDarkMode ? "text-gray-100" : "text-white"
      }`}>
        Mis Proyectos 👨🏽‍💻
      </h2>
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="px-2">
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
                technologies={project.technologies}
                isDarkMode={isDarkMode} // Pasa isDarkMode como prop
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProjectCarousel;