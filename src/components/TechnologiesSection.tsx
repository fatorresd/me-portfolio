import React from 'react';
import Slider from 'react-slick';
import { technologies } from '../data/technologies';

interface TechnologiesSectionProps {
  isDarkMode: boolean; // Recibe isDarkMode como prop
}

const TechnologiesSection: React.FC<TechnologiesSectionProps> = ({ isDarkMode }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`${isDarkMode ? "bg-gray-800" : "bg-gray-100"} py-12`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}>
          Tecnologías que he usado 💻
        </h2>
        <Slider {...settings}>
          {technologies.map((tech, index) => (
            <div key={index} className="px-2">
              <div
                className={`flex flex-col items-center p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${
                  isDarkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-800"
                }`}
              >
                <img src={tech.imageUrl} alt={tech.name} className="w-16 h-16 mb-2" />
                <span className="text-lg font-medium">{tech.name}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TechnologiesSection;