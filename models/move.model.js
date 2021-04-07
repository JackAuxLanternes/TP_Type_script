"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Move = void 0;
var Move = /** @class */ (function () {
    function Move(props) {
        this.name = props.name;
        this.type = props.type;
        this.pp = props.pp;
        this.ppLeft = props.pp;
        this.power = props.power;
        this.accuracy = props.accuracy;
        this.priority = props.priority;
        this.category = props.category;
    }
    return Move;
}());
exports.Move = Move;
