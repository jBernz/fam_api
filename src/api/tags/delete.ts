import { TagModel } from "../../database/tags/tag.model"

export default async function deleteTag(req, res, next) {
  try {
    await TagModel.deleteOne({_id: req.params.id})
    res.send('success')
  }
  catch(e) {
    next(e)
  }
}
