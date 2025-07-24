import React from 'react'
import BannerIniciativas from '../components/BannerIniciativas'
import MapaConFiltro from '../components/MapaConFiltro'
import FichasFilter from '../components/FichasFilter'

function IniciativasHomePage() {
    return (
        <div className=' bg-red-500'>
            <BannerIniciativas />
            <FichasFilter />
        </div>
    )
}

export default IniciativasHomePage