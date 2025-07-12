import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
function Footer() {
   return (
    <footer className="relative w-full h-32 md:h-40 lg:h-48 flex">
    {/* Logo izquierda (GIZ) con fondo blanco */}
    <div className="flex bg-white w-auto px-4  items-center">
      <img
        src="/LogoGiz.svg"
        alt="GIZ Logo"
        className="h-15 md:h-16 lg:h-20"
      />
    </div>

    {/* Fondo restante con imagen de footer */}
    {/* Fondo restante con imagen de footer */}
<div className="flex-grow relative overflow-hidden">
  <img
    src="/Footer.png"
    alt="Footer background"
    className="absolute inset-0 w-full h-full object-cover"
  />
</div>
  </footer>
  );
}

export default Footer