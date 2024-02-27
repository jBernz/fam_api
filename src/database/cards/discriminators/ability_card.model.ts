import { prop, getDiscriminatorModelForClass } from "@typegoose/typegoose"
import { Card, CardModel } from "../card.model"
import { CardType, SaveType, TargetType } from "fam-types"

export class AbilityCard extends Card {
  
  @prop({ required: true })
  action_cost!: number

  @prop({ required: true })
  range!: number

  @prop({ required: true })
  target!: TargetType

  @prop({ type: String })
  save_target?: SaveType[]

  @prop()
  save_difficulty_modifier?: SaveType

}

export const AbilityCardModel = getDiscriminatorModelForClass(CardModel, AbilityCard, CardType.Ability)