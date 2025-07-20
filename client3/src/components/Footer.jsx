import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
function Footer() {
  return (
    <div>
      <div>
              <span className="aling-center sm:text-xs text-xl ">Implementado por:</span>
      </div>
      <footer className="relative w-full flex flex-col md:flex-row h-auto">
        {/* Logo izquierda (GIZ) con fondo blanco */}
        <div className="flex bg-white w-full md:w-auto px-4 items-center justify-center md:justify-start h-16 md:h-auto">
          <img
            src="/LogoGiz.svg"
            alt="GIZ Logo"
            className="h-12 md:h-16 lg:h-20"
          />
        </div>

        {/* Fondo restante con imagen de footer */}
        <div className="flex-grow relative overflow-hidden h-32 md:h-auto">
          <img
            src="/Footer2.png"
            alt="Footer"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </footer>
    </div>
  );
}

export default Footer