import {Type} from "./type.model";

export interface IMove
{
    name: string;
    type: Type;
    pp: number;
    power: number;
    accuracy: number;
    priority: number;
    category: string;
}

export class Move
{
    name: string;
    type: Type;
    pp: number;
    ppLeft: number;
    power: number;
    accuracy: number;
    priority: number;
    category: string;

    constructor(props: IMove) {
        this.name = props.name;
        this.type = props.type;
        this.pp = props.pp;
        this.ppLeft = props.pp;
        this.power = props.power;
        this.accuracy = props.accuracy;
        this.priority = props.priority;
        this.category = props.category;
    }
}
