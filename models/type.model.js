"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = void 0;
var Type = /** @class */ (function () {
    function Type(name) {
        this.name = name;
        this.weaknesses = [];
        this.resistances = [];
        this.immunities = [];
    }
    Type.prototype.addWeakness = function (weakness) {
        this.weaknesses.push(weakness);
    };
    Type.prototype.addResistance = function (resistance) {
        this.resistances.push(resistance);
    };
    Type.prototype.addImmunity = function (immunity) {
        this.immunities.push(immunity);
    };
    return Type;
}());
exports.Type = Type;
