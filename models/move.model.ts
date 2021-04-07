import {Type} from "./type.model";

export interface IMove
{
    name: string;
    type: Type;
    power: number;
    precision: number;
    category: string;
}

export class Move
{
    name: string;
    type: Type;
    power: number;
    precision: number;
    category: string;

    constructor(props: IMove) {
        this.name = props.name;
        this.type = props.type;
        this.power = props.power;
        this.precision = props.precision;
        this.category = props.category;
    }
}
