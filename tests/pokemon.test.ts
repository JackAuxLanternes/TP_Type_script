import {Pokemon} from "../models";
import {PokemonController} from "../controllers/pokemon.controller";

const pikachu = new Pokemon({
    name: "Pikachu",
    hp: 35,
    attack: 55,
    defense: 40,
    specialAttack: 50,
    specialDefense: 50,
    speed: 90
});
const arceus = new Pokemon({
    name: "Arceus",
    hp: 120,
    attack: 120,
    defense: 120,
    specialAttack: 120,
    specialDefense: 120,
    speed: 120
});

test('Arceus should attack before Pikachu', () => {
    expect(PokemonController.whichAttackFirst(pikachu, arceus)).toBe(arceus);
});
