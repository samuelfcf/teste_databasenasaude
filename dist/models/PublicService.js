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
var PublicService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modality = exports.Carrer = void 0;
const typeorm_1 = require("typeorm");
const User_1 = __importDefault(require("./User"));
// higherTeaching = Magistério superior
// teachingOfBasicAndTech = Magistério do ensino básico, técnico e tecnológico
// technicalAdmEducation = Técnico-administrativo em educação
var Carrer;
(function (Carrer) {
    Carrer["higherTeaching"] = "magist\u00E9rio superior";
    Carrer["teachingOfBasicAndTech"] = "magist\u00E9rio do ensino b\u00E1sico, t\u00E9cnico e tecnol\u00F3gico";
    Carrer["technicalAdmEducation"] = "t\u00E9cnico-administrativo em educa\u00E7\u00E3o";
})(Carrer = exports.Carrer || (exports.Carrer = {}));
var Modality;
(function (Modality) {
    Modality["presential"] = "presencial";
    Modality["hybrid"] = "h\u00EDbrido";
    Modality["telecommuting"] = "teletrabalho";
})(Modality = exports.Modality || (exports.Modality = {}));
let PublicService = PublicService_1 = class PublicService {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], PublicService.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PublicService.prototype, "institution", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PublicService.prototype, "yearOfStart", void 0);
__decorate([
    typeorm_1.Column({ type: 'text', nullable: false }),
    __metadata("design:type", String)
], PublicService.prototype, "career", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PublicService.prototype, "sector", void 0);
__decorate([
    typeorm_1.Column({ type: 'text', nullable: false }),
    __metadata("design:type", String)
], PublicService.prototype, "modalityOfWork", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PublicService.prototype, "user_id", void 0);
__decorate([
    typeorm_1.OneToOne(type => User_1.default, publicService => PublicService_1),
    typeorm_1.JoinColumn(),
    __metadata("design:type", User_1.default)
], PublicService.prototype, "user", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], PublicService.prototype, "created_at", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], PublicService.prototype, "updated_at", void 0);
PublicService = PublicService_1 = __decorate([
    typeorm_1.Entity('publicService')
], PublicService);
exports.default = PublicService;
