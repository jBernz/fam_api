"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const family_api_1 = __importDefault(require("./integration/family.api"));
const router_1 = __importDefault(require("./integration/cards/router"));
const router_2 = __importDefault(require("./integration/tags/router"));
async function createServer() {
    const server = (0, express_1.default)();
    server.use(express_1.default.json());
    server.use((0, cors_1.default)());
    server.use('/families', family_api_1.default);
    server.use('/cards', router_1.default);
    server.use('/tags', router_2.default);
    server.get('/health', (req, res) => {
        res.send('Healthy');
    });
    return server;
}
exports.createServer = createServer;
//# sourceMappingURL=server.js.map