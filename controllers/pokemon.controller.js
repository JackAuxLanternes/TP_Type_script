"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonController = void 0;
var PokemonController = /** @class */ (function () {
    function PokemonController() {
    }
    PokemonController.attack = function (attacker, defender) {
        var damages = 50 * attacker.attack * this.getAttackMultiplier(attacker.types[0], defender.types);
        damages /= defender.defense;
        if (defender.currentHp - damages >= 0) {
            defender.currentHp -= damages;
        }
        else {
            defender.currentHp = 0;
        }
    };
    PokemonController.whichAttackFirst = function (pokemon1, pokemon2) {
        if (pokemon1.speed === pokemon2.speed) {
            if (Math.floor(Math.random()) === 0) {
                return pokemon1;
            }
            else {
                return pokemon2;
            }
        }
        else if (pokemon1.speed > pokemon2.speed) {
            return pokemon1;
        }
        else {
            return pokemon2;
        }
    };
    PokemonController.getAttackMultiplier = function (attackerType, defenderTypes) {
        var _this = this;
        return defenderTypes.reduce(function (multiplier, defenderType) {
            if (_this.containsIn(attackerType, defenderType.immunities) || multiplier === 0) {
                return 0;
            }
            defenderType.weaknesses.forEach(function (weakness) {
                if (weakness === attackerType) {
                    multiplier *= 2;
                }
            });
            defenderType.resistances.forEach(function (resistance) {
                if (resistance === attackerType) {
                    multiplier /= 2;
                }
            });
            return multiplier;
        }, 1);
    };
    PokemonController.containsIn = function (typeSearched, typeList) {
        var flag = typeList.reduce(function (prev, type) {
            if (typeSearched === type) {
                return true;
            }
            else {
                return prev;
            }
        }, false);
        return flag;
    };
    return PokemonController;
}());
exports.PokemonController = PokemonController;
