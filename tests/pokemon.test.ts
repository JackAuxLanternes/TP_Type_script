import {Pokemon} from "../models";
import {PokemonController} from "../controllers/pokemon.controller";

const pikachu = new Pokemon("Pikachu", 26);
const arceus = new Pokemon("Arceus", 120);

test('Arceus should attack before Pikachu', () => {
    expect(PokemonController.whichAttackFirst(pikachu, arceus)).toBe(arceus);
});
