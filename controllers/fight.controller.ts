import {Move, Pokemon} from "../models";
import {PokemonController} from "./pokemon.controller";
import Timeout = NodeJS.Timeout;

export class FightController
{
    static interval: Timeout;

    static async startBattle(pokemon1: Pokemon, pokemon2: Pokemon, callback: (pokemonWinner: Pokemon | null) => void): Promise<void>
    {
        let turnCounter = 0;
        this.interval = setInterval(async () =>
        {
            turnCounter += 1;
            if(!pokemon1.isKO() && !pokemon2.isKO()){
                console.log(`=== Turn n° ${turnCounter} ===`);
                await this.newTurn(pokemon1, pokemon2);

                console.log(pokemon1.hpLeft());
                console.log(pokemon2.hpLeft());
            }
            else {
                this.stopInterval();
                if(pokemon1.isKO() && pokemon2.isKO()){
                    callback(null);
                }
                else if(pokemon2.isKO()){
                    callback(pokemon1);
                }
                else {
                    callback(pokemon2);
                }
            }
        }, 1000);
    }

    static async testBattle(pokemon1: Pokemon, pokemon2: Pokemon): Promise<Pokemon | null>
    {
        while(!pokemon1.isKO() && !pokemon2.isKO())
        {
            await this.newTurn(pokemon1, pokemon2);
        }
        if(pokemon1.isKO() && pokemon2.isKO()){
            return null;
        }
        else if(pokemon2.isKO()){
            return pokemon1;
        }
        else {
            return pokemon2;
        }
    }

    private static async newTurn(pokemon1: Pokemon, pokemon2: Pokemon): Promise<void>
    {
        const randomAttackNumber1 = this.getRandomInt(0, pokemon1.moves.length - 1);
        const randomAttackNumber2 = this.getRandomInt(0, pokemon2.moves.length - 1);
        const pokemon1Move = pokemon1.moves[randomAttackNumber1];
        const pokemon2Move = pokemon2.moves[randomAttackNumber2];

        if(await this.whichAttackFirst(pokemon1, pokemon1Move, pokemon2, pokemon2Move) === pokemon1)
        {
            await this.fight(pokemon1, pokemon1Move, pokemon2, pokemon2Move);
        }
        else
        {
            await this.fight(pokemon2, pokemon2Move, pokemon1, pokemon1Move);
        }
    }

    private static async fight(firstAttacker: Pokemon, firstAttackerMove: Move, secondAttacker: Pokemon, secondAttackerMove: Move): Promise<void>
    {
        await PokemonController.attackWith(firstAttacker, secondAttacker, firstAttackerMove);

        if(!secondAttacker.isKO()){
            await PokemonController.attackWith(secondAttacker, firstAttacker, secondAttackerMove);
        }
    }

    static async whichAttackFirst(pokemon1: Pokemon, pokemon1Move: Move, pokemon2: Pokemon, pokemon2Move: Move): Promise<Pokemon>
    {
        if(pokemon1Move.priority > pokemon2Move.priority){
            return pokemon1;
        }
        else if(pokemon2Move.priority > pokemon1Move.priority){
            return pokemon2;
        }

        if(pokemon1.speed === pokemon2.speed)
        {
            if(this.getRandomInt(0, 1) === 0) {
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

    public static getRandomInt(min: number, max: number): number
    {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    private static stopInterval(){
        clearInterval(this.interval);
    }
}
