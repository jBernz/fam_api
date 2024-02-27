import { TagModel } from "../../database/tags/tag.model"

export default async function getAllFamilies(req, res) {
  const docs = await TagModel.find()
    .select('_id name description')
    .exec()
  res.send(docs)
}
