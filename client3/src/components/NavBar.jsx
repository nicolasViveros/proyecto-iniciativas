import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
function NavBar() {
    const { isAuthenticated, logout, user } = useAuth();


    return (
        <nav className="my-3 border-b border-gray-300">
            <footer className="bg-white w-full">
                <div className="flex justify-between items-center my-4 md:px-10 h-16 md:h-25">
                    <Link to="/" className="flex-grow">
                        <img
                            src="/Header1.svg"
                            alt="Global Gateway"
                            className="w-full object-cover inset-0 h-full"
                        />
                    </Link>
                </div>
            </footer>
        </nav>
    );
}

{/* <Link to={
                isAuthenticated ? "/tasks" : "/"
            }>
                <h1 className="text-4xl font-bold">Iniciativas GIZ</h1>
            </Link>
            <ul className="flex gap-x-2">
                {isAuthenticated ? (
                    <>
                        <li>
                            Bienvenido {user.username}
                        </li>
                        <li>
                            <Link to='/add-task' className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-sm">Añadir iniciativa</Link>
                        </li>
                        <li>
                            <Link to='/new-task' className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-sm">nueva iniciativa</Link>
                        </li>
                        <li>
                            <Link to='/nueva-ficha' className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-sm">paso a paso</Link>
                        </li>
                        <li>
                            <Link to='/' onClick={() => {
                                logout();
                            }}
                                className="hover:text-red-400">
                                Cerrar sesión
                            </Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to='/nueva-ficha' className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-sm">Nueva ficha</Link>
                        </li>
                        <li>
                            <Link to='/login' className="bg-indigo-500 px-4 py-1 rounded-sm">Accede</Link>
                        </li>
                        <li>
                            <Link to='/register' className="bg-indigo-500 px-4 py-1 rounded-sm">Registrate</Link>
                        </li>
                    </>


                )}
            </ul> */}


export default NavBar