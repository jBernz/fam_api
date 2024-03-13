import { Request, Response } from "express"
import { Tag, TagModel } from "../../database/tags/tag.model"

export default async function postTag(req: Request, res: Response, next) {
  try {
    let response:Tag
    const {_id, name, description} = req.body
    if(_id === undefined || _id.startsWith('$phID')){
      delete req.body._id
      const newDoc = await TagModel.create({name, description})
      response = await TagModel.findOne({_id: newDoc._id})
      .select('_id name description')
      .exec()
    } else {
      response = await TagModel.findOneAndUpdate({_id}, {name, description}, {new: true})
        .select('_id name description')
        .exec()
    }
    res.send(response)
  } catch(e) {
    next(e)
  }
}
