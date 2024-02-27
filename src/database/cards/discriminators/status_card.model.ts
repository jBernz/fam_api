import { getDiscriminatorModelForClass, prop } from "@typegoose/typegoose"
import { Card, CardModel } from "../card.model"
import { CardType } from "fam-types"

export class StatusCard extends Card {

  @prop()
  duration: string

}

export const StatusCardModel = getDiscriminatorModelForClass(CardModel, StatusCard, CardType.Status)