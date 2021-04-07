"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("./models");
var pikachu = new models_1.Pokemon({
    name: "Pikachu",
    hp: 35,
    attack: 55,
    defense: 40,
    specialAttack: 50,
    specialDefense: 50,
    speed: 90
});
console.log(pikachu.name);
