"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnectDB = exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongodb_memory_server_1 = require("mongodb-memory-server");
let database;
const connectDB = async () => {
    let uri;
    console.log(process.env.MONGO_URI);
    if (process.env.MONGO_URI === 'in_memory') {
        const mongod = await mongodb_memory_server_1.MongoMemoryServer.create();
        uri = mongod.getUri();
    }
    else {
        uri = process.env.MONGO_URI;
    }
    if (database) {
        return;
    }
    try {
        await mongoose_1.default.connect(uri);
    }
    catch (e) {
        console.log(e);
    }
    console.log('Connected to database');
    database = mongoose_1.default.connection;
    //await database.db.dropDatabase()
    // console.log("Repopulating data...")
    // await createData()
    // console.log("Repopulated data")
};
exports.connectDB = connectDB;
const disconnectDB = () => {
    if (!database) {
        return;
    }
    mongoose_1.default.disconnect();
};
exports.disconnectDB = disconnectDB;
const createData = async () => {
    // for (let card of cardsJson) {
    //   await CardModel.create(card)
    // }
    // for (let cardClass of cardClassesJson) {
    //   await CardClassModel.create(cardClass)
    // }
};
//# sourceMappingURL=database.js.map