import { FamilyModel } from "../../database/families/family.model"

export default async function deleteFamily(req, res, next) {
  try {
    await FamilyModel.deleteOne({_id: req.params.id})
    res.send('success')
  }
  catch(e) {
    next(e)
  }
}
