import { CardModel } from "../../database/cards/card.model"

export default async function deleteCard(req, res, next) {
  try {
    await CardModel.deleteOne({_id: req.params.id, type: req.params.type})
    res.send('success')
  }
  catch(e) {
    next(e)
  }
}
