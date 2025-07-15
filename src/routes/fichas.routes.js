import {Router} from 'express'
import { createFicha, getFichas, getFicha, deleteFicha, updateFicha } from '../controllers/fichas.controller.js';
import { authRequired } from '../middlewares/validateToken.js';

const router = Router();

router.post('/fichas', createFicha);

router.get('/fichas',authRequired, getFichas);

router.get('/ficha/:id', getFicha);

router.delete('/fichas/:id',deleteFicha);

router.put('/fichas/:id',updateFicha);

export default router