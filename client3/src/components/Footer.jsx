import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
function Footer() {
  return (
    <div>
      {/* <footer>
        {/* Imagen de la ciudad como fondo superior */}
      {/* <div className="relative overflow-hidden w-auto h-30">
          <img
            src="/Footer2.png"
            alt="Footer"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div> */}

      {/* Cinta blanca inferior con logos */}
      {/* <div className="absolute bottom-0 left-0 w-full bg-white py-4 px-6">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center">
            {/* Implementado por */}
      {/* <div className="flex items-center gap-4">
              <div className="text-sm text-gray-700">Implementado por:</div>
              <img src="/gizlogo1.svg" alt="GIZ" className="h-10" />
            </div>

            {/* Apoyado por */}
      {/* <div className="flex items-center gap-4">
              <div className="text-sm text-gray-700">Apoyado por:</div>
              <img src="/Logo_OBGEM.png" alt="Ojo Morado" className="h-10" />
              <img src="/LOGO_DTPM.png" alt="DTP" className="h-10" />
            </div>
          </div> */}
      {/* //   </div>  */}
      {/* // </footer> */}


      <footer >
        <div className="grid grid-rows-2">
          {/* Fondo restante con imagen de footer */}
          <div className=" relative overflow-hidden h-30">
            <img
              src="/Footer2.png"
              alt="Footer"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          {/* Logo izquierda (GIZ) con fondo blanco */}
          <div className="relative bg-white w-full md:w-auto px-4 items-justify justify-justify h-20">
            
            <span className="flex text-xs  ">Implementado por:</span>
            <Link to="/">
              <img
                src="/LogoGiz.svg"
                alt="GIZ Logo"
                className="h-10 sm:h-13 md:h-17"
              />
            </Link>
              <span className="flex text-xs  ">Implementado por:</span>
              <Link to="/">
                <img
                  src="/LogoGiz.svg"
                  alt="GIZ Logo"
                  className="h-10 sm:h-13 md:h-17"
                />
              </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer