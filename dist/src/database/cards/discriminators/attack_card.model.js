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
exports.AttackCardModel = exports.AttackCard = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const card_model_1 = require("../card.model");
class AttackCard extends card_model_1.Card {
}
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Number)
], AttackCard.prototype, "action_cost", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Number)
], AttackCard.prototype, "range", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Number)
], AttackCard.prototype, "target", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Number)
], AttackCard.prototype, "miss_damage", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Number)
], AttackCard.prototype, "hit_damage", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Number)
], AttackCard.prototype, "critical_damage", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Number)
], AttackCard.prototype, "critical_threshold", void 0);
exports.AttackCard = AttackCard;
exports.AttackCardModel = (0, typegoose_1.getDiscriminatorModelForClass)(card_model_1.CardModel, AttackCard);
//# sourceMappingURL=attack_card.model.js.map