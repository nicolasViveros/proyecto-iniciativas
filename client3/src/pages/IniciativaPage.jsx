import { React, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useIniciativas } from "../context/IniciativasContext";
import InitiativeCard from '../components/InitiativeCard'
import LoadingSpinner from "../context/LoadingSpinner";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function IniciativaPage() {
  const { isAuthenticated } = useAuth();
  const { id } = useParams();
  const { getIniciativa, deleteIniciativa, updateLocationPorIniciativa, getLocationPorIniciativa } = useIniciativas();
  const [iniciativa, setIniciativa] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    // Función para cargar datos de la iniciativa
    const cargarIniciativa = async () => {
      try {
        const iniciativa = await getIniciativa(id);
        // console.log(iniciativa)
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
  if (isSaving) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        {/* <div className="max-w-3xl w-full rounded-md justify-center items-center"> */}
        {/* {language === "es"
            ? "Guardando postulación..."
            : language === "en"
              ? "Saving application..."
              : "Salvando candidatura..."} */}
        <LoadingSpinner />
        {/* </div> */}
      </div>
    );
  }

  const actualizaLocalizacion = async () => {
    const userConfirmed = window.confirm("¿Está seguro de que desea actualizar la localización? Esta acción no se puede deshacer.");
    if (userConfirmed) {
      setIsSaving(true);
      try {
        const location = await getLocationPorIniciativa(id);
        console.log(location);
        console.log(id)

        await updateLocationPorIniciativa(id, location, iniciativa.pais || '', iniciativa.ciudad || '');
      }
      catch (error) {
        console.error("Error al actualizar la localización:", error);
      }
      finally {
        setIsSaving(false);
      }
    };
  }

  const eliminaIniciativa = async () => {
    const userConfirmed = window.confirm("¿Está seguro de que desea eliminar esta iniciativa? Esta acción no se puede deshacer.");
    if (userConfirmed) {
      setIsSaving(true);

      try {
        await deleteIniciativa(id);
        navigate('/iniciativas');
      } catch (error) {
        console.error("Error al eliminar la iniciativa:", error);
      } finally {
        setIsSaving(false);
      }
    };
  };



  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <div className="min-h-screen bg-gray-100 p-4">
        <InitiativeCard iniciativa={iniciativa} />

        {isAuthenticated && (
          <div className="absolute top-4 right-4">
            <button
              onClick={toggleMenu}
              className="bg-[#5d5593] text-white px-4 py-2 rounded hover:bg-[#a49fc4]"
            >
              Menú
            </button>
            {menuOpen && (
              <div className="mt-2 bg-white border rounded shadow-lg">
                <Link
                  onClick={actualizaLocalizacion}
                  className="block px-4 py-2 text-[#5d5593] hover:bg-[#ebe9f6]"
                >
                  Actualiza Localización
                </Link>
                <Link
                  onClick={eliminaIniciativa}
                  className="block px-4 py-2 text-[#5d5593] hover:bg-[#ebe9f6]"
                >
                  Eliminar
                </Link>
                <Link
                  to={`/iniciativa/${iniciativa._id}/editar`}
                  className="block px-4 py-2 text-[#5d5593] hover:bg-[#ebe9f6]"
                >
                  Editar
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default IniciativaPage





