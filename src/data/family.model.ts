import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose"

@modelOptions({ schemaOptions: { collection: 'families' } })
export class Family{
  
  @prop({ required: true, unique: true }) 
  name: string

  @prop() 
  description: string

}

export const FamilyModel = getModelForClass(Family)