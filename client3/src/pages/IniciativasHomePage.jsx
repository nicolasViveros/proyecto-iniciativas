import React from 'react'
import BannerIniciativas from '../components/BannerIniciativas'
import MapaConFiltro from '../components/MapaConFiltro'

function IniciativasHomePage() {
    return (
        <div className=' h-[calc(100vh-100px)] bg-red-500'>
       <BannerIniciativas /> 
       <MapaConFiltro />    
        </div>
    )
}

export default IniciativasHomePage