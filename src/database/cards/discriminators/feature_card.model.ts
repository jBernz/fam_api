import { getDiscriminatorModelForClass, prop } from "@typegoose/typegoose"
import { Card, CardModel } from "../card.model"

export class FeatureCard extends Card {

  @prop()
  bonus_type?: string

  @prop()
  bonus_amount?: number


}

export const FeatureCardModel = getDiscriminatorModelForClass(CardModel, FeatureCard)