import {Router} from "express"
import { CardModel } from "../data/card.model"
import { DefaultService } from "../service/default.service"
import { CardService } from "../service/card.service"

const defaultService = DefaultService(CardModel) 

async function getAllCards(req, res, next) {
  try{
    const cards = await CardService.getAllCards()
    res.send(cards)
  }
  catch(e) {
    next(e)
  }
}

async function deleteCard(req, res, next) {
  try {
    await defaultService.deleteDocument(req.params.id)
    res.send('success')
  }
  catch(e) {
    next(e)
  }
}

async function postCard(req, res, next) {
  try {
    const card = await CardService.postCard(req.body)
    res.send(card)
  } catch(e) {
    next(e)
  }
}

const router = Router()

router.get('/', getAllCards)
router.post('/', postCard)
router.delete('/:type/:id', deleteCard)

export default router