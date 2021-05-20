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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
const auth_1 = __importDefault(require("../config/auth"));
const AppError_1 = __importDefault(require("../errors/AppError"));
const User_1 = __importDefault(require("../models/User"));
// Criando uma classe para os serviços
// e regras de negócio de autenticação.
class AuthenticateUserService {
    execute({ login, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            // Conectando-se com os dados do modelo do banco
            const usersRepository = typeorm_1.getRepository(User_1.default);
            // Conferindo se o login informado existe no banco
            const user = yield usersRepository.findOne({
                where: { login },
            });
            // Caso não exista, Lança uma nova excessão
            if (!user) {
                throw new AppError_1.default('Email ou Senha inválidos', 401);
            }
            // Conferindo se a senha informada confere com a cadastrada
            const passwordMatched = yield bcryptjs_1.compare(password, user.password);
            // Caso não, lança uma excessão
            if (!passwordMatched) {
                throw new AppError_1.default('Email ou Senha inválidos', 401);
            }
            const { secret, expiresIn } = auth_1.default.jwt;
            const token = jsonwebtoken_1.sign({}, secret, {
                subject: user.id,
                expiresIn,
            });
            return {
                user,
                token,
            };
        });
    }
}
exports.default = AuthenticateUserService;
