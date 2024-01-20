import { getModelForClass, modelOptions, mongoose, prop, ReturnModelType } from "@typegoose/typegoose"

@modelOptions({ schemaOptions: { collection: 'card_tags' } })
export class CardTag {
  
  @prop({ required: true, unique: true }) 
  name: string

  @prop() 
  description: string

  public static async parseAndCreate(this: ReturnModelType<typeof CardTag>, CardTag) {
    return await this.create(CardTag)
  }
}

export const CardTagModel = getModelForClass(CardTag)