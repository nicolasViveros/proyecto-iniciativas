import {Router} from 'express'  
import {createIniciativas, getIniciativas, getIniciativa, deleteIniciativa, updateIniciativa, getIniciativasPorPais, getIniciativasPorCiudad } from '../controllers/iniciativas.controller.js';
import { authRequired } from '../middlewares/validateToken.js';

const router = Router();

router.post('/iniciativas', authRequired, createIniciativas);

router.get('/iniciativas', authRequired, getIniciativas);

router.get('/iniciativa/:id',authRequired, getIniciativa);

router.delete('/iniciativas/:id', authRequired, deleteIniciativa);

router.put('/iniciativas/:id', authRequired, updateIniciativa);

router.get('/iniciativas/:pais', authRequired, getIniciativasPorPais);

router.get('/iniciativas/:ciudad', authRequired, getIniciativasPorCiudad);
 


export default router