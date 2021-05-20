"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var User_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.martialStatus = exports.Gender = void 0;
const typeorm_1 = require("typeorm");
const PublicService_1 = __importDefault(require("./PublicService"));
var Gender;
(function (Gender) {
    Gender["male"] = "masculino";
    Gender["female"] = "feminino";
    Gender["other"] = "outro";
})(Gender = exports.Gender || (exports.Gender = {}));
var martialStatus;
(function (martialStatus) {
    martialStatus["single"] = "solteiro";
    martialStatus["married"] = "casado";
    martialStatus["commonLawMarriage"] = "uni\u00E3o est\u00E1vel";
    martialStatus["divorced"] = "divorciado";
})(martialStatus = exports.martialStatus || (exports.martialStatus = {}));
let User = User_1 = 
/*
uso do Entity indica o model que será salvo
no banco de dados (dentro da tabela users)
*/
class User {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "login", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], User.prototype, "age", void 0);
__decorate([
    typeorm_1.Column({ type: 'int', nullable: false }),
    __metadata("design:type", String)
], User.prototype, "gender", void 0);
__decorate([
    typeorm_1.Column({ type: 'int', nullable: false }),
    __metadata("design:type", String)
], User.prototype, "martialStatus", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], User.prototype, "isPregnant", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], User.prototype, "isLactating", void 0);
__decorate([
    typeorm_1.OneToOne(type => PublicService_1.default, user => User_1),
    __metadata("design:type", PublicService_1.default)
], User.prototype, "publicService", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], User.prototype, "created_at", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], User.prototype, "updated_at", void 0);
User = User_1 = __decorate([
    typeorm_1.Entity('users')
    /*
    uso do Entity indica o model que será salvo
    no banco de dados (dentro da tabela users)
    */
], User);
exports.default = User;
