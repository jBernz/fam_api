import { prop, getDiscriminatorModelForClass } from "@typegoose/typegoose"
import { Card, CardModel } from "../card.model"

export class AttackCard extends Card {

  @prop({ required: true })
  public action_cost: number

  @prop({ required: true })
  public range!: number

  @prop({ required: true })
  public melee!: boolean

  @prop({ required: true })
  public target!: TargetType

  @prop({ required: true })
  public miss_damage!: number

  @prop({ required: true })
  public hit_damage!: number
  
  @prop({ required: true })
  public critical_damage!: number

  @prop({ required: true })
  public critical_threshold!: number

}
export const AttackCardModel = getDiscriminatorModelForClass(CardModel, AttackCard)