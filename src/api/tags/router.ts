import {Router} from "express"
import postTag from "./post"
import getAllTags from "./get"
import deleteTag from './delete'

const router = Router()

router.get('/', getAllTags)
router.post('/', postTag)
router.delete('/:id', deleteTag)

export default router