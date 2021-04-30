"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FightController = void 0;
var pokemon_controller_1 = require("./pokemon.controller");
var FightController = /** @class */ (function () {
    function FightController() {
    }
    FightController.startBattle = function (pokemon1, pokemon2, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var turnCounter;
            var _this = this;
            return __generator(this, function (_a) {
                turnCounter = 1;
                this.interval = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(!pokemon1.isKO() && !pokemon2.isKO())) return [3 /*break*/, 2];
                                console.log("=== Turn n\u00B0 " + turnCounter + " ===");
                                return [4 /*yield*/, this.newTurn(pokemon1, pokemon2)];
                            case 1:
                                _a.sent();
                                console.log(pokemon1.hpLeft());
                                console.log(pokemon2.hpLeft());
                                return [3 /*break*/, 3];
                            case 2:
                                this.stopInterval();
                                if (pokemon2.isKO()) {
                                    callback(pokemon1);
                                }
                                else {
                                    callback(pokemon2);
                                }
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); }, 1000);
                return [2 /*return*/];
            });
        });
    };
    FightController.newTurn = function (pokemon1, pokemon2) {
        return __awaiter(this, void 0, void 0, function () {
            var randomAttackNumber1, randomAttackNumber2, pokemon1Move, pokemon2Move;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        randomAttackNumber1 = Math.floor(Math.random() * pokemon1.moves.length);
                        randomAttackNumber2 = Math.floor(Math.random() * pokemon2.moves.length);
                        pokemon1Move = pokemon1.moves[randomAttackNumber1];
                        pokemon2Move = pokemon2.moves[randomAttackNumber2];
                        return [4 /*yield*/, this.whichAttackFirst(pokemon1, pokemon1Move, pokemon2, pokemon2Move)];
                    case 1:
                        if (!((_a.sent()) === pokemon1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.fight(pokemon1, pokemon1Move, pokemon2, pokemon2Move)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.fight(pokemon2, pokemon2Move, pokemon1, pokemon1Move)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    FightController.fight = function (firstAttacker, firstAttackerMove, secondAttacker, secondAttackerMove) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, pokemon_controller_1.PokemonController.attackWith(firstAttacker, secondAttacker, firstAttackerMove)];
                    case 1:
                        _a.sent();
                        if (!!secondAttacker.isKO()) return [3 /*break*/, 3];
                        return [4 /*yield*/, pokemon_controller_1.PokemonController.attackWith(secondAttacker, firstAttacker, secondAttackerMove)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FightController.whichAttackFirst = function (pokemon1, pokemon1Move, pokemon2, pokemon2Move) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (pokemon1Move.priority > pokemon2Move.priority) {
                    return [2 /*return*/, pokemon1];
                }
                else if (pokemon2Move.priority > pokemon1Move.priority) {
                    return [2 /*return*/, pokemon2];
                }
                if (pokemon1.speed === pokemon2.speed) {
                    if (this.getRandomInt(0, 1) === 0) {
                        return [2 /*return*/, pokemon1];
                    }
                    else {
                        return [2 /*return*/, pokemon2];
                    }
                }
                else if (pokemon1.speed > pokemon2.speed) {
                    return [2 /*return*/, pokemon1];
                }
                else {
                    return [2 /*return*/, pokemon2];
                }
                return [2 /*return*/];
            });
        });
    };
    FightController.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    FightController.stopInterval = function () {
        clearInterval(this.interval);
    };
    return FightController;
}());
exports.FightController = FightController;
