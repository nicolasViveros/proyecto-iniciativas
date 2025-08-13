import {Router} from 'express'  
import {createIniciativa, getLocationPorIniciativa, getIniciativas, getIniciativa, deleteIniciativa, updateIniciativa, getIniciativasPorPais, getIniciativasPorCiudad } from '../controllers/iniciativas.controller.js';
import { authRequired } from '../middlewares/validateToken.js';

const router = Router();

router.post('/nueva-iniciativa', authRequired, createIniciativa);

router.get('/iniciativas', authRequired, getIniciativas);

router.get('/iniciativa/:id',authRequired, getIniciativa);

router.delete('/iniciativas/:id', authRequired, deleteIniciativa);

router.put('/iniciativas/:id', authRequired, updateIniciativa);

router.get('/iniciativas/:pais', authRequired, getIniciativasPorPais);

router.get('/iniciativasPorCiudad/:ciudad', authRequired, getIniciativasPorCiudad);

router.get('/locationPorIniciativa/:id', authRequired, getLocationPorIniciativa);
 


export default router