import {Router} from 'express'
import { createFicha, getFichas, getFicha, deleteFicha, updateFicha } from '../controllers/fichas.controller.js';
import { authRequired } from '../middlewares/validateToken.js';

const router = Router();

router.post('/fichas', createFicha);

router.get('/fichas',authRequired, getFichas);

router.get('/ficha/:id',authRequired, getFicha);

router.delete('/fichas/:id', authRequired, deleteFicha);

router.put('/fichas/:id', authRequired, updateFicha);

export default router