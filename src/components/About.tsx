import { useEffect, useState } from "react";
import { AboutMeWindow } from "./AboutMeWindow";
import { codeString, personalCodeString } from "../data/aboutMe";

interface AboutProps {
  isDarkMode: boolean; 
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`w-full max-w-4xl space-y-6 md:space-y-8 ${
          isDarkMode ? "dark" : ""
        }`}
      >
          {showTooltip && (
            <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-md shadow-lg text-sm text-gray-700 z-50 ${
          isDarkMode ? "dark" : ""
        }`}>
              ¡En la Seccion ABOUT ME, Puedes mover y redimensionar las ventanas
              a tu gusto!
            </div>
          )}

          <div className="w-full max-w-4xl space-y-6 md:space-y-8">
            <AboutMeWindow
              title="Personal Info"
              code={personalCodeString.codeString}
              headerBgColor="bg-green-800"
              size={{ width: "60%", height: "30vh" }}
              xy={{ x: 50, y: 50 }}
              icon="⛰"
              isDarkMode={isDarkMode} // Pasa isDarkMode como prop
            />
            <AboutMeWindow
              title="Professional Info"
              code={codeString.codeString}
              headerBgColor="bg-blue-800"
              size={{ width: "60%", height: "35vh" }}
              xy={{ x: -200, y: 350 }}
              icon="🚀"
              isDarkMode={isDarkMode}
            />
          </div>
        </div>

    </>
  );
};

export default About;