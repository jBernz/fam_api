import { prop, getDiscriminatorModelForClass } from "@typegoose/typegoose"
import { Card, CardModel } from "../card.model"
import { CardType, TargetType } from "fam-types"

export class AttackCard extends Card {

  @prop({ required: true })
  public action_cost: number

  @prop({ required: false })
  public range!: number

  @prop({ required: true })
  public target!: TargetType

  @prop({ required: false })
  public miss_damage!: number

  @prop({ required: true })
  public hit_damage!: number
  
  @prop({ required: true })
  public critical_damage!: number

  @prop({ required: true })
  public critical_threshold!: number

}
export const AttackCardModel = getDiscriminatorModelForClass(CardModel, AttackCard, CardType.Attack)