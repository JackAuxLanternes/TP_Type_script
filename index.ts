import {Move, Pokemon, Type} from "./models";

const electric = new Type("Electric");
const water = new Type("Water");

electric.addResistance(water);
water.addWeakness(electric);

const thunder = new Move({
    name: 'Thunder',
    type: electric,
    pp: 10,
    power: 110,
    accuracy: 100, // It's 70 but it's for the test
    priority: 0,
    category: 'special'
});

const pikachu = new Pokemon({
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
