import {Router} from 'express'
import { createFicha } from '../controllers/fichas.controller.js';


const router = Router();

router.post('/fichas', createFicha);


export default router