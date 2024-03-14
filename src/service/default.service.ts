import { Types } from "mongoose"

const getAllDocuments = Model => async () => {
  return await Model.find({}).exec()
}

const createDocument = Model => async (payload) => {
  delete payload._id
  const document = await Model.create(payload)
  return await Model.findById(document._id).exec()
}

const updateDocument = Model => async (payload) => {
  return await Model.findByIdAndUpdate(payload._id, payload, {new: true}).exec()
}

const postDocument = Model => (create, update) => async (payload) => {
  if(Types.ObjectId.isValid(payload._id)){
    return await update(payload)
  } else {
    return await create(payload)
  }
}

const deleteDocument = Model => async (id) => {
  return await Model.findByIdAndDelete(id).exec()
}

export const DefaultService = Model => {
  return {
    getAllDocuments: getAllDocuments(Model),
    createDocument: createDocument(Model),
    updateDocument: updateDocument(Model),
    postDocument: postDocument(Model),
    deleteDocument: deleteDocument(Model)
  }
}