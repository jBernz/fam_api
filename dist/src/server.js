"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./database/database");
const app = (0, express_1.default)();
const port = 5002;
(0, database_1.connect)();
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map