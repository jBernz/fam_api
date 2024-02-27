import { CardType } from "fam-types"
import { AbilityCardModel } from "./ability_card.model"
import { AttackCardModel } from "./attack_card.model"
import { FeatureCardModel } from "./feature_card.model"
import { StatusCardModel } from "./status_card.model"

export const cardTypes = {
  [CardType.Ability]: AbilityCardModel,
  [CardType.Attack]: AttackCardModel,
  [CardType.Feature]: FeatureCardModel,
  [CardType.Status]: StatusCardModel
}