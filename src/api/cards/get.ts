import { CardModel } from "../../database/cards/card.model"

export default async function getAllCards(req, res) {
  const docs = await CardModel.find()
    .populate('family')
    .populate('tags')
    .exec()
  res.send(docs)
}
