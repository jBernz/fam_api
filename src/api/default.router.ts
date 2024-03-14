import {Router} from "express"

const getAll = Service => async (req, res, next) => {
  try{
    const docs = await Service.getAllDocuments()
    res.send(docs)
  }
  catch(e) {
    next(e)
  }
}

const deleteOne = Service => async (req, res, next) => {
  try {
    await Service.deleteDocument(req.params.id)
    res.send('success')
  }
  catch(e) {
    next(e)
  }
}

const post = Service => async (req, res, next) => {
  try {
    const doc = await Service.postDocument(Service.createDocument,Service.updateDocument)(req.body)
    res.send(doc)
  } catch(e) {
    next(e)
  }
}

export const DefaultRouter = Service => {
  const router = Router()

  router.get('/', getAll(Service))
  router.post('/', post(Service))
  router.delete('/:id', deleteOne(Service))

  return router
}

export default DefaultRouter