import {Pokemon} from "./models";

const pikachu = new Pokemon({
    name: "Pikachu",
    hp: 35,
    attack: 55,
    defense: 40,
    specialAttack: 50,
    specialDefense: 50,
    speed: 90
});

console.log(pikachu.name);
