import { DefaultService } from "./default.service"
import { CardModel, cardTypes } from "../data/card.model"

const getAllDocuments = async () => {
  return await CardModel.find({}).populate('family').populate('tags').exec()
}

const postDocument = async (payload) => {
  const cardModel = payload.type ? cardTypes[payload.type] : CardModel
  const defaultService = DefaultService(cardModel)
  return await defaultService.postDocument(defaultService.createDocument, defaultService.updateDocument)(payload)
}

export const CardService = {
  ...DefaultService(CardModel),
  getAllDocuments,
  postDocument,
}