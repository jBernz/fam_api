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
exports.CardModel = exports.Creature = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const card_model_1 = require("../cards/card.model");
let Creature = class Creature {
    //Computed properties
    get powerLevel() {
        return this.vigor + this.impulse + this.special;
    }
    get vigorBonus() {
        return Math.ceil(this.vigor / 2);
    }
    get impulseBonus() {
        return Math.ceil(this.impulse / 2);
    }
    get specialBonus() {
        return Math.ceil(this.special / 2);
    }
    get hitPointMaximum() {
        return this.vigor * 4 + this.impulse * 2 + this.special * 2;
    }
    get baseSpeed() {
        return 4 + this.impulseBonus;
    }
    get energyMaximum() {
        return this.special;
    }
    get memoryMaximum() {
        return this.vigor + this.impulse + 2 * this.special;
    }
    get evasion() {
        return getValueOfType('evasion', this.cards) || 0;
    }
    get armor() {
        return getValueOfType('armor', this.cards) || 0;
    }
};
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Creature.prototype, "name", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, ref: card_model_1.Card }),
    __metadata("design:type", Array)
], Creature.prototype, "cards", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Number)
], Creature.prototype, "vigor", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Number)
], Creature.prototype, "impulse", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Number)
], Creature.prototype, "special", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Creature.prototype, "description", void 0);
Creature = __decorate([
    (0, typegoose_1.modelOptions)({ schemaOptions: {} })
], Creature);
exports.Creature = Creature;
exports.CardModel = (0, typegoose_1.getModelForClass)(card_model_1.Card);
function getValueOfType(arg0, cards) {
    throw new Error("Function not implemented.");
}
//# sourceMappingURL=creature.model.js.map