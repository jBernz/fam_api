import {Router} from "express"
import { FamilyModel } from "../data/family.model"
import { DefaultService } from "../service/default.service"

const service = DefaultService(FamilyModel) 

async function getAllFamilies(req, res, next) {
  try{
    const families = await service.getAllDocuments()
    res.send(families)
  }
  catch(e) {
    next(e)
  }
}

async function deleteFamily(req, res, next) {
  try {
    await service.deleteDocument(req.params.id)
    res.send('success')
  }
  catch(e) {
    next(e)
  }
}

async function postFamily(req, res, next) {
  try {
    const family = await service.postDocument(service.createDocument,service.updateDocument)(req.body)
    res.send(family)
  } catch(e) {
    next(e)
  }
}

const router = Router()

router.get('/', getAllFamilies)
router.post('/', postFamily)
router.delete('/:id', deleteFamily)

export default router