import { useEffect } from 'react'
import { useFichas } from '../context/FichasContext'
import { Link } from 'react-router-dom'; // Asegúrate de tener react-router-dom instalado
import LoadingSpinner from "../context/LoadingSpinner";

function FichaCard({ ficha }) {
  const { deleteFicha } = useFichas();
  return (
    <div className=" flex flex-col border p-4 space-between justify-between mx-auto rounded shadow">
      <div className='mb-10'>
        <h2 className="font-bold text-lg">
          <Link to={`/ficha/${ficha._id}`} className="text-xl hover:underline flex justify-center">
            Proyecto: {ficha.name}
          </Link>
        </h2>
        <p><strong>Tipo de Organización:</strong> {ficha.organizationType}</p>
        <p><strong>País:</strong> {ficha.country}</p>
        <p><strong>Representante Legal:</strong> {ficha.legalRepName}</p>
        <p><strong>Email:</strong> {ficha.email}</p>
        <p><strong>Teléfono:</strong> {ficha.phone}</p>
        <p><strong>Asociaciones:</strong> {ficha.associations.join(', ')}</p>
      </div>

      <div className=" flex gap-x-2 mb-1 items-end justify-end">
        <button
          className="bg-[#5d5593] text-white px-4 py-2 rounded hover:bg-[#a49fc4]"
          onClick={() => {
            if (window.confirm("¿Está seguro de que desea eliminar esta ficha? Esta acción no se puede deshacer.")) {
              deleteFicha(ficha._id);
            }
          }}
        >
          eliminar
        </button>

        <Link
          to={`/ficha/${ficha._id}/editar`} className="bg-[#5d5593] text-white px-4 py-2 rounded hover:bg-[#a49fc4]"
        >
          editar
        </Link>
      </div>
    </div>
  );
}

function FichasPage() {
  const { getFichas, fichas } = useFichas();

onload = getFichas;

  useEffect(() => {
    getFichas();
  }, []);

  if (fichas.length == 0) return (<div className="  items-center justify-center min-h-screen">
    <div className="max-w-3xl w-full rounded-md justify-center items-center">
      Cargando fichas...
      <LoadingSpinner />
    </div>
  </div>);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Listado de Fichas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {fichas.map((ficha) => (
          <FichaCard ficha={ficha} key={ficha._id} />
        ))}
      </div>
    </div>
  );
}

export default FichasPage