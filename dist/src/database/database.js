"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnect = exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const cards_json_1 = __importDefault(require("../../data/cards.json"));
const card_classes_json_1 = __importDefault(require("../../data/card_classes.json"));
const creature_model_1 = require("./creatures/creature.model");
const card_class_model_1 = require("./card_class/card_class.model");
let database;
const connect = () => {
    const uri = "mongodb://localhost:27017/test";
    if (database) {
        return;
    }
    mongoose_1.default.connect(uri);
    database = mongoose_1.default.connection;
    database.once("open", async () => {
        console.log("Connected to database");
        await database.db.dropDatabase();
        console.log("Repopulating data...");
        await createData();
        console.log("Repopulated data");
    });
    database.on("error", () => {
        console.log("Error connecting to database");
    });
};
exports.connect = connect;
const disconnect = () => {
    if (!database) {
        return;
    }
    mongoose_1.default.disconnect();
};
exports.disconnect = disconnect;
const createData = async () => {
    for (let card of cards_json_1.default) {
        await creature_model_1.CardModel.parseAndCreate(card);
    }
    for (let cardClass of card_classes_json_1.default) {
        await card_class_model_1.CardClassModel.parseAndCreate(cardClass);
    }
};
//# sourceMappingURL=database.js.map