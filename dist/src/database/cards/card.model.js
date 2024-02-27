"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardModel = exports.Card = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const card_tag_model_1 = require("../card_tags/card_tag.model");
const card_family_model_1 = require("../card_families/card_family.model");
let Card = class Card {
};
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Card.prototype, "name", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Number)
], Card.prototype, "memory", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: card_family_model_1.Family }),
    __metadata("design:type", Object)
], Card.prototype, "family", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Number)
], Card.prototype, "vigor_required", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Number)
], Card.prototype, "impulse_required", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Number)
], Card.prototype, "special_required", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Card.prototype, "description", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: card_tag_model_1.CardTag }),
    __metadata("design:type", Array)
], Card.prototype, "tags", void 0);
Card = __decorate([
    (0, typegoose_1.modelOptions)({ schemaOptions: {
            discriminatorKey: 'type'
        } })
], Card);
exports.Card = Card;
exports.CardModel = (0, typegoose_1.getModelForClass)(Card);
//# sourceMappingURL=card.model.js.map