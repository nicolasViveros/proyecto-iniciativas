import React from 'react'
import { useEffect, } from 'react'
import { useIniciativas } from '../context/IniciativasContext'
import { Link } from 'react-router-dom'; // Asegúrate de tener react-router-dom instalado
import LoadingSpinner from "../context/LoadingSpinner";
import FichasFilter from '../components/FichasFilter';
import { useAuth } from "../context/AuthContext";

// function IniciativaCard({ iniciativa, handleDelete }) {
//     return (
//         <div className=" flex flex-col border p-4 space-between justify-between mx-auto w-full rounded shadow">
//             <div className='mb-10'>
//                 <h2 className="font-bold text-lg">
//                     <Link to={`/iniciativa/${iniciativa._id}`} className="text-xl hover:underline flex justify-center">
//                         Proyecto: {iniciativa.nombreIniciativa}
//                     </Link>
//                 </h2>
//                 <p><strong>País:</strong> {iniciativa.pais}</p>
//                 <p><strong>Ciudad:</strong> {iniciativa.ciudad}</p>


//                 <div className=" flex gap-x-2 mb-1 items-end justify-end">
//                     <button
//                         className="bg-[#5d5593] text-white px-4 py-2 rounded hover:bg-[#a49fc4]"
//                         onClick={() => {
//                             if (window.confirm("¿Está seguro de que desea eliminar esta iniciativa? Esta acción no se puede deshacer.")) {
//                                 handleDelete(iniciativa._id);
//                             }
//                         }}
//                     >
//                         eliminar
//                     </button>

//                     <Link
//                         to={`/iniciativa/${iniciativa._id}/editar`} className="bg-[#5d5593] text-white px-4 py-2 rounded hover:bg-[#a49fc4]"
//                     >
//                         editar
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// }



function IniciativasPage() {
  const { isAuthenticated } = useAuth();
  const { getIniciativas, iniciativas } = useIniciativas();
  // const [isSaving, setIsSaving] = useState(false);
  // const navigate = useNavigate();

  // const handleDelete = async (id) => {
  //   setIsSaving(true);
  //   try {
  //     await deleteIniciativa(id);
  //     navigate('/iniciativas');
  //   } catch (error) {
  //     console.error("Error al eliminar la iniciativa:", error);
  //   } finally {
  //     setIsSaving(false);
  //   }
  // }; 
  useEffect(() => {
    getIniciativas();
  }, []);

  if (iniciativas.length == 0) return (<div className=" flex  items-center justify-center min-h-screen">
    {/* <div className="max-w-3xl w-full rounded-md justify-center items-center"> */}
    Cargando iniciativas...
    <LoadingSpinner />
    {/* </div> */}
  </div>);

  // if (isSaving) {
  //   return <div className="flex items-center justify-center min-h-screen">
  //     {/* <div className="max-w-3xl w-full rounded-md justify-center items-center"> */}
  //       Eliminando iniciativa...
  //       <LoadingSpinner />
  //     {/* </div> */}
  //   </div>;
  // }

  return (

    <div className="relative flex items-center justify-center min-h-screen">
      <div className="min-h-screen bg-gray-100 p-4"></div>
      <FichasFilter items={iniciativas} type="iniciativa" key={iniciativas._id} />

      {
        isAuthenticated ? (
          <div className="absolute top-4 right-4 ">
            <Link
              to={`/iniciativa/${iniciativas._id}/editar`}
              className="bg-[#5d5593] text-white px-4 py-2 rounded hover:bg-[#a49fc4]"
            >
              editar
            </Link>
          </div>
        ) : (<div className="absolute top-4 right-4 ">

        </div>)
      }
    </div>
    );

}

export default IniciativasPage