"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("./models");
var electric = new models_1.Type("Electric");
var water = new models_1.Type("Water");
electric.addResistance(water);
water.addWeakness(electric);
var thunder = new models_1.Move({
    name: 'Thunder',
    type: electric,
    pp: 10,
    power: 110,
    accuracy: 100,
    priority: 0,
    category: 'special'
});
var pikachu = new models_1.Pokemon({
    name: "Pikachu",
    types: [electric],
    hp: 35,
    attack: 55,
    defense: 40,
    specialAttack: 50,
    specialDefense: 50,
    speed: 90,
    moves: [thunder]
});
console.log(pikachu.name);
console.log(pikachu.types);
