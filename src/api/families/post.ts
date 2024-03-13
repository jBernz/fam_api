import { Request, Response } from "express"
import { Family, FamilyModel } from "../../database/families/family.model"

export default async function postFamily(req: Request, res: Response, next) {
  try {
    let response:Family
    const {_id, name, description} = req.body
    if(_id === undefined || _id.startsWith('$phID')){
      delete req.body._id
      const newDoc = await FamilyModel.create({name, description})
      response = await FamilyModel.findOne({_id: newDoc._id})
      .select('_id name description')
      .exec()
    } else {
      response = await FamilyModel.findOneAndUpdate({_id}, {name, description}, {new: true})
        .select('_id name description')
        .exec()
    }
    res.send(response)
  } catch(e) {
    next(e)
  }
}
