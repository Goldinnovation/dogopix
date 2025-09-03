import { Router } from "express";
const router = Router();
// import handleSetPlayerBackground from "../../controller/Auth/handleSetPlayerBackground.js";
import handleSetPlayerBackground from "../../controller/Admin/handleSetPlayerBackground";
import DecodeANDVerifyToken from "../../middleware/decodePost";

import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 }}).single("image");


router.post('/', upload, DecodeANDVerifyToken, handleSetPlayerBackground);

export default router;


