import { useEffect } from 'react'
import { useFichas } from '../context/FichasContext'
import { Link } from 'react-router-dom'; // Asegúrate de tener react-router-dom instalado

function FichaCard({ ficha }) {
  const { deleteFicha } = useFichas();
  return (
    <div className="border p-4 rounded mb-4 shadow">
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
      
      <div className="flex gap-x-2 place-content-end-safe ">
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          onClick={() => {
            deleteFicha(ficha._id);
          }}
        >
          eliminar
        </button>

        <Link
          to={`/ficha/${ficha._id}`} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          editar
        </Link>
      </div>
    </div>
  );
}

function FichasPage() {
  const { getFichas, fichas } = useFichas();

  useEffect(() => {
    getFichas();
  }, []);

  if (fichas.length == 0) return (<h1> Cargando...</h1>);

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