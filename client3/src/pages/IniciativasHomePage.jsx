import React from 'react'
import BannerIniciativas from '../components/BannerIniciativas'
import MapaConFiltro from '../components/MapaConFiltro'

function IniciativasHomePage() {
  

    return (
        <div className='gap-2'>
            <BannerIniciativas />
            <MapaConFiltro />
        </div>
    )
}

export default IniciativasHomePage