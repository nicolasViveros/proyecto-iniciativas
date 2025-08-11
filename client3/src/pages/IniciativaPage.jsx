import { React, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useIniciativas } from "../context/IniciativasContext";
import InitiativeCard from '../components/InitiativeCard'
import LoadingSpinner from "../context/LoadingSpinner";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function IniciativaPage() {
  const { isAuthenticated } = useAuth();
  const { id } = useParams();
  const { getIniciativa, deleteIniciativa } = useIniciativas();
  const [iniciativa, setIniciativa] = useState(null);
  useEffect(() => {
    // Función para cargar datos de la iniciativa
    const cargarIniciativa = async () => {
      try {
        const iniciativa = await getIniciativa(id);
        setIniciativa(iniciativa);
      } catch (error) {
        console.error("Error al cargar la iniciativa:", error);
      }
    };

    if (id) {
      cargarIniciativa();
    }
  }, [id]);

  if (!iniciativa) {
    return (
      <div className=" flex items-center justify-center min-h-screen">
        Cargando iniciativa...
        <LoadingSpinner />
      </div>

    );
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <div className="min-h-screen bg-gray-100 p-4">
        <InitiativeCard iniciativa={iniciativa} />

        {isAuthenticated ? (
          <div className="absolute top-4 right-4 ">
            <Link
              onClick={() => {
                const userConfirmed = window.confirm("¿Está seguro de que desea eliminar esta iniciativa? Esta acción no se puede deshacer.");
                if (!userConfirmed){
                deleteIniciativa(iniciativa._id);
              }
              }} className="bg-[#5d5593] text-white px-4 py-2 mr-2 rounded hover:bg-[#a49fc4]"
            >
              Eliminar
            </Link>
            <Link
              to={`/iniciativa/${iniciativa._id}/editar`}
              className="bg-[#5d5593] text-white px-4 py-2 rounded hover:bg-[#a49fc4]"
            >
              editar
            </Link>
          </div>
        ) : (<div className="absolute top-4 right-4 ">

        </div>)}
      </div>
    </div>
  )
}

export default IniciativaPage





