import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
function NavBar() {
    const { isAuthenticated, logout, user } = useAuth();


    return (
        <nav className=" flex justify-between border-b border-gray-300 ">
            <footer className="bg-white w-full">
                <div className=" inset-0 flex items-center justify-between px-10">
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
                {/* <div className="px-4 py-3 flex items-between justify-between">
                    <div className="flex items-center ">
                        <Link to="/">
                            <img src="/global_gateway.png" alt="Global Gateway" className="h-16 md:h-35" />
                            <img src="/eu_germany.png" alt="Global Gateway" className="h-16 md:h-35" />
                        </Link>
                    </div>

                </div> */}
            </footer>
        </nav>
    );
}

export default NavBar