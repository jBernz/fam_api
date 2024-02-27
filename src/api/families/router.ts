import {Router} from "express"
import postFamily from "./post"
import getAllFamilies from "./get"
import deleteFamily from './delete'

const router = Router()

router.get('/', getAllFamilies)
router.post('/', postFamily)
router.delete('/:id', deleteFamily)

export default router