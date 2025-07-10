import { useParams } from 'react-router-dom';
import { useFichas } from '../context/FichasContext';

function FichaPage() {
    const { id } = useParams();
    const { fichas , getFicha } = useFichas();
    q
    const ficha = getFicha(id);

    if (!ficha) return <p>Ficha no encontrada</p>;

    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">{ficha.projectName}</h1>
        <p><strong>Tipo de Organización:</strong> {ficha.organizationType}</p>
        <p><strong>País:</strong> {ficha.country}</p>
        <p><strong>Representante Legal:</strong> {ficha.legalRepName}</p>
        <p><strong>Email:</strong> {ficha.email}</p>
        <p><strong>Teléfono:</strong> {ficha.phone}</p>
        <p><strong>Asociaciones:</strong> {ficha.associations.join(', ')}</p>
        <p>{/* Mostrar aquí el resumen completo de la ficha */}</p>
      </div>
    );
}

export default FichaPage;