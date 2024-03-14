import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose"
import { Card } from "./card.model"

@modelOptions({ schemaOptions: {} })
export class Creature {
  
  @prop({ required: true }) 
  public name!: string

  @prop({ required: true, ref: Card })
  public cards!: Ref<Card>[]

  @prop({required: true}) 
  public vigor!: number

  @prop({required: true}) 
  public impulse!: number

  @prop({required: true}) 
  public special!: number

  @prop() 
  public description: string

  //Computed properties

  public get powerLevel() {
    return this.vigor + this.impulse + this.special
  }

  public get vigorBonus() {
    return Math.ceil(this.vigor/2)
  }

  public get impulseBonus() {
    return Math.ceil(this.impulse/2)
  }

  public get specialBonus() {
    return Math.ceil(this.special/2)
  }

  public get hitPointMaximum() {
    return this.vigor*4 + this.impulse*2 + this.special*2
  }

  public get baseSpeed() {
    return 4 + this.impulseBonus
  }

  public get energyMaximum() {
    return this.special
  }

  public get memoryMaximum() {
    return this.vigor + this.impulse + 2*this.special
  }

  public get evasion() {
    return getValueOfType('evasion', this.cards) || 0
  }

  public get armor() {
    return getValueOfType('armor', this.cards) || 0
  }

}

export const CardModel = getModelForClass(Card)

function getValueOfType(arg0: string, cards: Ref<Card>[]):number {
  throw new Error("Function not implemented.")
}

