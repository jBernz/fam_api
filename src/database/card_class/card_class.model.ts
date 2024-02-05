import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose"

@modelOptions({ schemaOptions: { collection: 'card_tags' } })
export class CardClass{
  
  @prop({ required: true, unique: true }) 
  name: string

  @prop() 
  description: string

}

export const CardClassModel = getModelForClass(CardClass)