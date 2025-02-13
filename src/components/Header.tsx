import React, { useState, useEffect } from "react";

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, setIsDarkMode }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("fernando13693@gmail.com").then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  // Efecto para cambiar el tema
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <header
      className={`relative min-h-screen flex flex-col justify-center items-center ${
        isDarkMode
          ? "bg-gray-900"
          : "bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400"
      } text-gray-800 dark:text-gray-200 p-6 shadow-lg`}
    >
      {/* Botones de GitHub, LinkedIn y Descargar CV en la esquina superior derecha */}
      <div className="absolute top-4 right-4 flex space-x-4">
        <a
          href="https://github.com/fatorresd"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-pulse"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png"
            alt="GitHub"
            className="w-8 h-8"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/fernando-torres-60b256186/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-pulse"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png"
            alt="LinkedIn"
            className="w-8 h-8"
          />
        </a>

        <a
          href="/CV_Fatorres.pdf"
          download="CV_Fernando_Torres.pdf"
          className="bg-green-600 p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-pulse"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/ffffff/resume.png"
            alt="Descargar CV"
            className="w-8 h-8"
          />
        </a>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center mb-4">
        <div className="flex items-center">
          <span className="ml-8 text-lg font-mono text-gray-700 dark:text-gray-300">
            import
          </span>
          <p className="ml-2 text-lg font-mono text-gray-700 dark:text-gray-300">
            &#123; Computer Engineer &#125;
          </p>
          <span className="ml-2 text-lg font-mono text-gray-700 dark:text-gray-300">
            from
          </span>
          <p className="ml-2 text-lg font-mono text-gray-700 dark:text-gray-300">
            "Chile"
          </p>
        </div>
        <h1 className="text-3xl font-bold dark:text-gray-100">
          &lt;Fernando A Torres D /&gt;
        </h1>

        {/* Correo electrónico con botón de copiar */}
        <div className="mt-4 flex items-center">
          <p className="ml-2 text-lg font-mono text-gray-700 dark:text-gray-300">
            fernando13693@gmail.com
          </p>
          <button
            onClick={copyEmailToClipboard}
            className="ml-2 p-2 bg-gray-700 rounded-full hover:bg-gray-800 transition-colors duration-300"
            title="Copiar correo"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/ffffff/copy.png"
              alt="Copiar"
              className="w-5 h-5"
            />
          </button>
          {isCopied && (
            <span className="ml-2 text-sm text-green-500">¡Copiado!</span>
          )}
        </div>
      </div>

      {/* Botón de toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="relative z-10 flex items-center justify-center focus:outline-none"
      >
        <div
          className={`w-16 h-8 flex items-center rounded-full cursor-pointer transition-colors duration-300 p-1 ${
            isDarkMode ? "bg-gray-800" : "bg-yellow-500"
          }`}
        >
          <div
            className={`bg-white w-6 h-6 rounded-full shadow-md flex items-center justify-center transform transition-transform duration-300 ease-in-out ${
              isDarkMode ? "translate-x-8" : "translate-x-0"
            }`}
          >
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 text-gray-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 text-yellow-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l-1.414 1.414M7.05 7.05L5.636 5.636M12 8a4 4 0 100 8 4 4 0 000-8z"
                />
              </svg>
            )}
          </div>
        </div>
      </button>
    </header>
  );
};

export default Header;
