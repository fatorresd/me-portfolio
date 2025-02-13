import { ReactNode } from "react";
import { Rnd } from "react-rnd";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneLight, atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";

interface AboutMeWindowProps {
  title: string;
  code: string;
  headerBgColor?: string;
  size?: {
    width: number | string;
    height: number | string;
  };
  xy?: {
    x: number;
    y: number;
  };
  icon?: ReactNode;
  isDarkMode: boolean; // Recibe isDarkMode como prop
}

export const AboutMeWindow: React.FC<AboutMeWindowProps> = ({
  title,
  code,
  headerBgColor = "bg-blue-800",
  size = { width: 700, height: 500 },
  xy = { x: 100, y: 100 },
  icon,
  isDarkMode,
}) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <Rnd
      default={{ x: xy.x, y: xy.y, width: size.width, height: size.height }}
      minWidth={300}
      minHeight={200}
      bounds="window"
      className={`rounded-md shadow-lg overflow-hidden ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className={`p-1 ${headerBgColor} rounded-t-md cursor-move`}>
        <div className="flex gap-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <div className="flex justify-center items-center gap-1 mt-1">
          {icon && (
            <span className="text-lg" role="img" aria-label="Custom Icon">
              {icon}
            </span>
          )}
          <p className="text-lg font-bold text-white">{title}</p>
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="text-white text-sm ml-2 animate-bounce"
          >
            🆘
          </button>
        </div>
      </div>
      {showInfo && (
        <div className={`p-2 ${
          isDarkMode ? "bg-yellow-600 text-gray-100" : "bg-yellow-100 text-gray-700"
        } text-sm`}>
          Puedes mover y redimensionar esta ventana arrastrando y ajustando sus
          bordes.
        </div>
      )}
      <div
        className="p-4 overflow-auto"
        style={{ height: "calc(100% - 2.5rem)" }}
      >
        <SyntaxHighlighter
          language="javascript"
          style={isDarkMode ? atomOneDark : atomOneLight} // Cambia el estilo según el modo oscuro
          wrapLongLines
          customStyle={{ whiteSpace: "pre-wrap" }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </Rnd>
  );
};