"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonController = void 0;
var PokemonController = /** @class */ (function () {
    function PokemonController() {
    }
    PokemonController.attack = function (attacker, defender) {
        var damages = (50 * attacker.attack) / defender.defense;
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
    return PokemonController;
}());
exports.PokemonController = PokemonController;
