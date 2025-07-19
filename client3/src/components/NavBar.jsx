import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
function NavBar() {
    const { isAuthenticated, logout, user } = useAuth();


    return (
        <nav className="my-3 flex justify-between border-b border-gray-300 px-4 md:px-10">
            <footer className="bg-white w-full">
                <div className="absolute inset-0 flex items-center justify-between px-4 md:px-10">
                    {/* Logo izquierda (GIZ) */}
                    <img
                        src="/global_gateway.png"
                        alt="GIZ Logo"
                        className="h-10 md:h-16 lg:h-20"
                    />

                    {/* Logo derecha (Somos LAC) */}
                    <img
                        src="/eu_germany.png"
                        alt="Somos LAC Logo"
                        className="h-10 md:h-16 lg:h-20"
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