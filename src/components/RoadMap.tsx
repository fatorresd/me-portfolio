import React from "react";
import { motion } from "framer-motion";
import { milestones } from "../data/roadmap";

interface RoadmapVisualProps {
  isDarkMode: boolean; // Recibe isDarkMode como prop
}

const RoadmapVisual: React.FC<RoadmapVisualProps> = ({ isDarkMode }) => {
  // Animación para los hitos
  const hitoAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      className={`relative container mx-auto px-6 py-10 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <h1 className="relative z-10 text-4xl font-bold text-center text-blue-800 mb-10">
        Mi Roadmap Profesional 🚀
      </h1>
      {/* Línea vertical central (detrás de los cuadros) */}
      <div
  className={`absolute top-24 bottom-10 w-1 ${
    isDarkMode ? "bg-gray-700" : "bg-blue-500"
  } left-1/2 transform -translate-x-1/2 z-0`}
></div>

      {/* Contenedor de hitos */}
      <div className="space-y-8">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // Animar solo una vez
            variants={hitoAnimation}
            className={`flex ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } items-center w-full`}
          >
            {/* Ícono del hito */}
            <div
              className={`w-12 h-12 flex items-center justify-center ${
                isDarkMode ? "bg-gray-700" : "bg-blue-500"
              } rounded-full text-white text-2xl z-10`}
            >
              {milestone.icon}
            </div>

            {/* Contenido del hito */}
            <div className={`w-1/2 p-6 ${index % 2 === 0 ? "ml-8" : "mr-8"}`}>
              <motion.div
                className={`${
                  isDarkMode
                    ? "bg-gray-800 text-gray-100"
                    : "bg-white text-gray-800"
                } shadow-lg rounded-lg p-6 relative z-10`}
                whileHover={{ scale: 1.05 }} // Efecto al pasar el mouse
              >
                <h3
                  className={`text-xl font-bold ${
                    isDarkMode ? "text-blue-400" : "text-blue-800"
                  }`}
                >
                  {milestone.title}
                </h3>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  } mt-2`}
                >
                  {milestone.date}
                </p>
                <p
                  className={`mt-4 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {milestone.description}
                </p>

                {/* Tecnologías utilizadas */}
                {milestone.technologies && (
                  <div className="mt-4 flex space-x-2">
                    {milestone.technologies.map((tech, idx) => (
                      <motion.img
                        key={idx}
                        src={tech}
                        alt={`Tech ${idx}`}
                        className="w-6 h-6"
                        whileHover={{ scale: 1.2 }} // Efecto al pasar el mouse
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapVisual;
