import { FamilyModel } from "../../database/families/family.model"

export default async function getAllFamilies(req, res) {
  const docs = await FamilyModel.find()
    .select('_id name description')
    .exec()
  res.send(docs)
}
