import {Router} from "express"
import { TagModel } from "../data/tag.model"
import { DefaultService } from "../service/default.service"

const service = DefaultService(TagModel) 

async function getAllTags(req, res, next) {
  try{
    const tags = await service.getAllDocuments()
    res.send(tags)
  }
  catch(e) {
    next(e)
  }
}

async function deleteTag(req, res, next) {
  try {
    await service.deleteDocument(req.params.id)
    res.send('success')
  }
  catch(e) {
    next(e)
  }
}

async function postTag(req, res, next) {
  try {
    const tag = await service.postDocument(service.createDocument,service.updateDocument)(req.body)
    res.send(tag)
  } catch(e) {
    next(e)
  }
}

const router = Router()

router.get('/', getAllTags)
router.post('/', postTag)
router.delete('/:id', deleteTag)

export default router