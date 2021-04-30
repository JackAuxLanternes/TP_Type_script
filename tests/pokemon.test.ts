import {Move, Pokemon, Type} from "../models";
import {PokemonController} from "../controllers/pokemon.controller";
import {FightController} from "../controllers/fight.controller";

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

const thunder = new Move({
    name: 'Thunder',
    type: electric,
    pp: 10,
    power: 110,
    accuracy: 100, // It's 70 in the game but it's 100 for the test
    priority: 0,
    category: 'special'
});
const judgment = new Move({
    name: 'Judgment',
    type: normal,
    pp: 10,
    power: 100,
    accuracy: 100,
    priority: 0,
    category: 'special'
});
const aqua_jet = new Move({
    name: 'Aqua jet',
    type: water,
    pp: 20,
    power: 40,
    accuracy: 100,
    priority: 1,
    category: 'physical'
});
const shadow_ball = new Move({
    name: 'Shadow ball',
    type: ghost,
    pp: 15,
    power: 80,
    accuracy: 100,
    priority: 0,
    category: 'special'
});


const pikachu = new Pokemon({
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
const arceus = new Pokemon({
    name: 'Arceus',
    types: [normal],
    hp: 120,
    attack: 120,
    defense: 120,
    specialAttack: 120,
    specialDefense: 120,
    speed: 120,
    moves: [judgment]
});
const marill = new Pokemon({
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
const giratina = new Pokemon({
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

describe('Test Pokemon attacks damages', () => {
    it('Arceus shouldn\'t take damage from Giratina', async () => {
        expect(await PokemonController.attackWith(giratina, arceus, giratina.moves[0])).toBe(0);
        expect(arceus.currentHp).toBe(120);
        expect(arceus.isKO()).toBeFalsy();
        expect(arceus.hpLeft()).toBe("Arceus have 120 HP left");
    });

    it('Pikachu should set Marill KO because of the Marill weakness to electricity', async () => {
        expect(await PokemonController.attackWith(pikachu, marill, pikachu.moves[0])).toBe(220);
        expect(marill.currentHp).toBe(0);
        expect(marill.isKO()).toBeTruthy();
        expect(marill.hpLeft()).toBe("Marill is K.O.");
    });

    it('Pikachu should take only 10 damage from Marill because of the Pikachu resistance to water', async () => {
        expect(await PokemonController.attackWith(marill, pikachu, marill.moves[0])).toBe(10);
        expect(pikachu.currentHp).toBe(25);
        expect(pikachu.isKO()).toBeFalsy();
        expect(pikachu.hpLeft()).toBe("Pikachu have 25 HP left");
    });

    it('Arceus should set Pikachu KO, not below 0', async () => {
        expect(await PokemonController.attackWith(arceus, pikachu, arceus.moves[0])).toBe(240);
        expect(pikachu.currentHp).toBe(0);
        expect(pikachu.isKO()).toBeTruthy();
        expect(pikachu.hpLeft()).toBe("Pikachu is K.O.");
    });
});

describe('Test Pokemon fight', () => {
    beforeEach(() => {
        FightController.getRandomInt = jest.fn().mockImplementation(() => {
            return 1;
        });
    });

    it('Arceus should attack before Pikachu', async () => {
        FightController.getRandomInt(0, 1)
        expect(await FightController.whichAttackFirst(pikachu, pikachu.moves[0], arceus, arceus.moves[0])).toBe(arceus);
    });

    it('Marill should attack before Arceus because of Aqua Jet priority', async () => {
        expect(await FightController.whichAttackFirst(marill, marill.moves[0], arceus, arceus.moves[0])).toBe(marill);
    });

    it('Even with the same speed, Giratina should always attack before Pikachu because of beforeEach mock', async () => {
        expect(await FightController.whichAttackFirst(pikachu, pikachu.moves[0], giratina, giratina.moves[0])).toBe(giratina);
    });
});
