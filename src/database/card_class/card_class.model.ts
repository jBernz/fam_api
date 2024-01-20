import { getModelForClass, modelOptions, mongoose, prop, ReturnModelType } from "@typegoose/typegoose"

@modelOptions({ schemaOptions: { collection: 'card_tags' } })
export class CardClass{
  
  @prop({ required: true, unique: true }) 
  name: string

  @prop() 
  description: string

  public static async parseAndCreate(this: ReturnModelType<typeof CardClass>, CardClass) {
    return await this.create(CardClass)
  }
}

export const CardClassModel = getModelForClass(CardClass)