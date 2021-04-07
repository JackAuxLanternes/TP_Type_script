"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonController = void 0;
var PokemonController = /** @class */ (function () {
    function PokemonController() {
    }
    PokemonController.whichAttackFirst = function (pokemon1, pokemon2) {
        if (pokemon1.speed > pokemon2.speed) {
            return pokemon1;
        }
        else {
            return pokemon2;
        }
    };
    return PokemonController;
}());
exports.PokemonController = PokemonController;
