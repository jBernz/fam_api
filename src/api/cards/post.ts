import { Request, Response } from "express"
import { CardModel } from "../../database/cards/card.model"
import { cardTypes } from "../../database/cards/discriminators/types"

export default async function postCard(req: Request, res: Response, next) {
  try {
    const model = req.body.type ? cardTypes[req.body.type] : CardModel

    let {_id} = req.body

    if(_id === undefined || _id.startsWith('$phID')){
      delete req.body._id
      _id = (await model.create(req.body))._id
    } else {
      await model.findOneAndUpdate(req.body._id, req.body, {new: true})
    }

    const savedCard = await model.findOne({_id}).exec()

    if (savedCard == null) throw new Error("Card not found")

    res.send(savedCard)

  } catch(e) {
    next(e)
  }
}