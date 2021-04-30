"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
var Pokemon = /** @class */ (function () {
    function Pokemon(props) {
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
    Pokemon.prototype.addMove = function (move) {
        if (this.moves.length < 4) {
            this.moves.push(move);
        }
    };
    Pokemon.prototype.removeMove = function (moveNumber) {
        this.moves.splice(moveNumber, 1);
    };
    Pokemon.prototype.isKO = function () {
        return this.currentHp === 0;
    };
    Pokemon.prototype.hpLeft = function () {
        if (this.isKO()) {
            return this.name + " est K.O.";
        }
        if (this.currentHp === 1) {
            return this.name + " a 1 HP restant, c'est chaud";
        }
        return this.name + " a " + this.currentHp + " HP restants";
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
