import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
function NavBar() {
    const { isAuthenticated, logout, user } = useAuth();


    return (
        <nav className="my-3 flex justify-between border-b border-gray-300 px-4 md:px-10">
            <footer className="bg-white w-full">
                <div className="px-4 py-3 flex items-center justify-center">
                    <div className="flex items-center ">
                        <Link to="/">
                            <img src="/Header_new.png" alt="Global Gateway" className="h-16 md:h-25" />
                        </Link>
                    </div>
                   
                </div>
            </footer>
        </nav>
    );
}

export default NavBar