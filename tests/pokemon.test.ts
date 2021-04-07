import {Pokemon} from "../models";
import {PokemonController} from "../controllers/pokemon.controller";
import {Type} from "../models/type.model";

const electric = new Type("Electric");
const water = new Type("Water");
const normal = new Type("Normal");
const fairy = new Type("Fairy");
const dragon = new Type("Dragon");
const ghost = new Type("Ghost");

electric.addResistance(water);
water.addWeakness(electric);
fairy.addImmunity(dragon);
normal.addImmunity(ghost);
ghost.addImmunity(normal);

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

const arceus = new Pokemon({
    name: "Arceus",
    types: [normal],
    hp: 120,
    attack: 120,
    defense: 120,
    specialAttack: 120,
    specialDefense: 120,
    speed: 120
});

const marill = new Pokemon({
    name: "Marill",
    types: [water, fairy],
    hp: 70,
    attack: 20,
    defense: 50,
    specialAttack: 10,
    specialDefense: 50,
    speed: 40
});

const giratina = new Pokemon({
    name: "giratina",
    types: [ghost, dragon],
    hp: 150,
    attack: 100,
    defense: 120,
    specialAttack: 100,
    specialDefense: 120,
    speed: 90
});

describe('Test Pokemon fight', () => {
    it('Arceus should attack before Pikachu', () => {
        expect(PokemonController.whichAttackFirst(pikachu, arceus)).toBe(arceus);
    });

    it('Arceus shouldn\'t take damage from Giratina', () => {
        PokemonController.attack(giratina, arceus);
        expect(arceus.currentHp).toBe(120);
    });

    it('Pikachu should set Marill HP to 0 because of the Marill weakness to electricity', () => {
        PokemonController.attack(pikachu, marill);
        expect(marill.currentHp).toBe(0);
    });

    it('Pikachu should take only 12.5 damage from Marill because of the Pikachu resistance to water', () => {
        PokemonController.attack(marill, pikachu);
        expect(pikachu.currentHp).toBe(22.5);
    });

    it('Arceus should set Pikachu HP to 0, not below 0', () => {
        PokemonController.attack(arceus, pikachu);
        expect(pikachu.currentHp).toBe(0);
    });
});
