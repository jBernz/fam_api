import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose"
import { Tag } from "../tags/tag.model"
import { Family } from "../families/family.model"

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

export const CardModel = getModelForClass(Card)

