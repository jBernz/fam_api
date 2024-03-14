import { getDiscriminatorModelForClass, getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose"
import { Tag } from "./tag.model"
import { Family } from "./family.model"
import { TargetType, SaveType, CardType } from "fam-types"

@modelOptions({ schemaOptions: { 
  discriminatorKey: 'type'
} })
export class Card {
  
  @prop({ required: true }) 
  public name!: string

  @prop({ required: true }) 
  public memory!: number

  @prop({ ref: Family })
  public family: Ref<Family>

  @prop() 
  public vigor_required!: number

  @prop() 
  public impulse_required!: number

  @prop() 
  public special_required!: number

  @prop() 
  public description: string

  @prop({ ref: Tag })
  public tags: Ref<Tag>[]

}

class AbilityCard extends Card {
  
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

class AttackCard extends Card {

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

class FeatureCard extends Card {

  @prop()
  bonus_type?: string

  @prop()
  bonus_amount?: number

}

class StatusCard extends Card {

  @prop()
  duration: string

}

export const CardModel = getModelForClass(Card)

export const AbilityCardModel = getDiscriminatorModelForClass(CardModel, AbilityCard, CardType.Ability)
export const AttackCardModel = getDiscriminatorModelForClass(CardModel, AttackCard, CardType.Attack)
export const FeatureCardModel = getDiscriminatorModelForClass(CardModel, FeatureCard, CardType.Feature)
export const StatusCardModel = getDiscriminatorModelForClass(CardModel, StatusCard, CardType.Status)

export const cardTypes = {
  [CardType.Ability]: AbilityCardModel,
  [CardType.Attack]: AttackCardModel,
  [CardType.Feature]: FeatureCardModel,
  [CardType.Status]: StatusCardModel
}