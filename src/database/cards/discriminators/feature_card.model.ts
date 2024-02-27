import { getDiscriminatorModelForClass, prop } from "@typegoose/typegoose"
import { Card, CardModel } from "../card.model"
import { CardType } from "fam-types"

export class FeatureCard extends Card {

  @prop()
  bonus_type?: string

  @prop()
  bonus_amount?: number


}

export const FeatureCardModel = getDiscriminatorModelForClass(CardModel, FeatureCard, CardType.Feature)