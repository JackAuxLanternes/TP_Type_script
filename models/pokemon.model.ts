import {Type} from "./type.model";
import {Move} from "./move.model";

export interface IPokemon
{
    name: string;
    types: Type[];
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
    moves: Move[];
}

export class Pokemon
{
    name: string;
    types: Type[];
    maxHp: number;
    currentHp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
    moves: Move[];

    constructor(props: IPokemon) {
        this.name = props.name;
        this.types = props.types;
        this.maxHp = props.hp;
        this.currentHp = props.hp;
        this.attack = props.attack;
        this.defense = props.defense;
        this.specialAttack = props.specialAttack;
        this.specialDefense = props.specialDefense;
        this.speed = props.speed;
        this.moves = props.moves;
    }

    addMove(move: Move): void
    {
        if(this.moves.length < 4)
        {
            this.moves.push(move);
        }
    }

    removeMove(moveNumber: number): void
    {
        this.moves.splice(moveNumber, 1);
    }

    isKO(): boolean
    {
        return this.currentHp === 0;
    }
}
