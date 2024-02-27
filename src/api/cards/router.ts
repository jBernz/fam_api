import {Router} from "express"
import getAllCards from "./get"
import postCard from "./post"
import deleteCard from "./delete"

const router = Router()

router.get('/', getAllCards)
router.post('/', postCard)
router.delete('/:type/:id', deleteCard)

export default router