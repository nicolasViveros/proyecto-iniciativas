import { Router } from "express";
import { getGeocodeData } from "../controllers/maps.controller.js";
//import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.get("/geocode", getGeocodeData);

export default router;
