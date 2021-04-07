export class Type
{
    name: string;
    weaknesses: Type[];
    resistances: Type[];
    immunities: Type[];

    constructor(name: string) {
        this.name = name;
        this.weaknesses = [];
        this.resistances = [];
        this.immunities = [];
    }

    addWeakness(weakness: Type): void
    {
        this.weaknesses.push(weakness);
    }

    addResistance(resistance: Type): void
    {
        this.resistances.push(resistance);
    }

    addImmunity(immunity: Type): void
    {
        this.immunities.push(immunity);
    }
}
