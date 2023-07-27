import { Router } from "express";
import getCharById from "../controllers/getCharById.js";
import deleteFav from "../controllers/deleteFav.js";
import postFav from "../controllers/postFav.js";
import login from "../controllers/login.js";
import postUser from "../controllers/postUser.js";

const router = Router();

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/login", postUser);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

export default router;
