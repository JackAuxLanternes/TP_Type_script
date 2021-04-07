"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
var pokemon_controller_1 = require("../controllers/pokemon.controller");
var pikachu = new models_1.Pokemon("Pikachu", 26);
var arceus = new models_1.Pokemon("Arceus", 120);
test('Arceus should attack before Pikachu', function () {
    expect(pokemon_controller_1.PokemonController.whichAttackFirst(pikachu, arceus)).toBe(arceus);
});
