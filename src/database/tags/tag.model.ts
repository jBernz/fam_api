import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose"

@modelOptions({ schemaOptions: { collection: 'tags' } })
export class Tag {
  
  @prop({ required: true, unique: true }) 
  name: string

  @prop() 
  description: string

}

export const TagModel = getModelForClass(Tag)