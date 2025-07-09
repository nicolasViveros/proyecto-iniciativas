import { Router } from "express"
import { login,register,logout,profile, verifyToken } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { verifyTokenRequest } from "../../client3/src/api/auth.js";


const   router = Router(); 

router.post('/register',register);
router.post('/login',login);
router.post('/logout',logout);



router.get('/verify', verifyToken);

router.get('/profile',authRequired, profile);


export default router
