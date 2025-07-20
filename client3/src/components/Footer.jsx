import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
function Footer() {
  return (
    <footer className="relative w-full flex flex-col md:flex-row h-auto">
      <div>

        {/* Logo izquierda (GIZ) con fondo blanco */}
        <div className="flex bg-white w-full md:w-auto px-4 items-center justify-center md:justify-start h-16 md:h-auto">
        <span className="text-[#5D5593] text-2xs justify-start">Implementado por:</span>

          <img
            src="/LogoGiz.svg"
            alt="GIZ Logo"
            className="h-12 md:h-16 lg:h-20"
          />
        </div>

        {/* Fondo restante con imagen de footer */}
        <div className="flex-grow relative overflow-hidden h-auto md:h-auto">
          <img
            src="/Footer2.png"
            alt="Footer"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer