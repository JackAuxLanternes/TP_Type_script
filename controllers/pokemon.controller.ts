import {Move, Pokemon, Type} from "../models";

export class PokemonController
{
    static attackWith(attacker: Pokemon, defender: Pokemon, move: Move): void
    {
        let damages;

        console.log(`${attacker.name} used ${move.name} against ${defender.name}`);
        move.ppLeft -= 1;

        if(Math.floor(Math.random() * 100) > move.accuracy)
        {
            console.log(`${attacker.name} missed`);
            return;
        }

        if(move.category === "physical")
        {
            damages = move.power * attacker.attack * this.getAttackMultiplier(move.type, defender.types);

            damages /= defender.defense;
        }
        else
        {
            damages = move.power * attacker.specialAttack * this.getAttackMultiplier(move.type, defender.types);

            damages /= defender.specialDefense;
        }

        damages = Math.floor(damages);
        console.log(`${attacker.name} deal ${damages} damages`);

        if(defender.currentHp - damages > 0)
        {
            defender.currentHp -= damages;
        }
        else
        {
            console.log(`${defender.name} is K.O.`);
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

    private static getAttackMultiplier(moveType: Type, defenderTypes: Type[]): number
    {
        return defenderTypes.reduce((multiplier, defenderType) => {
            if (this.containsIn(moveType, defenderType.immunities) || multiplier === 0) {
                return 0;
            }

            defenderType.weaknesses.forEach((weakness) => {
                if (weakness === moveType) {
                    multiplier *= 2;
                }
            });

            defenderType.resistances.forEach((resistance) => {
                if (resistance === moveType) {
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
