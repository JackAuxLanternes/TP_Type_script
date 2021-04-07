"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("./models");
var type_model_1 = require("./models/type.model");
var electric = new type_model_1.Type("Electric");
var water = new type_model_1.Type("Water");
electric.addResistance(water);
water.addWeakness(electric);
var pikachu = new models_1.Pokemon({
    name: "Pikachu",
    types: [electric],
    hp: 35,
    attack: 55,
    defense: 40,
    specialAttack: 50,
    specialDefense: 50,
    speed: 90
});
console.log(pikachu.name);
console.log(pikachu.types);
