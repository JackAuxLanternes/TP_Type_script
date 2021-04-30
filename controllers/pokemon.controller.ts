import {Move, Pokemon, Type} from "../models";
import {FightController} from "./fight.controller";

export class PokemonController
{
    static async attackWith(attacker: Pokemon, defender: Pokemon, move: Move): Promise<number>
    {
        let damages;

        console.log(`${attacker.name} used ${move.name} against ${defender.name}`);
        move.ppLeft -= 1;

        if(Math.floor(FightController.getRandomInt(0, 100)) > move.accuracy)
        {
            console.log(`${attacker.name} missed`);
            return 0;
        }

        if(attacker.currentHp === 0)
        {
            console.log(`But ${attacker.name} is K.O.`);
            return 0;
        }

        if(move.category === "physical")
        {
            damages = move.power * attacker.attack * await this.getAttackMultiplier(move.type, defender.types);

            damages /= defender.defense;
        }
        else
        {
            damages = move.power * attacker.specialAttack * await this.getAttackMultiplier(move.type, defender.types);

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
            defender.currentHp = 0;
        }
        return damages;
    }

    private static async getAttackMultiplier(moveType: Type, defenderTypes: Type[]): Promise<number>
    {
        let multiplier = 1;
        for(let i = 0; i < defenderTypes.length; i++)
        {
            if (await this.containsIn(moveType, defenderTypes[i].immunities) || multiplier === 0) {
                return 0;
            }

            defenderTypes[i].weaknesses.forEach((weakness) => {
                if (weakness === moveType) {
                    multiplier *= 2;
                }
            });

            defenderTypes[i].resistances.forEach((resistance) => {
                if (resistance === moveType) {
                    multiplier /= 2;
                }
            });
        }

        return multiplier;
    }

    private static async containsIn(typeSearched: Type, typeList: Type[]): Promise<boolean>
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
