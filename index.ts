import {Pokemon} from "./models";
import {Type} from "./models/type.model";

const electric = new Type("Electric");
const water = new Type("Water");

electric.addResistance(water);
water.addWeakness(electric);

const pikachu = new Pokemon({
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
