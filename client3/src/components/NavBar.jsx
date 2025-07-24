import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
function NavBar() {
    const { isAuthenticated, logout, user } = useAuth();


    return (
        <nav className=" flex justify-between border-b border-gray-300 ">
            <header className="bg-white w-full">

                {isAuthenticated ? (
                    <div className=" inset-0 flex items-center justify-between px-2 sm:px-10">
                        {/* Logo izquierda (GIZ) */}
                        <Link to="/">
                            <img
                                src="/global_gateway.png"
                                alt="GIZ Logo"
                                className=" h-25 md:h-30 lg:h-40"
                            />
                        </Link>
                        {/* Logo derecha (Somos LAC) */}
                        <img
                            src="/eu_germany.png"
                            alt="Somos LAC Logo"
                            className="mb-6 h-25 md:h-35 lg:h-45"
                        />
                        <div className="absolute cols-2 gap-2 top-4 right-4">
                            <Link to='/fichas'
                                className="hover:text-red-400 text-xs">
                                Fichas |
                            </Link>
                            <Link to='/' onClick={() => {
                                logout();
                            }}
                                className="hover:text-red-400 text-xs">
                                Cerrar sesión
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="max-w-screen-xl mx-4 flex items-center justify-between">
                        {/* Grupo Izquierdo */}
                        <div className="flex items-center gap-4">
                            <img src="/Logo-GlobalGateway.svg" alt="Global Gateway" className="h-25" />
                            <img src="/Logo-UE.svg" alt="UE" className="h-25" />
                            <img src="/Logo-CoperacionAlemana.svg" alt="Cooperación Alemana" className="h-25" />
                        </div>

                        {/* Grupo Derecho */}
                        <div className="flex items-center gap-2">
                            <img src="/TRANSPORTE_2.png" alt="Ministerio de Transporte" className="h-25" />
                            
                        </div>
                    </div>
                    // <div className=" inset-0 flex items-center justify-between px-2 sm:px-25">
                    //     {/* Logo izquierda (GIZ) */}
                    //     <Link to="/">
                    //         <img
                    //             src="/global_gateway.png"
                    //             alt="GIZ Logo"
                    //             className=" h-25 md:h-30 lg:h-40"
                    //         />
                    //     </Link>
                    //     {/* Logo derecha (Somos LAC) */}
                    //     <img
                    //         src="/eu_germany.png"
                    //         alt="Somos LAC Logo"
                    //         className="mb-6 h-25 md:h-35 lg:h-45"
                    //     />
                    // </div>
                )}
            </header>
        </nav>
    );
}

export default NavBar