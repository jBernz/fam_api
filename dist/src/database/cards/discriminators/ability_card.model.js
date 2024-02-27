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
exports.AbilityCardModel = exports.AbilityCard = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const card_model_1 = require("../card.model");
class AbilityCard extends card_model_1.Card {
}
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Number)
], AbilityCard.prototype, "action_cost", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Number)
], AbilityCard.prototype, "range", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Number)
], AbilityCard.prototype, "target", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Array)
], AbilityCard.prototype, "save_target", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Number)
], AbilityCard.prototype, "save_difficulty_modifier", void 0);
exports.AbilityCard = AbilityCard;
exports.AbilityCardModel = (0, typegoose_1.getDiscriminatorModelForClass)(card_model_1.CardModel, AbilityCard);
//# sourceMappingURL=ability_card.model.js.map