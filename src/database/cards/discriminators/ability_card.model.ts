import { prop, getDiscriminatorModelForClass } from "@typegoose/typegoose"
import { Card, CardModel } from "../card.model"

export class AbilityCard extends Card {
  
  @prop({ required: true })
  action_cost!: number

  @prop({ required: true })
  range!: number

  @prop({ required: true })
  melee!: boolean

  @prop({ required: true })
  target!: TargetType

  @prop({ required: true })
  save!: boolean

  @prop()
  save_target?: SaveType[]

  @prop()
  save_difficulty_modifier?: SaveType

}

export const AbilityCardModel = getDiscriminatorModelForClass(CardModel, AbilityCard)