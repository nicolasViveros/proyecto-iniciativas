import React, { useEffect } from 'react'
import BannerIniciativas from '../components/BannerIniciativas'
import MapaConFiltro from '../components/MapaConFiltro'
import FichasFilter from '../components/FichasFilter'
import { useIniciativas } from '../context/IniciativasContext';

function IniciativasHomePage() {
    const { getIniciativas, iniciativas } = useIniciativas();

    useEffect(() => {
        getIniciativas();
    }, []);


    return (
        <div >
            <BannerIniciativas />
            <MapaConFiltro />
            <FichasFilter items={iniciativas} type="iniciativa" key={iniciativas._id} />
        </div>
    )
}

export default IniciativasHomePage