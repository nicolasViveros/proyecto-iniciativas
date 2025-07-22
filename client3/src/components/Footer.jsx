import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
function Footer() {
  return (
    <div>


      <footer className=" w-full md:flex-row ">

        <div className="grid grid-rows-3 ">

          {/* Fondo restante con imagen de footer */}
          <div className="flex relative overflow-hidden h-32 md:h-auto">
            <img
              src="/Footer2.png"
              alt="Footer"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="justify-center flex flex-col sm:flex-row items-center sm:justify-start sm:items-start">
            <span className="sm:pl-6 text-xs ">Implementado por:</span>
          </div>
          
          {/* Logo izquierda (GIZ) con fondo blanco */}
          <div className="flex bg-white w-full md:w-auto px-4 items-start justify-start md:justify-start h-16 md:h-auto">
            <Link to="/">
              <img
                src="/LogoGiz.svg"
                alt="GIZ Logo"
                className="h-12 md:h-16 lg:h-20"
              />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer