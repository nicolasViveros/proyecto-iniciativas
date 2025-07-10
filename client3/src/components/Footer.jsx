import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
function Footer() {
   return (
    <footer className="relative w-full h-32 md:h-40 lg:h-48">
      {/* Fondo */}
      <img
        src="/Footer.png"
        alt="Footer background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Contenido superpuesto */}
      <div className="absolute inset-0 flex items-center justify-between px-4 md:px-10">
        {/* Logo izquierda (GIZ) */}
        <img
          src="/LogoGiz.svg"
          alt="GIZ Logo"
          className="h-10 md:h-16 lg:h-20"
        />

        {/* Logo derecha (Somos LAC) */}
        <img
          src="/LogoSomosLac.svg"
          alt="Somos LAC Logo"
          className="h-10 md:h-16 lg:h-20"
        />
      </div>
    </footer>
  );
}

export default Footer