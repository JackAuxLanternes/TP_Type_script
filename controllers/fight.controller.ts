import {Pokemon} from "../models";
import {PokemonController} from "./pokemon.controller";
import Timeout = NodeJS.Timeout;

export class FightController
{
    static interval: Timeout;

    static async startBattle(pokemon1: Pokemon, pokemon2: Pokemon, callback: (pokemonWinner: Pokemon) => void): Promise<void>
    {
        let turnCounter = 1;
        this.interval = setInterval(async () =>
        {
            if(!pokemon1.isKO() && !pokemon2.isKO()){
                console.log(`=== Turn n° ${turnCounter} ===`);
                await this.newTurn(pokemon1, pokemon2);

                console.log(pokemon1.hpLeft());
                console.log(pokemon2.hpLeft());
            }
            else {
                this.stopInterval();
                if(pokemon2.isKO()){
                    callback(pokemon1);
                }
                else {
                    callback(pokemon2);
                }
            }
        }, 1000);
    }

    private static async newTurn(pokemon1: Pokemon, pokemon2: Pokemon): Promise<void>
    {
        if(await PokemonController.whichAttackFirst(pokemon1, pokemon2) === pokemon1)
        {
            await this.fight(pokemon1, pokemon2);
        }
        else
        {
            await this.fight(pokemon2, pokemon1);
        }
    }

    private static async fight(firstAttacker: Pokemon, secondAttacker: Pokemon)
    {
        let randomAttackNumber = Math.floor(Math.random() * firstAttacker.moves.length);
        await PokemonController.attackWith(firstAttacker, secondAttacker, firstAttacker.moves[randomAttackNumber]);

        if(!secondAttacker.isKO())
        {
            randomAttackNumber = Math.floor(Math.random() * secondAttacker.moves.length);
            await PokemonController.attackWith(secondAttacker, firstAttacker, secondAttacker.moves[randomAttackNumber]);
        }
    }

    private static stopInterval(){
        clearInterval(this.interval);
    }
}
