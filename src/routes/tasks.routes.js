import {Router} from 'express'
import { authRequired } from '../middlewares/validateToken.js';
import { getTasks, getTask, createTask,deleteTask,updateTask } from '../controllers/tasks.controller.js';

const router = Router();

//router.get('/tasks', authRequired, (req,res) => res.send('tasks'));


router.get('/tasks',getTasks);

router.get('/tasks/:id', authRequired,getTask);

router.post('/tasks', authRequired,createTask);

router.delete('/tasks/:id', authRequired,deleteTask);

router.put('/tasks/:id', authRequired,updateTask);

//*router.post('/form1',loadForm1);


export default router