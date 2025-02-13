import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectCarousel from "./components/ProjectCarousel";
import About from "./components/About";
import TechnologiesSection from "./components/TechnologiesSection";
import Roadmap from "./components/RoadMap";

function App() {
  // Estado para el modo oscuro
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Recupera el valor del localStorage al inicializar el estado
    const savedMode = localStorage.getItem("isDarkMode");
    return savedMode ? JSON.parse(savedMode) : false; // Convierte el string a booleano
  });

  // Efecto para guardar el estado en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode)); // Guarda el estado como string
  }, [isDarkMode]); // Se ejecuta cada vez que isDarkMode cambia

  return (
    <>
      <div className={isDarkMode ? "dark" : ""}>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        <div
          className={`min-h-screen flex flex-col items-center p-4 md:p-6 ${
            isDarkMode
              ? "bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800"
              : "bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600"
          }`}
        >
          <h1
            className={`w-full text-center text-3xl md:text-4xl font-bold mt-8 mb-6 md:mb-8 ${
              isDarkMode ? "text-gray-100" : "text-white"
            }`}
          >
            About Me 😎
          </h1>
          <About isDarkMode={isDarkMode} />
        </div>

        <ProjectCarousel isDarkMode={isDarkMode} />
        <TechnologiesSection isDarkMode={isDarkMode} />

        <Roadmap isDarkMode={isDarkMode} />

        <Footer />
      </div>
    </>
  );
}

export default App;
