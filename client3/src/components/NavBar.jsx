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
                        <li>
                            <Link to='/' onClick={() => {
                                logout();
                            }}
                                className="hover:text-red-400">
                                Cerrar sesión
                            </Link>
                        </li>
                    </div>


                ) : (
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

                    </div>


                )}
            </header>
        </nav>
    );
}

export default NavBar