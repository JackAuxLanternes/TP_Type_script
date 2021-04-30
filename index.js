"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("./models");
var fight_controller_1 = require("./controllers/fight.controller");
var electric = new models_1.Type("Electric");
var water = new models_1.Type("Water");
var normal = new models_1.Type("Normal");
var fairy = new models_1.Type("Fairy");
var dragon = new models_1.Type("Dragon");
var ghost = new models_1.Type("Ghost");
electric.addResistance(water);
water.addWeakness(electric);
fairy.addImmunity(dragon);
normal.addImmunity(ghost);
ghost.addImmunity(normal);
var thunder = new models_1.Move({
    name: 'Thunder',
    type: electric,
    pp: 10,
    power: 110,
    accuracy: 100,
    priority: 0,
    category: 'special'
});
var judgment = new models_1.Move({
    name: 'Judgment',
    type: normal,
    pp: 10,
    power: 100,
    accuracy: 100,
    priority: 0,
    category: 'special'
});
var aqua_jet = new models_1.Move({
    name: 'Aqua jet',
    type: water,
    pp: 20,
    power: 40,
    accuracy: 100,
    priority: 1,
    category: 'physical'
});
var shadow_ball = new models_1.Move({
    name: 'Shadow ball',
    type: ghost,
    pp: 15,
    power: 80,
    accuracy: 100,
    priority: 0,
    category: 'special'
});
var shadow_claw = new models_1.Move({
    name: 'Shadow Claw',
    type: ghost,
    pp: 15,
    power: 70,
    accuracy: 100,
    priority: 0,
    category: 'physical'
});
var pikachu = new models_1.Pokemon({
    name: 'Pikachu',
    types: [electric],
    hp: 35,
    attack: 55,
    defense: 40,
    specialAttack: 50,
    specialDefense: 50,
    speed: 90,
    moves: [thunder]
});
var arceus = new models_1.Pokemon({
    name: 'Arceus',
    types: [normal],
    hp: 120,
    attack: 120,
    defense: 120,
    specialAttack: 120,
    specialDefense: 120,
    speed: 120,
    moves: [judgment, shadow_claw]
});
var marill = new models_1.Pokemon({
    name: 'Marill',
    types: [water, fairy],
    hp: 70,
    attack: 20,
    defense: 50,
    specialAttack: 10,
    specialDefense: 50,
    speed: 40,
    moves: [aqua_jet]
});
var giratina = new models_1.Pokemon({
    name: 'Giratina',
    types: [ghost, dragon],
    hp: 150,
    attack: 100,
    defense: 120,
    specialAttack: 100,
    specialDefense: 120,
    speed: 90,
    moves: [shadow_ball]
});
fight_controller_1.FightController.startBattle(arceus, giratina, function (pokemonWinner) {
    if (pokemonWinner !== null) {
        console.log("And the winner is " + pokemonWinner.name + " !!!");
    }
    else {
        console.log("Double K.O. ! How ? ¯\\_(ツ)_/¯");
    }
});
