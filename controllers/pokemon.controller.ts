import {Pokemon} from "../models";
import {Type} from "../models/type.model";

export class PokemonController
{
    static attack(attacker: Pokemon, defender: Pokemon): void
    {
        let damages = 50 * attacker.attack * this.getAttackMultiplier(attacker.types[0], defender.types);

        damages /= defender.defense;

        if(defender.currentHp - damages >= 0)
        {
            defender.currentHp -= damages;
        }
        else
        {
            defender.currentHp = 0;
        }
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

    private static getAttackMultiplier(attackerType: Type, defenderTypes: Type[]): number
    {
        return defenderTypes.reduce((multiplier, defenderType) => {
            if (this.containsIn(attackerType, defenderType.immunities) || multiplier === 0) {
                return 0;
            }

            defenderType.weaknesses.forEach((weakness) => {
                if (weakness === attackerType) {
                    multiplier *= 2;
                }
            });

            defenderType.resistances.forEach((resistance) => {
                if (resistance === attackerType) {
                    multiplier /= 2;
                }
            });
            return multiplier;
        }, 1);
    }

    private static containsIn(typeSearched: Type, typeList: Type[]): boolean
    {
        let flag = typeList.reduce((prev, type) => {
            if (typeSearched === type) {
                return true;
            } else {
                return prev;
            }
        }, false);

        return flag;
    }
}
