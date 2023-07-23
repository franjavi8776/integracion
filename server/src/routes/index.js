import { Router } from "express";
import getCharById from "../controllers/getCharById.js";
import { postFav, deleteFav } from "../controllers/handleFavorites.js";
import login from "../controllers/login.js";

const router = Router();

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

export default router;
