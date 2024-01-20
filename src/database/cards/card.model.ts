import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose"
import { CardTag } from "../card_tags/card_tag.model"
import { CardClass } from "../card_class/card_class.model"

@modelOptions({ schemaOptions: { 
  discriminatorKey: 'type'
} })
export class Card {
  
  @prop({ required: true }) 
  public name!: string

  @prop() 
  public memory!: number

  @prop({ required: true, ref: CardClass })
  public class: Ref<CardClass>

  @prop() 
  public vigor_required!: number

  @prop() 
  public impulse_required!: number

  @prop() 
  public special_required!: number

  @prop() 
  public description: string

  @prop({ required: true, ref: CardTag })
  public tags: Ref<CardTag>[]

  public static async parseAndCreate(this: ReturnModelType<typeof CardTag>, CardTag) {
    return await this.create(CardTag)
  }

}

export const CardModel = getModelForClass(Card)

