import {Router} from 'express'
import { createFicha, getFichas, getFicha } from '../controllers/fichas.controller.js';


const router = Router();

router.post('/fichas', createFicha);

router.get('/fichas', getFichas);

router.get('/ficha/:id', getFicha);


export default router