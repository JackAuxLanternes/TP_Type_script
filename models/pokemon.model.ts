export interface IPokemon
{
    name: string;
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
}

export class Pokemon
{
    name: string;
    maxHp: number;
    currentHp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;

    constructor(props: IPokemon) {
        this.name = props.name;
        this.maxHp = props.hp;
        this.currentHp = props.hp;
        this.attack = props.attack;
        this.defense = props.defense;
        this.specialAttack = props.specialAttack;
        this.specialDefense = props.specialDefense;
        this.speed = props.speed;
    }
}
