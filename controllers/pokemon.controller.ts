import {Pokemon} from "../models";
export class PokemonController
{
    static attack(attacker: Pokemon, defender: Pokemon): void
    {
        defender.currentHp -= (50 * attacker.attack) / defender.defense;
    }

    static whichAttackFirst(pokemon1: Pokemon, pokemon2: Pokemon): Pokemon
    {
        if(pokemon1.speed === pokemon2.speed)
        {
            if(Math.floor(Math.random()) === 0) {
                return pokemon1;
            }
            else{
                return pokemon2;
            }
        }
        else if(pokemon1.speed > pokemon2.speed){
            return pokemon1;
        }
        else {
            return pokemon2;
        }
    }
}
