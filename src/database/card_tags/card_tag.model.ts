import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose"

@modelOptions({ schemaOptions: { collection: 'card_tags' } })
export class CardTag {
  
  @prop({ required: true, unique: true }) 
  name: string

  @prop() 
  description: string

}

export const CardTagModel = getModelForClass(CardTag)