import React from 'react'
import { useNavigate } from "react-router-dom";

function MenuIntranet() {
  const   navigate = useNavigate()

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
    <div className=" max-w-md w-full p-10  rounded-md">
     
      <h1 className="text-3xl text-center font-bold mb-4">Menú Rumbo a la Equidad</h1>
        
        <div className="flex flex-col gap-4">
        <button type="button"
        className="bg-[#5d5593] text-white px-4 py-2 rounded hover:bg-[#a49fc4]"
        onClick={() => navigate('/iniciativas')}>
          Iniciativas
        </button>
        <button type="button"
        className="bg-[#5d5593] text-white px-4 py-2 rounded hover:bg-[#a49fc4]"
        onClick={() => navigate('/fichas')}>
          Postulaciones
        </button>
        </div>
    </div>
  </div>
  )
}

export default MenuIntranet