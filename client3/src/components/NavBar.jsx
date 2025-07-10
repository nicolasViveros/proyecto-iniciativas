import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
function NavBar() {
    const { isAuthenticated, logout, user } = useAuth();


    return (

        <nav className="my-3 flex justify-between border-b border-gray-300 py- px-10">
            <footer className="bg-white  w-full">
                <div className="px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-12">
                        <Link to={
                            "/"
                            }>
        
                        <img src="/Header.png" alt="Global Gateway" className="h-25 " />
                        </Link>
                    </div>

                </div>
            </footer>

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

        </nav>)
}

export default NavBar