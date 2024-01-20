import Mongoose from "mongoose"
import featureTreesJson from '../../data/feature_trees.json'
import featuresJson from '../../data/features.json'

let database: Mongoose.Connection

export const connect = () => {

  const uri = "mongodb://localhost:27017/test"
 
  if (database) {
    return
  }

  Mongoose.connect(uri)
  database = Mongoose.connection;

  database.once("open", async () => {
    console.log("Connected to database")
    await database.db.dropDatabase()
    console.log("Repopulating data...")
    await createData()
    console.log("Repopulated data")
  })

  database.on("error", () => {
    console.log("Error connecting to database")
  })

}

export const disconnect = () => {  
  if (!database) {
    return
  }  
  Mongoose.disconnect()
}

const createData = async () => {

  // for (let featureTree of featureTreesJson) {
  //   await FeatureTreeModel.parseAndCreate(featureTree)
  // }
  // for (let feature of featuresJson) {
  //   await FeatureModel.parseAndCreate(feature)
  // }

}