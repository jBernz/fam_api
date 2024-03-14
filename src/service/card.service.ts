import { DefaultService } from "./default.service"
import { CardModel, cardTypes } from "../data/card.model"

const getAllCards = async () => {
  return await CardModel.find({}).populate('family').populate('tags').exec()
}

const postCard = async (payload) => {
  const cardModel = payload.type ? cardTypes[payload.type] : CardModel
  const defaultService = DefaultService(cardModel)
  defaultService.postDocument(defaultService.createDocument, defaultService.updateDocument)(payload)
}

export const CardService = {
  getAllCards,
  postCard,
}