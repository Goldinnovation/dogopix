import { Router } from "express"
const router = Router()
import handleUserSetProfile from "../../controller/User/handleUserSetProfile";


router.post('/', handleUserSetProfile );

export default router
