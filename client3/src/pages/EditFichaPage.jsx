import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFichas } from '../context/FichasContext';

function EditFichaPage() {
    const { id } = useParams();
    const [ficha, setFicha] = useState(null);
    const { fichas, getFicha } = useFichas();

    useEffect(() => {
        const cargarFicha = async () => {
            try {
                const ficha = await getFicha(id);
                setFicha(ficha);
            } catch (error) {
                console.error('Error al cargar la ficha:', error);
            }
        };

        if (id) {
            cargarFicha();
        }
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFicha((prevFicha) => ({
            ...prevFicha,
            [name]: value,
        }));
    };

    const handleSave = () => {
        if (!ficha.name) {
          alert("El nombre es requerido");
          return;
        }
        // Add additional validation logic if necessary
  
        // Save logic here (e.g., send updated data to server)
        console.log('Ficha Saved:', ficha);
      };

        if (!ficha) {
            return <div>Cargando...</div>;
        }

        return (
            <div className="container mx-auto p-6">
              <h1 className="text-3xl font-bold mb-6">
                <input
                  type="text"
                  name="name"
                  value={ficha.name}
                  onChange={handleInputChange}
                  className="border rounded p-2 w-full"
                />
              </h1>
              <div>
                <label>Organización:</label>
                <input
                  type="text"
                  name="organizationName"
                  value={ficha.organizationName}
                  onChange={handleInputChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              {/* Repeat for other fields */}
              <button
                type="button"
                onClick={handleSave}
                className="mt-4 p-2 bg-blue-500 text-white rounded"
              >
                Guardar Ficha
              </button>
            </div>
          );
    }

    export default EditFichaPage